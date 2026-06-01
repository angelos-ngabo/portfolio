import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  /** figma = full 1920 canvas with mobile 382 / desktop centered blocks */
  variant?: 'default' | 'figma';
};

const Container = ({ children, className = '', as: Tag = 'div', variant = 'default' }: ContainerProps) => {
  const base =
    variant === 'figma'
      ? 'figma-section px-5 sm:px-6 lg:px-0'
      : 'w-full max-w-[382px] sm:max-w-[640px] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1920px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16';

  return <Tag className={`${base} ${className}`}>{children}</Tag>;
};

export default Container;
