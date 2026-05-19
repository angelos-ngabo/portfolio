import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Rangira Agro-Farming System',
      description: 'A digital agricultural platform designed to improve agricultural coordination and resource management between farmers, buyers, and warehouse agents.',
      image: '/placeholder-project.jpg',
      technologies: ['Web Technologies', 'Database Systems', 'Dashboard Architecture'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Farmer dashboard',
        'Buyer dashboard',
        'Warehouse management dashboard',
        'Admin control panel',
        'Smart notification system',
        'AI assistant',
        'Agricultural market coordination'
      ]
    },
    {
      title: 'Complaint Management System',
      description: 'A Java-based enterprise complaint tracking system using client-server architecture with role-based access control.',
      image: '/placeholder-project.jpg',
      technologies: ['Java Swing', 'Java RMI', 'Hibernate', 'MySQL', 'DAO', 'MVC'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'User complaint submission',
        'Admin complaint management',
        'Status tracking',
        'Complaint replies',
        'Role-based access control'
      ]
    },
    {
      title: 'University Library Management System',
      description: 'A web-based system for managing book issuing and student book requests with authentication and admin dashboard.',
      image: '/placeholder-project.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Student registration and login',
        'Admin dashboard',
        'Book request system',
        'Book issuing and management',
        'Authentication system'
      ]
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;