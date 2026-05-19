import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Target, Sparkles } from 'lucide-react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2021",
      title: "Beginning the Journey",
      subtitle: "University & Foundations",
      description: "Started Software Engineering at Adventist University of Central Africa (AUCA). Focused on fundamentals: data structures, object-oriented Java development, and systems design.",
      icon: GraduationCap,
      color: "from-sky-400 to-blue-500"
    },
    {
      year: "2023",
      title: "First Enterprise System",
      subtitle: "Distributed Architectures",
      description: "Developed a distributed Complaint Management System using Java RMI, Hibernate ORM, and MVC architecture. Mastered database design, persistence mapping, and secure transactional services.",
      icon: Code,
      color: "from-indigo-400 to-purple-500"
    },
    {
      year: "2024",
      title: "Scaling to Platforms",
      subtitle: "Full-Stack Web Ecosystems",
      description: "Architected and shipped the Rangira Agro-Farming System, incorporating role-based admin panels, real-time alerts, and client-side assistant integrations. Focused on system integration.",
      icon: Target,
      color: "from-purple-400 to-pink-500"
    },
    {
      year: "2026",
      title: "Fullstack Engineering & Beyond",
      subtitle: "Professional Delivery",
      description: "Delivering modern web applications and scalable database APIs (Spring Boot, .NET Core) for production, prioritizing security, type safety, and clean user experience.",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="glow-orb glow-indigo -top-20 right-10" />

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#38bdf8] backdrop-blur-md">
            Journey
          </div>
          <h2 className="text-4xl font-bold text-[#f5f3ef] md:text-5xl tracking-tight leading-[1.1]">
            A steady track from engineering fundamentals to production-ready systems.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            The focus has stayed simple: understand the business domain, architect clean data layers, and deliver responsive products.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Gradient Connecting Line */}
          <div className="absolute left-6 md:left-[35px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-400 via-indigo-500 to-emerald-500/10 pointer-events-none" />

          {/* Timeline Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Glowing Icon Bullet Circle */}
                <div className="absolute left-0 md:left-2 top-1.5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-[#050507] text-[#f5f3ef] shadow-lg shadow-black/80">
                  <div className={`absolute inset-0.5 -z-10 rounded-full bg-gradient-to-br ${milestone.color} opacity-20 blur-sm`} />
                  <milestone.icon className="h-5 w-5" />
                </div>

                {/* Milestone Content Box */}
                <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.01] p-6 md:p-8 backdrop-blur-md hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">{milestone.subtitle}</span>
                      <h3 className="mt-1 text-2xl font-bold text-[#f5f3ef] tracking-tight group-hover:text-white transition-colors">
                        {milestone.title}
                      </h3>
                    </div>
                    
                    <span className="inline-flex h-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] px-4 text-sm font-bold text-[#f5f3ef]">
                      {milestone.year}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-white/55 font-medium">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus Alert Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently writing software, planning cloud integrations, and exploring scalable systems.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;