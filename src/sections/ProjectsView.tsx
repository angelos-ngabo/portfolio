import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import spendlyThumbnail from '../assets/spendly_dashboard.png';

interface Project {
  id: string;
  title: string;
  fileName: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: 'react' | 'spring' | 'java' | 'php' | 'css';
}

const ProjectsView: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const projects: Project[] = [
    {
      id: 'spendly',
      title: 'Spendly',
      fileName: 'spendly_app.json',
      description: 'Privacy-focused personal finance manager using local-first storage. Includes interactive charts, cash-flow insights, and an in-browser AI Copilot simulation.',
      image: spendlyThumbnail,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      github: 'https://github.com/angelos-ngabo/Spendly',
      demo: 'https://spendly-two-ochre.vercel.app/',
      category: 'react',
    },
    {
      id: 'rangira',
      title: 'Rangira Agro-Farming',
      fileName: 'agro_farming.json',
      description: 'A multi-role platform matching farmers, warehouse agents, and buyers. Features crop listing systems, inventory validations, and alert mechanisms.',
      image: 'gradient-radial',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Java', 'REST APIs'],
      github: 'https://github.com/angelos-ngabo/Rangira_Agro_Farming_26566',
      category: 'spring',
    },
    {
      id: 'complaint',
      title: 'Complaint System',
      fileName: 'grievance_registry.json',
      description: 'An enterprise client-server distributed application utilizing remote procedures and data persistence mapping to manage customer grievance logs.',
      image: 'gradient-conic',
      technologies: ['Java', 'Hibernate ORM', 'Java RMI', 'MySQL', 'Java Swing'],
      github: 'https://github.com/angelos-ngabo/Complaint-Management-System-Project',
      category: 'java',
    },
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(project.category);
  });

  const categories = [
    { id: 'react', label: 'React' },
    { id: 'spring', label: 'Spring Boot' },
    { id: 'java', label: 'Java Desktop' },
  ];

  const getCardBg = (type: string) => {
    switch (type) {
      case 'gradient-linear':
        return 'bg-gradient-to-tr from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]';
      case 'gradient-radial':
        return 'bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857]';
      case 'gradient-conic':
        return 'bg-gradient-to-bl from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]';
      default:
        return 'bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155]';
    }
  };

  return (
    <div className="grid h-full w-full gap-8 lg:grid-cols-[240px_1fr] overflow-hidden -mx-4 -my-8 sm:-mx-8 sm:-my-12">
      {/* Left sidebar filters */}
      <div className="border-b border-[#1E2D3D] bg-[#01080E]/40 p-4 lg:border-b-0 lg:border-r lg:border-[#1E2D3D] lg:p-6 select-none shrink-0 font-mono">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#607B96] flex items-center gap-2">
          ▼ Projects Filter
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm text-[#607B96] hover:text-[#E5E9F0] cursor-pointer py-1"
            >
              <input
                type="checkbox"
                checked={selectedFilters.includes(cat.id)}
                onChange={() => toggleFilter(cat.id)}
                className="h-4.5 w-4.5 rounded border-[#1E2D3D] bg-[#011627] text-[#FEA55F] focus:ring-0 focus:ring-offset-0 accent-[#FEA55F]"
              />
              <span className={selectedFilters.includes(cat.id) ? 'text-white' : ''}>
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Right Grid Pane */}
      <div className="flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#607B96] font-mono">
          // projects grid ({filteredProjects.length})
        </h3>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-[#1E2D3D] bg-[#01080E]/40 overflow-hidden flex flex-col font-mono"
            >
              {/* Header Tab Style */}
              <div className="flex h-9 items-center justify-between border-b border-[#1E2D3D] bg-[#01080E]/60 px-3.5 select-none text-xs text-[#607B96]">
                <span>{project.fileName}</span>
                <span className="text-xs text-white/20">JSON</span>
              </div>

              {/* Styled Mock Screen Visual */}
              <div className="aspect-video w-full relative overflow-hidden bg-[#011627] border-b border-[#1E2D3D]">
                {project.id === 'spendly' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full relative flex items-center justify-center p-6 ${getCardBg(project.image)}`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 rounded border border-white/10 bg-black/60 px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-[#E5E9F0] backdrop-blur-sm shadow-md">
                      {project.title}
                    </div>
                  </div>
                )}
              </div>

              {/* Details Content Box */}
              <div className="p-4.5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#E5E9F0]">{project.title}</h4>
                  <p className="text-sm leading-6 text-[#607B96] line-clamp-3 select-text">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold uppercase rounded-md border border-[#1E2D3D] bg-[#011627] px-2 py-0.5 text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Footer inside card */}
                <div className="flex gap-4 pt-3 border-t border-[#1E2D3D]/30 select-none">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#607B96] hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#FEA55F] hover:text-[#FEA55F]/80 transition-colors ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
