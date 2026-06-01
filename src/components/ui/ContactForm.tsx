import { motion } from 'framer-motion';

const ContactForm = () => (
  <motion.form
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.1 }}
    className="w-[min(100%,243px)] sm:w-[min(100%,320px)] lg:w-[609px] mx-auto flex flex-col gap-[42px] lg:gap-[52px]"
    onSubmit={(e) => e.preventDefault()}
  >
    <div className="l-form-field">
      <input type="text" name="name" placeholder="ENTER YOUR NAME*" required autoComplete="name" />
    </div>
    <div className="l-form-field">
      <input type="email" name="email" placeholder="ENTER YOUR EMAIL*" required autoComplete="email" />
    </div>
    <div className="l-form-field">
      <input type="tel" name="phone" placeholder="PHONE NUMBER" autoComplete="tel" />
    </div>
    <div className="l-form-field min-h-[165px] lg:min-h-[184px]">
      <textarea name="message" placeholder="YOUR MESSAGE*" rows={4} required />
    </div>
    <div className="flex justify-center pt-2 lg:pt-4">
      <button
        type="submit"
        className="relative px-8 lg:px-10 py-2 text-black font-bold uppercase tracking-[0.1em] text-base hover:opacity-70 transition-opacity"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <span className="absolute left-0 top-0 h-full w-[3px] bg-black" aria-hidden />
        <span className="absolute right-0 top-0 h-full w-[3px] bg-black" aria-hidden />
        Submit
      </button>
    </div>
  </motion.form>
);

export default ContactForm;
