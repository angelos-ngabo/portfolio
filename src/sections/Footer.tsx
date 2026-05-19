import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050507] px-4 py-10 sm:px-6 lg:px-8 relative z-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="flex items-center justify-center gap-1.5 text-xs text-white/40 font-semibold md:justify-start">
          Designed & Engineered with <Heart className="w-3.5 h-3.5 text-red-500/80 fill-red-500/10 animate-pulse" /> by <span className="text-white/60">Ngabo Angelos</span>
        </p>
        <p className="text-xs text-white/30 font-medium">
          &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;