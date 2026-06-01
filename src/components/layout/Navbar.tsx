import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, contactNavLink } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';

const menuLinks = [...navLinks, contactNavLink];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection([...menuLinks.map((l) => l.href), '#hero']);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const onHero = !isScrolled;

  const navigate = (href: string) => {
    setMobileOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass = (href: string) => {
    const activeCls = active === href ? 'border-b-2' : 'border-b-2 border-transparent';
    if (onHero && !mobileOpen) {
      return `${activeCls} ${active === href ? 'border-white text-white' : 'border-transparent text-white hover:text-white/90'}`;
    }
    return `${activeCls} ${active === href ? 'border-black text-black' : 'border-transparent text-black/85 hover:text-black'}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5 lg:py-8'
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-16 flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate('#hero')}
            className="z-[60] shrink-0"
            aria-label="Home"
          >
            <img
              src="/assets/logo-na.svg"
              alt="NA Logo"
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
          </button>

          {/* Figma navbar: 637×46, each link 147px wide, 8px between, 33px before CTA */}
          <nav
            className="hidden lg:flex items-center h-[var(--nav-h)] w-[637px] shrink-0"
            aria-label="Main"
          >
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigate(link.href)}
                className={`h-full w-[var(--nav-slot)] flex items-center justify-center text-[15px] font-bold ${linkClass(link.href)} ${
                  index > 0 ? 'ml-[var(--nav-gap)]' : ''
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate(contactNavLink.href)}
              className={`h-full w-[var(--nav-slot)] flex items-center justify-center rounded-[30px] border-4 text-[15px] font-bold uppercase tracking-[0.08em] ml-[var(--nav-cta-gap)] transition-colors ${
                onHero
                  ? 'border-white bg-white text-black hover:bg-neutral-100'
                  : 'border-black bg-black text-white hover:bg-neutral-800'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {contactNavLink.label}
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 z-[60] ${
              mobileOpen ? 'text-white' : onHero ? 'text-white' : 'text-black'
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] lg:hidden bg-black flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-10 px-8">
              {menuLinks.map((link, i) => {
                const isContact = link.href === '#contact';
                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => navigate(link.href)}
                    className={`font-bold ${isContact ? 'text-base uppercase tracking-[0.2em] border-b-2 border-white pb-1' : 'text-lg'} ${
                      active === link.href ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
