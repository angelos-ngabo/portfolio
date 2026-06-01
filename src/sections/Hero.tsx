import { motion } from 'framer-motion';
import SocialLinks from '../components/ui/SocialLinks';
import { site } from '../data/portfolio';

const Hero = () => (
  <section id="hero" className="relative overflow-hidden">
    {/* Mobile — Figma frame 1:340 */}
    <div className="lg:hidden relative h-[min(757px,100svh)] w-full">
      <img
        src="/figma_images/ecd888c5db9f58415906487e880f6e484d0661e3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.15) 60%), radial-gradient(circle at 55% 40%, rgba(19,19,19,0) 0%, rgba(14,0,0,0.5) 100%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center text-white px-5 pb-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-[340px]"
        >
          <p className="text-[22px] sm:text-[25px] font-bold mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {site.heroGreeting} {site.name}
          </p>
          <h1
            className="text-[28px] sm:text-[32px] font-semibold uppercase tracking-wide leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {site.heroTagline}
          </h1>
          <img
            src="/figma_images/2d32096df2f8c0f95d5ea769bb18e04b52a5bc33.png"
            alt=""
            className="w-[120px] h-[10px] object-contain mx-auto mb-6 opacity-90"
            aria-hidden
          />
          <SocialLinks variant="plain" />
        </motion.div>
      </div>
    </div>

    {/* Desktop — Figma frame 1:3 */}
    <div className="hidden lg:block relative min-h-[var(--hero-h)]">
      <div className="absolute inset-0 diagonal-bg" aria-hidden />
      <div className="figma-section relative z-10 min-h-[var(--hero-h)] flex">
        <div className="w-[52%] flex flex-col justify-center pl-[254px] pr-12">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <p
              className="text-[#333] text-[40px] font-bold leading-[47px]"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {site.heroGreeting}
            </p>
            <h1
              className="text-black text-[80px] font-bold leading-[94px] mt-[54px]"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {site.name}
            </h1>
            <p
              className="text-[#333] text-[25px] font-extrabold uppercase tracking-[0.08em] leading-[40px] -mt-1"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {site.heroTagline}
            </p>
            <p
              className="text-[#666] text-sm font-bold uppercase tracking-[0.2em] mt-6 mb-[100px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {site.heroSubline}
            </p>
            <SocialLinks variant="boxed" className="!justify-start gap-5" />
          </motion.div>
        </div>
        <div className="w-[48%] relative flex items-end justify-end pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative w-full max-w-[640px] h-[920px]"
          >
            <img
              src="/figma_images/ff90103dbcd4d855294602cde88bc3407371f5e0.png"
              alt="Portrait"
              className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom"
            />
            <p
              className="absolute bottom-8 right-4 max-w-[136px] text-[15px] text-white text-justify leading-[20px] pointer-events-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              this is not my photo, but I dearly hope to get one just like this
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
