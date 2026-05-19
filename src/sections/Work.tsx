import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Users, Shield, BookOpen, TrendingUp, Sparkles, Brain, DollarSign, Landmark } from 'lucide-react';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Spendly Mock AI Copilot state
  const [aiPrompt, setAiPrompt] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);

  const triggerAiResponse = (prompt: string, response: string) => {
    setAiPrompt(prompt);
    setIsTyping(true);
    setAiResponse("");
    
    // Simulate typing effect
    setTimeout(() => {
      setIsTyping(false);
      setAiResponse(response);
    }, 800);
  };

  const spendlyAiPrompts = [
    {
      prompt: "What is my current savings rate?",
      response: "Your savings rate is 32.4% this month ($1,620 allocated from $5,000 income), which is 5% higher than your average."
    },
    {
      prompt: "Analyze my top expenses",
      response: "Your largest outflow is Housing/Rent (42%), followed by Food & Groceries (24%). Utilities decreased by 8% compared to last month."
    }
  ];

  const secondaryProjects = [
    {
      id: 'rangira',
      title: 'Rangira Agro-Farming System',
      subtitle: 'Multi-Role Agricultural Platform',
      description: 'A comprehensive digital ecosystem connecting farmers, buyers, and warehouse agents with intelligent coordination and role-based operational modules.',
      challenge: 'Traditional farming operations faced high distribution overheads and fragmented transaction structures.',
      solution: 'Built a unified system with role-based dashboards, inventory monitoring systems, and local system information search assistants.',
      features: [
        'Farmer market listings & crop pricing tracking',
        'Warehouse agent inventory validation tables',
        'System alert notification triggers'
      ],
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Java', 'REST APIs'],
      github: 'https://github.com/ngabo-angelos', // placeholders
      demo: '#',
      icon: Users
    },
    {
      id: 'complaint-system',
      title: 'Complaint Management System',
      subtitle: 'Enterprise Java Application',
      description: 'A client-server transaction system demonstrating high-security configurations, data persistence patterns, and local distributed services.',
      challenge: 'Organizations lacked secure, auditable pipelines for resolving customer grievances across networks.',
      solution: 'Developed a robust client-server app using Java RMI for distributed interfaces and Hibernate ORM for database schemas.',
      features: [
        'Java Swing secure administrator dashboard',
        'Java RMI distributed registry system',
        'Hibernate secure database persistence mapping'
      ],
      technologies: ['Java', 'Hibernate ORM', 'Java RMI', 'MySQL', 'Java Swing'],
      github: 'https://github.com/ngabo-angelos',
      demo: '#',
      icon: Shield
    },
    {
      id: 'library-system',
      title: 'University Library Management',
      subtitle: 'Web-Based Library System',
      description: 'A secure web application for tracking catalog registers, student checkout permissions, and reservation timetables.',
      challenge: 'Manual catalog operations led to index inconsistencies and resource loss for students and administration.',
      solution: 'Developed a PHP/MySQL system with secure session authorization and live checkout availability lookups.',
      features: [
        'Secure authorization & book issue logs',
        'Dynamic availability indicator matrix',
        'PHP CRUD management panel'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/ngabo-angelos',
      demo: '#',
      icon: BookOpen
    }
  ];

  return (
    <section ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing blob */}
      <div className="glow-orb glow-violet -top-10 left-1/3" />

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#38bdf8] backdrop-blur-md">
            Work
          </div>
          <h2 className="text-4xl font-bold text-[#f5f3ef] md:text-5xl tracking-tight leading-[1.1]">
            Selected projects engineered with clean architecture and robust tools.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            A look at my primary platforms, highlighting performance, type safety, and real problem-solving.
          </p>
        </motion.div>

        {/* 1. FEATURED PROJECT: SPENDLY (Full Width Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="rounded-[32px] border border-white/[0.08] bg-white/[0.01] p-6 lg:p-10 backdrop-blur-md hover:border-white/[0.12] transition-all duration-300 mb-12 relative overflow-hidden group"
        >
          {/* Subtle gradient glow behind the mockup */}
          <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/15 transition-colors duration-500" />
          
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Project Copy */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#38bdf8] flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Application
                </span>
                <h3 className="text-3xl font-bold text-[#f5f3ef] sm:text-4xl tracking-tight">
                  Spendly
                </h3>
                <p className="mt-1 text-sm font-medium text-white/40">Personal Finance Management Platform</p>
              </div>

              <p className="text-sm sm:text-base leading-7 text-white/60">
                Spendly is a premium, privacy-centric personal finance management application that operates with a local-first architecture. It keeps user financial data completely client-side in browser storage. Features include interactive cash-flow analytics, savings allocation modules, light/dark themes, and an in-browser AI Copilot for transaction insights.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/35">Local-First Storage</span>
                  <p className="text-xs text-white/50 mt-1 leading-5">Financial ledgers are kept local using browser databases, guaranteeing 100% data ownership.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#38bdf8]">Spendly AI Copilot</span>
                  <p className="text-xs text-white/50 mt-1 leading-5">Runs privacy-safe calculations directly inside the client to analyze spending margins.</p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/35">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lucide Icons', 'LocalStorage / IndexedDB'].map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/[0.05] bg-white/[0.03] px-2.5 py-1 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <a
                  href="https://spendly-two-ochre.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#f5f3ef] px-6 text-sm font-bold text-[#050507] transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Platform Demo
                </a>
                <a
                  href="https://github.com/ngabo-angelos"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 text-sm font-semibold text-[#f5f3ef] transition-all duration-300 hover:bg-white/[0.05] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  GitHub Source
                </a>
              </div>
            </div>

            {/* Interactive Mockup Container */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#07070a] p-4.5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-xs font-bold text-[#f5f3ef]">Spendly Dashboard Mock</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Balance Widget */}
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-3.5 mb-4">
                <div className="flex justify-between items-center text-[10px] text-white/40 font-bold uppercase tracking-wider">
                  <span>Spendable Balance</span>
                  <span className="text-emerald-400">Guest Ledger</span>
                </div>
                <div className="text-2xl font-bold text-[#f5f3ef] mt-1 tracking-tight">$5,240.50</div>
                
                {/* Simulated Cash Flow Bar */}
                <div className="mt-3 flex gap-1 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[70%] bg-sky-400" />
                  <div className="w-[30%] bg-[#7c3aed]" />
                </div>
                <div className="flex justify-between text-[9px] text-white/35 font-bold mt-1.5">
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Inflow: $5,000</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" /> Saved: $1,620</span>
                </div>
              </div>

              {/* Interactive AI Copilot Simulation Widget */}
              <div className="rounded-xl border border-indigo-500/10 bg-indigo-500/[0.01] p-3.5 relative">
                <div className="flex items-center gap-1.5 text-[10px] text-[#818cf8] font-bold uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5 animate-pulse" />
                  Spendly AI Copilot
                </div>
                
                {/* Prompt Triggers */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {spendlyAiPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => triggerAiResponse(p.prompt, p.response)}
                      className={`text-[9px] font-bold rounded-md px-2 py-1 transition-all duration-300 text-left border ${
                        aiPrompt === p.prompt 
                          ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f5f3ef]'
                          : 'border-white/[0.05] bg-white/[0.02] text-white/45 hover:bg-white/[0.04]'
                      }`}
                    >
                      {p.prompt}
                    </button>
                  ))}
                </div>

                {/* AI Chat Window */}
                <div className="mt-3 min-h-[55px] rounded-lg bg-black/40 p-2.5 text-[10px] leading-5 text-white/60">
                  {aiPrompt ? (
                    <div>
                      <div className="text-[9px] text-[#38bdf8] font-bold">Query: {aiPrompt}</div>
                      <div className="mt-1 font-medium">
                        {isTyping ? (
                          <div className="flex items-center gap-1">
                            <span className="h-1 w-1 bg-white/60 rounded-full animate-bounce" />
                            <span className="h-1 w-1 bg-white/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="h-1 w-1 bg-white/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        ) : (
                          aiResponse
                        )}
                      </div>
                    </div>
                  ) : (
                    <span className="text-white/30 italic">Click one of the suggested prompts above to test the Spendly local AI engine.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. GRID OF SECONDARY PROJECTS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="rounded-[24px] border border-white/[0.08] bg-white/[0.01] p-6.5 backdrop-blur-md hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#f5f3ef]">
                    <project.icon className="h-5 w-5" />
                  </div>
                  
                  <span className="text-[9px] font-bold uppercase tracking-wider rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-white/45">
                    {project.id === 'rangira' ? 'Fullstack Web' : project.id === 'complaint-system' ? 'Desktop App' : 'Legacy Web'}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#f5f3ef] tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 mt-1">{project.subtitle}</p>
                  <p className="mt-3.5 text-xs leading-6 text-white/50 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/30">System Features</span>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/60 leading-5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#38bdf8]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/30">Stack</span>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-bold uppercase tracking-wider rounded-md border border-white/[0.04] bg-white/[0.01] px-2 py-0.5 text-white/45"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#38bdf8] hover:text-[#38bdf8]/80 transition-colors ml-auto"
                  >
                    Demo
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;