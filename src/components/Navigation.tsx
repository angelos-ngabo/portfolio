import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy Logic
      const sections = ['home', 'journey', 'work', 'capabilities', 'connect'];
      const scrollPosition = window.scrollY + 250; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { name: 'Connect', href: '#connect', id: 'connect' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 border-b border-white/[0.07] bg-[#050507]/80 backdrop-blur-xl' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="inline-flex items-center gap-3 group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-sm font-semibold text-[#f5f3ef] transition-all duration-300 group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/[0.05]">
              NA
            </span>
            <span className="hidden sm:block">
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-white/35 group-hover:text-white/50 transition-colors">Software Engineer</span>
              <span className="text-base font-semibold text-[#f5f3ef] tracking-wide">
                Ngabo Angelos
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.01] p-1.5 backdrop-blur-md md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-[#f5f3ef]' : 'text-white/45 hover:text-white/75'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.07] shadow-[0_4px_12px_-2px_rgba(255,255,255,0.03)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          <a
            href="#connect"
            className="hidden md:inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-[#f5f3ef] px-5 text-sm font-semibold text-[#050507] transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#f5f3ef] transition-colors duration-300 hover:bg-white/[0.05] md:hidden"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-2xl border border-white/[0.08] bg-[#09090b]/95 p-3.5 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/[0.06] text-[#f5f3ef] border border-white/[0.08]' 
                          : 'text-white/60 hover:bg-white/[0.03] hover:text-[#f5f3ef]'
                      }`}
                    >
                      {item.name}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#f5f3ef]" />}
                    </a>
                  );
                })}
                <a
                  href="#connect"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#f5f3ef] px-5 text-sm font-bold text-[#050507] transition-all duration-300 hover:bg-[#ffffff] active:scale-[0.98]"
                >
                  Let's Talk
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;