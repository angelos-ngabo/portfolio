import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Layers } from 'lucide-react';

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      category: 'Frontend Engineering',
      icon: Code2,
      description: 'Building clean, high-performance UI systems with responsive layout design and type safety.',
      color: 'from-sky-400 to-blue-500',
      skills: [
        { name: 'React.js', description: 'Components & Hooks' },
        { name: 'TypeScript', description: 'Type-safe workflows' },
        { name: 'JavaScript', description: 'ES6+ core development' },
        { name: 'Tailwind CSS', description: 'Utility-first layout' },
        { name: 'HTML5 / CSS3', description: 'Semantic structures' }
      ]
    },
    {
      category: 'Backend Development',
      icon: Server,
      description: 'Architecting secure APIs, client-server bindings, and distributed enterprise frameworks.',
      color: 'from-indigo-400 to-purple-500',
      skills: [
        { name: 'Java', description: 'Core OOP patterns' },
        { name: 'Spring Boot', description: 'MVC & RESTful APIs' },
        { name: 'C#', description: 'Enterprise systems' },
        { name: 'ASP.NET Core', description: 'API services' },
        { name: 'REST APIs', description: 'Endpoint design' },
        { name: 'Node.js / PHP', description: 'General server scripts' }
      ]
    },
    {
      category: 'Database Systems',
      icon: Database,
      description: 'Designing efficient database schemas, relational models, indexing, and query optimizations.',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'PostgreSQL', description: 'Enterprise operations' },
        { name: 'MySQL', description: 'Relational storage' },
        { name: 'SQL Server', description: 'Procedural transactions' },
        { name: 'SQL & ORM', description: 'Complex queries' }
      ]
    },
    {
      category: 'Tools & Ecosystems',
      icon: Layers,
      description: 'Managing containerized workflows, distributed computations, and native software utilities.',
      color: 'from-emerald-400 to-teal-500',
      skills: [
        { name: 'Docker', description: 'Containerization' },
        { name: 'Git / GitHub', description: 'Version control' },
        { name: 'Hadoop MapReduce', description: 'Big data computations' },
        { name: 'JavaFX', description: 'Modern UI framework' },
        { name: 'Java Swing', description: 'Legacy desktop UI' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glowing Orb */}
      <div className="glow-orb glow-blue -bottom-20 -left-20" />

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#38bdf8] backdrop-blur-md">
            Capabilities
          </div>
          <h2 className="text-4xl font-bold text-[#f5f3ef] md:text-5xl tracking-tight leading-[1.1]">
            A comprehensive backend & frontend foundation built for real-world scaling.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            Technology is a tool for problem-solving. I select stack options to match operational performance, type safety, and clean separation of concerns.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.category}
              variants={cardVariants}
              className="rounded-[28px] border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

              {/* Category Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-[#f5f3ef]">
                  <div className={`absolute inset-0.5 -z-10 rounded-2xl bg-gradient-to-br ${cap.color} opacity-20 blur-sm`} />
                  <cap.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f5f3ef] tracking-tight group-hover:text-white transition-colors">{cap.category}</h3>
                  <p className="mt-1 text-xs text-white/50 leading-5">{cap.description}</p>
                </div>
              </div>

              {/* Skills Layout */}
              <div className="flex flex-wrap gap-2.5">
                {cap.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] px-4.5 py-3 transition-colors duration-200 cursor-default"
                  >
                    <span className="text-sm font-semibold text-[#f5f3ef] tracking-wide">{skill.name}</span>
                    <span className="text-[10px] text-white/40 font-medium mt-0.5">{skill.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;