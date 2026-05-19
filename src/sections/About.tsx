import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'React, TypeScript, Tailwind CSS' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe XD, Prototyping' },
    { icon: Zap, title: 'Performance', desc: 'Optimization, SEO, Accessibility' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Ngabo Angelos is a software engineering student at Adventist University of Central Africa (AUCA)
              passionate about building scalable digital systems that solve real-world problems. His interests
              include software architecture, backend systems, full-stack web applications, and AI-assisted solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              He focuses on building practical platforms that improve productivity and access to services.
              With experience in full-stack applications, Java-based enterprise systems, and web platforms
              featuring authentication, dashboards, database management, and intelligent features, his goal
              is to work as a software engineer building impactful systems both locally and internationally.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Java', 'Node.js', 'MySQL', 'PHP'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;