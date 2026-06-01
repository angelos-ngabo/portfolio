import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../../data/portfolio';

/** Social order matches Figma footer: GitHub → LinkedIn → Mail */
const footerSocial = [
  { href: site.github, icon: Github, label: 'GitHub' },
  { href: site.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${site.email}`, icon: Mail, label: 'Email' },
];

const Footer = () => (
  <footer className="bg-[#1A1A1A] min-h-[280px] lg:min-h-[var(--footer-h)] flex flex-col items-center justify-center text-center py-14 px-6">
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mb-10 group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex flex-col items-center text-white/90">
        <ChevronUp size={14} strokeWidth={3} className="-mb-1" />
        <ChevronUp size={14} strokeWidth={3} className="-mt-2" />
      </div>
      <span
        className="text-white text-[15px] font-bold uppercase tracking-[0.185em]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Back to Top
      </span>
    </button>

    <div className="mb-6 opacity-80">
      <img src="/assets/logo-na.svg" alt="NA" width={40} height={40} className="mx-auto" />
    </div>

    <div className="flex gap-8 sm:gap-10 mb-8">
      {footerSocial.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="text-white/90 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={28} strokeWidth={1.25} />
        </a>
      ))}
    </div>

    <p className="text-white text-base sm:text-lg font-bold max-w-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {site.copyright} <span className="font-normal block sm:inline mt-1 sm:mt-0">All Rights Reserved.</span>
    </p>
  </footer>
);

export default Footer;
