import React, { useState, useEffect, useRef } from 'react';

const HelloView: React.FC = () => {
  // Snake Game States
  const GRID_SIZE = 20;
  const CELL_COUNT = 20; // 20x20 grid
  const [snake, setSnake] = useState<[number, number][]>([[10, 10], [10, 11], [10, 12]]);
  const [food, setFood] = useState<[number, number]>([5, 5]);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('UP');
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate random food position not on snake
  const generateFood = (currentSnake: [number, number][]): [number, number] => {
    let newFood: [number, number] = [0, 0];
    let isOnSnake = true;
    while (isOnSnake) {
      newFood = [
        Math.floor(Math.random() * CELL_COUNT),
        Math.floor(Math.random() * CELL_COUNT),
      ];
      isOnSnake = currentSnake.some(cell => cell[0] === newFood[0] && cell[1] === newFood[1]);
    }
    return newFood;
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Start the game if the user presses an arrow or WASD key while the start overlay is active
      const activeKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'W', 's', 'S', 'a', 'A', 'd', 'D'];
      if (!isPlaying && !gameOver && !isWon && activeKeys.includes(e.key)) {
        startGame();
        // Set the initial direction based on the key pressed
        if (['ArrowUp', 'w', 'W'].includes(e.key)) setDirection('UP');
        if (['ArrowDown', 's', 'S'].includes(e.key)) setDirection('DOWN');
        if (['ArrowLeft', 'a', 'A'].includes(e.key)) setDirection('LEFT');
        if (['ArrowRight', 'd', 'D'].includes(e.key)) setDirection('RIGHT');
        e.preventDefault();
        return;
      }

      if (!isPlaying || gameOver || isWon) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (direction !== 'DOWN') setDirection('UP');
          e.preventDefault();
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (direction !== 'UP') setDirection('DOWN');
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (direction !== 'RIGHT') setDirection('LEFT');
          e.preventDefault();
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (direction !== 'LEFT') setDirection('RIGHT');
          e.preventDefault();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isPlaying, gameOver, isWon]);

  // Main game loop
  const moveSnake = () => {
    setSnake((prevSnake) => {
      const head = prevSnake[0];
      let newHead: [number, number] = [...head];

      switch (direction) {
        case 'UP':
          newHead[1] -= 1;
          break;
        case 'DOWN':
          newHead[1] += 1;
          break;
        case 'LEFT':
          newHead[0] -= 1;
          break;
        case 'RIGHT':
          newHead[0] += 1;
          break;
      }

      // Check boundary collisions
      if (
        newHead[0] < 0 ||
        newHead[0] >= CELL_COUNT ||
        newHead[1] < 0 ||
        newHead[1] >= CELL_COUNT
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      // Check self collisions
      if (prevSnake.some((cell) => cell[0] === newHead[0] && cell[1] === newHead[1])) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check if food eaten
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        const nextScore = score + 1;
        setScore(nextScore);
        if (nextScore > highScore) setHighScore(nextScore);

        // Win state at 15 points
        if (nextScore >= 15) {
          setIsWon(true);
          setIsPlaying(false);
          return prevSnake;
        }

        setFood(generateFood(newSnake));
      } else {
        newSnake.pop(); // Remove tail
      }

      return newSnake;
    });
  };

  // Auto-play AI for Attract/Demo Mode
  const runDemoStep = () => {
    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const moves: { dir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'; pos: [number, number] }[] = [
        { dir: 'UP', pos: [head[0], head[1] - 1] },
        { dir: 'DOWN', pos: [head[0], head[1] + 1] },
        { dir: 'LEFT', pos: [head[0] - 1, head[1]] },
        { dir: 'RIGHT', pos: [head[0] + 1, head[1]] },
      ];

      // Filter safe moves (no boundary hits, no self-collisions)
      const safeMoves = moves.filter(({ pos }) => {
        const [x, y] = pos;
        const hitWall = x < 0 || x >= CELL_COUNT || y < 0 || y >= CELL_COUNT;
        const hitSelf = prevSnake.some((cell) => cell[0] === x && cell[1] === y);
        return !hitWall && !hitSelf;
      });

      if (safeMoves.length === 0) {
        // No safe moves: Reset demo state immediately to prevent lock
        setTimeout(() => {
          setSnake([[10, 10], [10, 11], [10, 12]]);
          setFood([5, 5]);
        }, 50);
        return prevSnake;
      }

      // Pick move that minimizes Manhattan distance to food
      let bestMove = safeMoves[0];
      let minDistance = Infinity;

      for (const move of safeMoves) {
        const dist = Math.abs(move.pos[0] - food[0]) + Math.abs(move.pos[1] - food[1]);
        if (dist < minDistance) {
          minDistance = dist;
          bestMove = move;
        }
      }

      const newHead = bestMove.pos;
      const newSnake = [newHead, ...prevSnake];

      // Check if food eaten
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  // Set manual interval loop
  useEffect(() => {
    if (isPlaying) {
      gameIntervalRef.current = setInterval(moveSnake, 130);
    } else {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    }

    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    };
  }, [isPlaying, direction, food, score]);

  // Set demo mode AI loop
  useEffect(() => {
    let demoInterval: NodeJS.Timeout | null = null;

    if (!isPlaying && !gameOver && !isWon) {
      demoInterval = setInterval(runDemoStep, 180);
    }

    return () => {
      if (demoInterval) clearInterval(demoInterval);
    };
  }, [isPlaying, gameOver, isWon, food]);

  // Reset/Start game
  const startGame = () => {
    setSnake([[10, 10], [10, 11], [10, 12]]);
    setDirection('UP');
    setScore(0);
    setGameOver(false);
    setIsWon(false);
    setFood([5, 5]);
    setIsPlaying(true);
  };

  return (
    <div className="grid h-full w-full gap-12 lg:grid-cols-2 lg:items-center">
      {/* Left Pane - Welcome Intro */}
      <div className="flex flex-col justify-center select-text">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl text-[#E5E9F0] font-medium tracking-wide">Hi all. I am</p>
          <h1 className="text-5xl font-normal text-[#F8FAFC] sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide sm:tracking-wider leading-none">
            Ngabo Angelos
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#4D5BCE] flex items-center gap-2.5 tracking-wide">
            <span className="text-[#43D9AD]">&gt;</span> Fullstack Developer
          </h2>
          <div className="text-sm sm:text-base text-[#607B96] font-mono leading-relaxed space-y-1.5 pt-3">
            <p>// a highly passionate engineer driven by solving complex problems</p>
            <p>// dedicated to clean, reusable code, local-first apps & backend API design</p>
          </div>
        </div>

        {/* Big spacing as seen on Figma */}
        <div className="mt-20 lg:mt-28 space-y-6 font-mono text-base leading-relaxed">
          <div className="space-y-3 text-sm sm:text-base tracking-wide">
            <p className="text-[#607B96]">// play the game if you feel bored</p>
            <p className="text-[#607B96]">// you can also find my profile on Github:</p>
          </div>
          <div className="rounded-lg border border-[#1E2D3D] bg-[#01080E] p-6 text-sm sm:text-base shadow-inner tracking-wide leading-loose">
            <span className="text-[#4D5BCE]">const</span>{' '}
            <span className="text-[#43D9AD]">githubLink</span> ={' '}
            <a
              href="https://github.com/angelos-ngabo"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFA1AD] underline transition-colors hover:text-[#FEA55F]"
            >
              "https://github.com/angelos-ngabo"
            </a>
            <span className="text-[#E5E9F0]">;</span>
          </div>
        </div>
      </div>

      {/* Right Pane - Retro Snake Game Box */}
      <div className="flex items-center justify-center relative">
        {/* Figma-style colorful background glow blobs behind the console */}
        <div className="absolute w-[130%] h-[130%] pointer-events-none select-none -z-10 overflow-visible flex items-center justify-center">
          <div className="absolute top-[0%] left-[0%] w-[320px] h-[320px] rounded-full bg-[#43D9AD]/20 blur-[85px] opacity-95 animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[0%] right-[0%] w-[360px] h-[360px] rounded-full bg-[#4D5BCE]/25 blur-[95px] opacity-95 animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative flex flex-col items-center rounded-xl border border-[#1E2D3D] bg-gradient-to-br from-[#175553]/25 via-[#011627]/90 to-[#43D9AD]/5 p-6 shadow-[0_0_60px_rgba(77,91,206,0.35)] backdrop-blur-xl max-w-[440px] w-full">
          {/* Retro Corner brackets & screw details */}
          <div className="absolute top-3 left-3 flex gap-1 opacity-60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D] border border-white/5" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D] border border-white/5" />
          </div>
          <div className="absolute top-3 right-3 flex gap-1 opacity-60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D] border border-white/5" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D] border border-white/5" />
          </div>
          <div className="absolute bottom-3 left-3 flex gap-1 opacity-40">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D]" />
          </div>
          <div className="absolute bottom-3 right-3 flex gap-1 opacity-40">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E2D3D]" />
          </div>

          {/* Console Logo Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#011627] border border-[#1E2D3D] px-3.5 py-0.5 rounded text-[10px] text-[#607B96] uppercase tracking-wider font-mono font-bold shadow-md">
            Retro-Console v2.1
          </div>

          {/* Canvas Board Area */}
          <div className="relative aspect-square w-full rounded-md border-2 border-[#01080E] bg-[#010d18] p-2.5 overflow-hidden shadow-inner">
            {/* CRT Scanline effect */}
            <div 
              className="pointer-events-none absolute inset-0 z-30 opacity-[0.04]"
              style={{
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                backgroundSize: '100% 4px',
              }}
            />

            {/* Draw Grid cells for retro style */}
            <div 
              className="grid h-full w-full gap-[1.5px] bg-[#1E2D3D]/15 p-[1px] rounded" 
              style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
            >
              {Array.from({ length: CELL_COUNT * CELL_COUNT }).map((_, index) => {
                const x = index % CELL_COUNT;
                const y = Math.floor(index / CELL_COUNT);
                const bodyIndex = snake.findIndex((cell) => cell[0] === x && cell[1] === y);
                const isSnakeHead = bodyIndex === 0;
                const isSnakeBody = bodyIndex > 0;
                const isFoodCell = food[0] === x && food[1] === y;

                if (isSnakeHead) {
                  return (
                    <div
                      key={index}
                      className="rounded-[2px] bg-gradient-to-br from-[#43D9AD] to-[#00D5BE] shadow-[0_0_8px_rgba(67,217,173,0.8)] z-10 border border-white/20"
                    />
                  );
                }

                if (isSnakeBody) {
                  const opacity = Math.max(0.35, 1 - (bodyIndex / snake.length));
                  return (
                    <div
                      key={index}
                      className="rounded-[2px] bg-[#00D5BE]/90 border border-[#011627]/30 transition-all"
                      style={{ opacity }}
                    />
                  );
                }

                if (isFoodCell) {
                  return (
                    <div
                      key={index}
                      className="rounded-full bg-gradient-to-br from-[#FEA55F] to-[#FE5F56] shadow-[0_0_12px_rgba(254,165,95,0.9)] animate-pulse z-10 border border-white/10"
                    />
                  );
                }

                return (
                  <div
                    key={index}
                    className="bg-[#011627]/40 rounded-[1px] transition-all"
                  />
                );
              })}
            </div>

            {/* Overlays (Start, Game Over, Win) */}
            {!isPlaying && !gameOver && !isWon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#010d18]/65 backdrop-blur-[1px] p-6 text-center z-20 transition-all">
                {/* Glowing game title */}
                <div className="mb-6 select-none">
                  <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-[#43D9AD] drop-shadow-[0_0_8px_rgba(67,217,173,0.4)] font-mono">
                    Snake Game
                  </h3>
                  <span className="text-[10px] text-[#607B96] uppercase tracking-wider block mt-1 font-semibold opacity-85">
                    // Attract Mode Active
                  </span>
                </div>
                
                <button
                  onClick={startGame}
                  className="rounded-md bg-[#FEA55F] hover:bg-[#FEA55F]/95 px-6 py-3 text-sm font-bold text-[#01080E] transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(254,165,95,0.45)] uppercase tracking-wider animate-pulse hover:animate-none"
                >
                  start-game
                </button>
                
                <span className="text-[10px] text-[#607B96] mt-4 select-none font-mono">
                  [Press any arrow or WASD key to play]
                </span>
              </div>
            )}

            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#011627]/95 backdrop-blur-[2px] p-6 text-center z-20">
                <span className="text-xl font-bold uppercase tracking-widest text-[#FE5F56] drop-shadow-[0_0_8px_rgba(254,95,86,0.6)] mb-5">
                  GAME OVER!
                </span>
                <button
                  onClick={startGame}
                  className="rounded-md border border-[#FEA55F] bg-[#FEA55F]/10 hover:bg-[#FEA55F]/25 px-6 py-2.5 text-sm font-bold text-[#FEA55F] transition-all hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(254,165,95,0.2)]"
                >
                  play-again
                </button>
              </div>
            )}

            {isWon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#011627]/95 backdrop-blur-[2px] p-6 text-center z-20">
                <span className="text-xl font-bold uppercase tracking-widest text-[#43D9AD] drop-shadow-[0_0_8px_rgba(67,217,173,0.6)] mb-2">
                  WELL DONE!
                </span>
                <span className="text-sm text-[#607B96] mb-5 font-mono">// You completed the game!</span>
                <button
                  onClick={startGame}
                  className="rounded-md bg-[#FEA55F] px-6 py-2.5 text-sm font-bold text-[#01080E] transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(254,165,95,0.4)]"
                >
                  play-again
                </button>
              </div>
            )}
          </div>

          {/* Controls & Score Dashboard Panel */}
          <div className="mt-4 flex w-full justify-between items-start text-sm font-semibold bg-[#01080E]/60 border border-[#1E2D3D] rounded-md p-4 gap-4">
            <div className="space-y-2.5">
              <span className="text-[#607B96] uppercase tracking-wider block text-xs font-bold">// Instructions</span>
              <p className="text-white/60 text-xs">Use keyboard arrows or W-A-S-D.</p>
              <div className="flex gap-3 text-sm font-bold pt-1">
                <div>Score: <span className="text-[#43D9AD]">{score}</span>/15</div>
                <div className="text-white/30">|</div>
                <div>Record: <span className="text-[#FEA55F]">{highScore}</span></div>
              </div>
            </div>

            {/* Virtual Arrow D-Pad Controls for Mobile/Touch */}
            <div className="flex flex-col items-center gap-1.5">
              <button
                onClick={() => isPlaying && direction !== 'DOWN' && setDirection('UP')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E2D3D] bg-[#011627]/80 text-[#607B96] hover:text-white active:bg-[#FEA55F] active:text-[#01080E] transition-all shadow"
              >
                ▲
              </button>
              <div className="flex gap-1.5">
                <button
                  onClick={() => isPlaying && direction !== 'RIGHT' && setDirection('LEFT')}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E2D3D] bg-[#011627]/80 text-[#607B96] hover:text-white active:bg-[#FEA55F] active:text-[#01080E] transition-all shadow"
                >
                  ◀
                </button>
                <button
                  onClick={() => isPlaying && direction !== 'UP' && setDirection('DOWN')}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E2D3D] bg-[#011627]/80 text-[#607B96] hover:text-white active:bg-[#FEA55F] active:text-[#01080E] transition-all shadow"
                >
                  ▼
                </button>
                <button
                  onClick={() => isPlaying && direction !== 'LEFT' && setDirection('RIGHT')}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E2D3D] bg-[#011627]/80 text-[#607B96] hover:text-white active:bg-[#FEA55F] active:text-[#01080E] transition-all shadow"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloView;
