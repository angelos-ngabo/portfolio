import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, MapPin, Sparkles, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  const quickFacts = [
    {
      label: 'Focus Area',
      value: 'Full-stack systems & API architectures',
    },
    {
      label: 'Core Stack',
      value: 'React, Spring Boot, ASP.NET Core',
    },
    {
      label: 'Current Status',
      value: 'Ready for full-stack engineering roles',
    },
  ];

  const profileItems = [
    'Designs highly performant, type-safe APIs',
    'Architects robust database schemas and relations',
    'Deploys containerized and structured applications',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glowing Blobs */}
      <div className="glow-orb glow-blue -top-40 -left-40" />
      <div className="glow-orb glow-violet top-1/2 -right-40" />

      <div className="mx-auto w-full max-w-[1200px] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          {/* Main Hero Header Info */}
          <div className="max-w-3xl">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#38bdf8] backdrop-blur-md"
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              Fullstack Developer
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="mt-6 text-4xl font-bold leading-[1.08] text-[#f5f3ef] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight"
            >
              Building software that feels <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">clear, robust,</span> and production-ready.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg"
            >
              I&apos;m <span className="text-[#f5f3ef] font-semibold">Ngabo Angelos</span>, a fullstack engineer based in Rwanda. I specialize in building robust backend architectures (Spring Boot, .NET Core) and matching them with highly interactive, polished user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5f3ef] px-6 text-sm font-bold text-[#050507] transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-white/5"
              >
                View Selected Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#connect"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 text-sm font-semibold text-[#f5f3ef] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.03] active:scale-[0.98]"
              >
                Start a Conversation
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/ngabo-angelos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] hover:text-[#f5f3ef] hover:scale-[1.03] active:scale-[0.98]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>

            {/* Fact Cards */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 grid gap-4 sm:grid-cols-3"
            >
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[20px] border border-white/[0.06] bg-white/[0.01] p-5 backdrop-blur-md hover:border-white/[0.12] transition-colors duration-300"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{fact.label}</div>
                  <div className="mt-2.5 text-sm leading-6 font-medium text-[#f5f3ef]">{fact.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Glassmorphic Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:justify-self-end w-full max-w-[400px]"
          >
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 backdrop-blur-xl shadow-2xl shadow-black/40 relative overflow-hidden group hover:border-white/[0.15] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start justify-between gap-6 relative z-10">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">Fullstack Engineer</div>
                  <div className="mt-2.5 text-2xl font-bold text-[#f5f3ef] tracking-tight">Ngabo Angelos</div>
                  <div className="mt-1 text-xs text-[#38bdf8] flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5" />
                    Kigali, Rwanda
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>

              {/* Core Attributes */}
              <div className="mt-8 rounded-[20px] border border-white/[0.06] bg-white/[0.01] p-4.5 relative z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#f5f3ef]">
                  <MapPin className="h-3.5 w-3.5 text-white/40" />
                  Adventist University of CA
                </div>
                <p className="mt-2 text-xs leading-6 text-white/50 font-medium">
                  Focused on building clean systems that solve real operational issues, with clean architecture and maintainability.
                </p>
              </div>

              {/* Strengths */}
              <div className="mt-4 rounded-[20px] border border-white/[0.06] bg-white/[0.01] p-4.5 relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Core Strengths</div>
                <div className="mt-3.5 space-y-2.5">
                  {profileItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-5 text-white/60"
                    >
                      <Cpu className="mt-0.5 h-3.5 w-3.5 text-[#818cf8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-5 flex flex-wrap gap-1.5 relative z-10">
                {['React', 'TypeScript', 'Spring Boot', 'C#'].map((badge) => (
                  <span 
                    key={badge}
                    className="text-[9px] font-bold uppercase tracking-wider rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-1 text-white/45"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;