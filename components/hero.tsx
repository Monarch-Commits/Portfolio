'use client';

import { Plus } from 'lucide-react';
import Text from './hero/text';
import CenterImage from './hero/image';
import SocialLinks from './hero/socialLinks';
import { useMediaQuery } from './hooks/useMediaQuery';
import { motion } from 'framer-motion';

export default function Hero() {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  const animate = isLgUp;

  const MotionDiv = animate ? motion.div : 'div';
  return (
    <section className="bg-background items-between relative mx-auto flex h-auto w-full flex-col items-center justify-between gap-16 overflow-hidden border-b border-white/10 px-4 py-24 sm:px-8 md:py-32 lg:gap-30 lg:overflow-visible lg:px-18 lg:py-50 xl:flex-row">
      <Plus className="absolute -bottom-2 -left-2 z-80 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-80 h-4 w-4 text-white" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      {/* TEXT CONTENT */}
      <Text />
      {/* IMAGE SECTION */}
      <CenterImage />

      <div className="bg-background absolute top-1/2 -right-24 hidden -translate-y-1/2 rotate-90 border border-white/10 px-4 text-xs text-[10px] font-medium tracking-[0.4em] text-white/80 uppercase xl:block">
        Simplicity works
      </div>

      <div className="pointer-events-none absolute inset-0 z-40 w-full bg-linear-to-t from-black via-black/5 to-transparent" />
      <MotionDiv
        initial={animate ? { opacity: 0, y: 6 } : undefined}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="z-50 w-full border-b border-white/10 pb-2 text-center text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300 hover:text-white/90 lg:max-w-xs xl:max-w-sm"
      >
        Minimal Design - Maximum Impact
      </MotionDiv>

      <SocialLinks />
    </section>
  );
}
