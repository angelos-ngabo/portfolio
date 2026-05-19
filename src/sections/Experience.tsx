import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      year: '2024',
      title: 'Rangira Agro-Farming System',
      company: 'Personal Project',
      description: 'Developed a comprehensive agricultural platform connecting farmers, buyers, and warehouse agents with AI-assisted features.',
    },
    {
      year: '2023',
      title: 'Complaint Management System',
      company: 'Academic Project',
      description: 'Built a Java-based enterprise system using client-server architecture with Hibernate and MySQL.',
    },
    {
      year: '2023',
      title: 'University Library Management System',
      company: 'Academic Project',
      description: 'Created a web-based library system with PHP backend and MySQL database for book management.',
    },
    {
      year: '2021',
      title: 'Bachelor of Software Engineering',
      company: 'Adventist University of Central Africa (AUCA)',
      description: 'Currently pursuing degree with focus on software architecture, full-stack development, and system design.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Experience & Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10" />

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 ${
                  index % 2 === 0 ? 'ml-8' : 'mr-8'
                }`}
              >
                <div className="text-sm text-blue-400 font-semibold mb-2">{exp.year}</div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <div className="text-gray-400 mb-3">{exp.company}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;