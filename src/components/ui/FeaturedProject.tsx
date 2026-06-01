import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/portfolio';

type FeaturedProjectProps = {
  project: Project;
};

const FeaturedProject = ({ project }: FeaturedProjectProps) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="group relative w-full overflow-hidden border border-neutral-700 bg-neutral-900"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] sm:min-h-[360px] lg:min-h-[400px]">
      <div className="relative h-56 sm:h-72 lg:h-auto overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-[#FFFBFB]">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#FFFBFB]/60 mb-3"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Featured Project
        </span>
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm sm:text-base text-[#FFFBFB]/80 mb-6 leading-relaxed max-w-lg"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/10 border border-white/20"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start px-8 py-3 bg-[#FFFBFB] text-black font-bold uppercase text-xs tracking-[0.15em] hover:bg-neutral-200 transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </motion.article>
);

export default FeaturedProject;
