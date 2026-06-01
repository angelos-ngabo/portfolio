import { motion } from 'framer-motion';

type SectionTitleProps = {
  children: string;
  variant?: 'default' | 'portfolio';
  light?: boolean;
  className?: string;
};

const SectionTitle = ({
  children,
  variant = 'default',
  light = false,
  className = '',
}: SectionTitleProps) => {
  const tracking = variant === 'portfolio' ? 'tracking-[0.435em]' : 'tracking-[0.355em] max-md:tracking-[0.435em]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={`flex justify-center w-full ${className}`}
    >
      <div
        className={`relative border-[8px] inline-flex items-center justify-center w-[156px] h-[68px] sm:w-[220px] lg:w-[367px] lg:h-[107px] px-3 sm:px-6 lg:px-10 ${
          light ? 'border-[#FFFBFB] text-[#FFFBFB]' : 'border-black text-black'
        }`}
      >
        <h2
          className={`font-bold uppercase text-center leading-none text-[14px] sm:text-[22px] lg:text-[30px] ${tracking}`}
          style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '38.37px' }}
        >
          {children}
        </h2>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
