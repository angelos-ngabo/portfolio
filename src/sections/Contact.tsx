import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { contact } from '../data/portfolio';

const Contact = () => (
  <section
    id="contact"
    className="contact-radial-bg scroll-mt-24 lg:min-h-[var(--contact-h)] flex flex-col items-center"
  >
    <div className="figma-section w-full flex flex-col items-center px-5 sm:px-6 lg:px-0 pt-16 sm:pt-20 lg:pt-[var(--contact-pt)] pb-12 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center"
      >
        <SectionTitle>{contact.title}</SectionTitle>

        <p
          className="figma-prose mt-8 lg:mt-[var(--contact-title-to-text)]"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          <span className="lg:hidden">{contact.bodyMobile}</span>
          <span className="hidden lg:inline">{contact.bodyDesktop}</span>
        </p>
      </motion.div>

      <div className="w-full flex justify-center mt-10 lg:mt-[var(--contact-text-to-form)]">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
