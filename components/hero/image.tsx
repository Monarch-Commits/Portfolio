'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function CenterImage() {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  const animate = isLgUp;

  const MotionDiv = animate ? motion.div : 'div';

  return (
    <MotionDiv
      initial={animate ? { opacity: 0, y: 10 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 mt-16 flex w-full max-w-2xl justify-center xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:-translate-x-1/2"
    >
      {/* glow ring */}
      <div className="absolute top-10 left-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.25)] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-70 lg:w-[280px]" />

      {/* blur glow */}
      <div className="absolute top-1/2 left-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white/5 blur-[60px] sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]" />

      {/* image */}
      <Image
        src="/portfolio.png"
        alt="Portrait"
        width={700}
        height={900}
        priority
        className="relative h-auto w-full object-contain"
      />
    </MotionDiv>
  );
}
