import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../../data/portfolio';

type SocialLinksProps = {
  variant?: 'boxed' | 'plain';
  className?: string;
};

/** Order matches Figma hero: mail → linkedin → github (left to right) */
const links = [
  { href: `mailto:${site.email}`, icon: Mail, label: 'Email' },
  { href: site.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: site.github, icon: Github, label: 'GitHub' },
];

const SocialLinks = ({ variant = 'boxed', className = '' }: SocialLinksProps) => (
  <div className={`flex items-center justify-center gap-4 sm:gap-6 ${className}`}>
    {links.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        aria-label={label}
        className={
          variant === 'boxed'
            ? 'social-icon-box text-black hover:bg-black hover:text-white transition-colors duration-300'
            : 'text-white hover:opacity-75 transition-opacity duration-300'
        }
      >
        <Icon size={variant === 'boxed' ? 26 : 28} strokeWidth={1.5} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
