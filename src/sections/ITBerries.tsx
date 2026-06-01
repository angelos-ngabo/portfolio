import { motion } from 'framer-motion';
import OutlineButton from '../components/ui/OutlineButton';
import { itBerries } from '../data/portfolio';

const ITBerries = () => (
  <section className="it-berries-bg relative overflow-hidden lg:min-h-[var(--itberries-h)]">
    <div className="absolute inset-0 flex items-start justify-end pointer-events-none select-none lg:pr-[102px]">
      <div className="relative w-[280px] sm:w-[300px] h-[200px] lg:h-[280px] lg:mt-[44px]">
        <span
          className="absolute right-0 bottom-0 text-white/90 leading-none hidden lg:block"
          style={{ fontFamily: 'Varela, sans-serif', fontSize: '280px' }}
        >
          IT
        </span>
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-2 text-white/90 leading-none lg:hidden"
          style={{ fontFamily: 'Varela, sans-serif', fontSize: 'clamp(120px, 32vw, 220px)' }}
        >
          IT
        </span>
        <div className="absolute right-[120px] top-10 w-36 h-36 rounded-full border-[14px] border-white/20 hidden lg:block" />
        <div className="absolute right-[60px] top-16 w-24 h-24 rounded-full bg-black/40 hidden lg:block" />
      </div>
    </div>

    <div className="figma-section relative z-10 px-5 sm:px-6 lg:pl-[102px] lg:pr-[280px] py-12 lg:pt-[49px] lg:pb-6 text-center lg:text-left min-h-[480px] lg:min-h-[var(--itberries-h)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-[382px] sm:max-w-xl lg:max-w-[1148px] mx-auto lg:mx-0"
      >
        <h2
          className="text-white text-[25px] lg:text-[30px] font-bold uppercase tracking-[0.185em] mb-4 lg:mb-[18px]"
          style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '36.57px' }}
        >
          {itBerries.title}
        </h2>
        <p
          className="text-white text-[15px] leading-[21px] text-justify lg:text-left mb-6 lg:mb-[33px]"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          {itBerries.body}
        </p>
        <div className="flex justify-center lg:justify-start">
          <OutlineButton
            label={itBerries.ctaMobile}
            light
            className="lg:hidden"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
          <OutlineButton
            label={itBerries.ctaDesktop}
            light
            className="hidden lg:inline-block"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ITBerries;
