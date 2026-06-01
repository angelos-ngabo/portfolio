import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import FeaturedProject from '../components/ui/FeaturedProject';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/portfolio';

type Filter = 'ALL' | 'CODED' | 'DESIGNED';

const featured = projects.find((p) => p.featured)!;
const gridProjects = projects.filter((p) => !p.featured);

const Projects = () => {
  const [filter, setFilter] = useState<Filter>('ALL');
  const filtered = gridProjects.filter((p) => filter === 'ALL' || p.tags.includes(filter));

  return (
    <section id="portfolio" className="bg-[#1A1A1A] scroll-mt-24 lg:min-h-[var(--portfolio-h)] flex flex-col">
      <div
        className="relative min-h-[194px] sm:min-h-[240px] lg:min-h-[321px] flex items-center justify-center bg-cover bg-center shrink-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.32), rgba(0,0,0,0.32)), url(/figma_images/c1c55d921f5a03b3143311f18310baf8a186dbec.png)',
        }}
      >
        <SectionTitle variant="portfolio" light>
          Portfolio
        </SectionTitle>
      </div>

      <div className="figma-section flex-1 flex flex-col px-4 sm:px-6 lg:px-0 pt-8 lg:pt-8 pb-0">
        <div
          className="relative flex mx-auto w-full max-w-[526px] min-h-[72px] sm:min-h-[98px] mb-8 lg:mb-[32px]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {(['ALL', 'CODED', 'DESIGNED'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`flex-1 py-3 text-[13px] sm:text-[14px] font-semibold uppercase tracking-wide transition-colors ${
                filter === f ? 'text-[#FFFBFB]' : 'text-[#7C7C7C]'
              }`}
            >
              {f}
            </button>
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#AAAAAA]" aria-hidden />
          <motion.div
            className="absolute bottom-0 h-px bg-white"
            layout
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            style={{
              width: '33.333%',
              left: filter === 'ALL' ? '0%' : filter === 'CODED' ? '33.333%' : '66.666%',
            }}
            aria-hidden
          />
        </div>

        <div className="w-full max-w-[1280px] mx-auto mb-8 lg:mb-[32px]">
          <FeaturedProject project={featured} />
        </div>

        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 border border-neutral-800">
          {filtered.map((proj, idx) => (
            <ProjectCard key={proj.id} project={proj} index={idx} />
          ))}
        </div>
      </div>

      <p
        className="shrink-0 py-10 lg:py-[48px] text-center text-[#FFFBFB] text-base lg:text-xl font-semibold"
        style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '24.38px' }}
      >
        And many more to come!
      </p>
    </section>
  );
};

export default Projects;
