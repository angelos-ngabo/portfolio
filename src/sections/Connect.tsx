import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react';

const Connect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset success banner after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: 'ngabo.angelos@example.com',
      href: 'mailto:ngabo.angelos@example.com'
    },
    {
      icon: Github,
      label: 'GitHub Profile',
      value: 'github.com/ngabo-angelos',
      href: 'https://github.com/ngabo-angelos'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Connect',
      value: 'Ngabo Angelos',
      href: 'https://linkedin.com/in/ngabo-angelos' // placeholders
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: '#'
    }
  ];

  return (
    <section ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing blob */}
      <div className="glow-orb glow-blue top-1/3 -right-20" />

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#38bdf8] backdrop-blur-md">
            Connect
          </div>
          <h2 className="text-4xl font-bold text-[#f5f3ef] md:text-5xl tracking-tight leading-[1.1]">
            If the work matches what you need, let&apos;s build together.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            I&apos;m open to engineering opportunities, collaboration, and conversations about high-performance software.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Contact Information & Metadata */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-2xl font-bold text-[#f5f3ef] tracking-tight">Let&apos;s Connect</h3>
              <p className="mt-4.5 text-sm leading-7 text-white/50 font-medium">
                Whether you need a full-stack engineer for a production roll-out, code architecture advice, or just want to chat about Spring Boot and React systems, feel free to reach out.
              </p>
            </div>

            {/* Quick Badges Link List */}
            <div className="space-y-3.5">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-4 rounded-[22px] border border-white/[0.06] bg-white/[0.01] p-4.5 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12] group relative"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#050507] text-[#f5f3ef] shadow-lg shadow-black/30 group-hover:border-white/20 transition-colors">
                    <contact.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{contact.label}</div>
                    <div className="mt-1 text-sm font-semibold text-[#f5f3ef] group-hover:text-white transition-colors">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Pulsing Availability Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="rounded-[24px] border border-white/[0.08] bg-white/[0.01] p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Availability Status</span>
              </div>
              <p className="text-xs leading-6 text-white/50 font-medium">
                Actively seeking software engineering roles, fullstack positions, or performance integrations. Ready for immediate remote work or local roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Recruiter-ready Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#f5f3ef] mb-6 tracking-tight">Send a Direct Message</h3>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Message sent successfully!</div>
                      <div className="text-xs text-emerald-400/80 mt-1">Thank you. I will review and get back to you within 24 hours.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-2xl border border-white/[0.08] bg-[#050507] px-4 text-sm text-[#f5f3ef] placeholder-white/20 transition-all duration-300 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/20 focus:outline-none"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-2xl border border-white/[0.08] bg-[#050507] px-4 text-sm text-[#f5f3ef] placeholder-white/20 transition-all duration-300 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/20 focus:outline-none"
                    placeholder="e.g. jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-white/[0.08] bg-[#050507] px-4 py-4 text-sm text-[#f5f3ef] placeholder-white/20 transition-all duration-300 resize-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/20 focus:outline-none"
                    placeholder="Briefly describe what you're building, the open position, or the operational needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f5f3ef] px-6 text-sm font-bold text-[#050507] transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-white/5 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                      Sending Verification...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;