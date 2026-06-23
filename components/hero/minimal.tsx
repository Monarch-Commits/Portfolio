'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function Minimal() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reduceMotion = useReducedMotion();

  const shouldAnimate = isDesktop && !reduceMotion;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 8 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
      transition={
        shouldAnimate
          ? {
              duration: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }
          : undefined
      }
      className="z-50 w-full border-b border-white/10 pb-2 text-center text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300 hover:text-white/90 lg:max-w-xs xl:max-w-sm"
    >
      Minimal Design - Maximum Impact
    </motion.div>
  );
}
