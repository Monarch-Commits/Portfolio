'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function Minimal() {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  const animate = isLgUp;

  const MotionDiv = animate ? motion.div : 'div';

  return (
    <MotionDiv
      initial={animate ? { opacity: 0, y: 8 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={
        animate
          ? {
              duration: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }
          : undefined
      }
      className="z-50 w-full border-b border-white/10 pb-2 text-center text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300 hover:text-white/90 lg:max-w-xs xl:max-w-sm"
    >
      Minimal Design - Maximum Impact
    </MotionDiv>
  );
}
