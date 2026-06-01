import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { experience } from '../data/portfolio';

/** Not in Figma template — compact block between Portfolio and Contact */
const Experience = () => (
  <section id="experience" className="about-radial-bg scroll-mt-24 py-14 lg:py-16">
    <Container variant="figma" className="text-center">
      <SectionTitle className="mb-10 lg:mb-12">Experience</SectionTitle>

      <div className="figma-prose max-w-3xl space-y-8 lg:space-y-10 text-left">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.period}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative border-l-4 border-black pl-6 sm:pl-8"
          >
            <span className="absolute w-3 h-3 bg-black -left-[7px] top-2 rounded-sm" aria-hidden />
            <h3
              className="text-lg font-bold uppercase tracking-wider text-black mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.role}
            </h3>
            <p
              className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.company}
              <span className="mx-2 text-neutral-300">|</span>
              {item.period}
            </p>
            <p className="text-[15px] leading-[20.8px] text-[#050505]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

export default Experience;
