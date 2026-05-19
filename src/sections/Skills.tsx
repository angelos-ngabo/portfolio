import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Cloud } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'React', level: 70 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Node.js', level: 70 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Tools & IDEs',
      icon: Cloud,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitLab', level: 80 },
        { name: 'Android Studio', level: 75 },
        { name: 'NetBeans', level: 75 },
        { name: 'VS Code', level: 90 },
      ],
    },
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
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.2 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;