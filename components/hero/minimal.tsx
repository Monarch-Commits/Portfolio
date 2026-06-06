'use client';

import { motion } from 'framer-motion';

export default function Minimal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="z-50 w-full border-b border-white/10 pb-2 text-center text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300 hover:text-white/90 lg:max-w-xs xl:max-w-sm"
    >
      Minimal Design - Maximum Impact
    </motion.div>
  );
}
