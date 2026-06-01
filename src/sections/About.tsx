import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import OutlineButton from '../components/ui/OutlineButton';
import { about, services, skills } from '../data/portfolio';

const skillColumns = [
  { title: 'Using Now:', items: skills.usingNow },
  { title: 'Learning:', items: skills.learning },
  { title: 'Other Skills:', items: skills.other },
];

const About = () => (
  <section id="about" className="about-radial-bg scroll-mt-24">
    <Container variant="figma" className="text-center pt-16 sm:pt-20 lg:pt-[var(--about-pt)] pb-16 lg:pb-[var(--about-pb)]">
      <SectionTitle>{about.title}</SectionTitle>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="figma-prose mt-8 sm:mt-10 lg:mt-[var(--about-title-to-text)]"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        <span className="lg:hidden">{about.bodyMobile}</span>
        <span className="hidden lg:inline">{about.bodyDesktop}</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-8 lg:mt-[var(--about-text-to-explore)]"
      >
        <OutlineButton
          label="EXPLORE"
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </motion.div>

      <div className="section-bar mt-10 lg:mt-[var(--about-explore-to-bar)]" />

      <div className="mt-10 lg:mt-[var(--about-bar-to-services)] mx-auto w-full max-w-[var(--figma-services-w)] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center opacity-85">
              <img src={service.icon} alt="" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3
              className="text-lg lg:text-[22px] font-bold uppercase tracking-[0.16em] mb-3 text-center"
              style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '26.82px' }}
            >
              {service.title}
            </h3>
            <p className="figma-service-copy" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="section-bar mt-12 lg:mt-[var(--about-services-to-bar)]" />

      <div id="skills" className="scroll-mt-28 mt-12 lg:mt-[var(--about-bar-to-skills-title)]">
        <SectionTitle>SKILLS</SectionTitle>

        <div className="mt-8 lg:mt-[var(--about-skills-title-to-grid)] mx-auto w-full max-w-[var(--figma-skills-w)] grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {skillColumns.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="text-center sm:text-left"
            >
              <h3
                className="text-xl lg:text-[30px] font-bold uppercase mb-6 lg:mb-8 text-center sm:text-left"
                style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '36.57px' }}
              >
                {col.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {col.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-base lg:text-[24px] font-bold uppercase text-black text-center sm:text-center"
                    style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '29.26px' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default About;
