import { motion } from 'framer-motion';
import type { Project } from '../../data/portfolio';

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    className="group relative aspect-[640/401] overflow-hidden bg-neutral-900 border border-neutral-800"
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/92 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 sm:p-8 text-center z-10">
      <h3
        className="text-[#FFFBFB] text-lg sm:text-2xl font-bold uppercase tracking-[0.15em] mb-2"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {project.title}
      </h3>
      <p
        className="text-[#FFFBFB]/80 text-[10px] italic uppercase tracking-wider mb-2"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {project.subtitle}
      </p>
      <p
        className="text-[#FFFBFB]/70 text-[10px] sm:text-xs mb-4 max-w-xs leading-relaxed"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/30 text-white/90"
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className="flex gap-6 sm:gap-8 text-[#FFFBFB] text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="relative px-3 py-1 hover:opacity-80"
          >
            <span className="absolute left-0 top-0 h-full w-px bg-white" />
            <span className="absolute right-0 top-0 h-full w-px bg-white" />
            Demo
          </a>
        )}
        <a href={project.repoUrl ?? '#'} className="relative px-3 py-1 hover:opacity-80">
          <span className="absolute left-0 top-0 h-full w-px bg-white" />
          <span className="absolute right-0 top-0 h-full w-px bg-white" />
          More
        </a>
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
