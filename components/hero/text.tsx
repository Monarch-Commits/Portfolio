'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

function AnimatedContent() {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-50 mx-auto w-full max-w-xl text-center xl:mx-0 xl:text-left"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 inline-block text-xs tracking-[0.30em] text-gray-400 uppercase"
      >
        Web Developer — Frontend-focused
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl leading-none font-semibold md:text-5xl"
      >
        I care about the
        <br />
        small details.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 max-w-full text-sm text-gray-400 lg:mx-0 xl:max-w-sm"
      >
        From spacing and interactions to performance, I focus on building
        websites that feel smooth and intentional.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400 xl:justify-start"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        Available for work
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start"
      >
        <button className="border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10">
          View my Work
        </button>

        <button className="bg-white/90 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-400">
          Contact
        </button>
      </motion.div>
    </MotionDiv>
  );
}

function StaticContent() {
  return (
    <div className="relative z-50 mx-auto w-full max-w-xl text-center xl:mx-0 xl:text-left">
      <span className="mb-4 inline-block text-xs tracking-[0.30em] text-gray-400 uppercase">
        Web Developer — Frontend-focused
      </span>

      <h1 className="text-4xl leading-none font-semibold md:text-5xl">
        I care about the
        <br />
        small details.
      </h1>

      <p className="mt-4 max-w-full text-sm text-gray-400 lg:mx-0 xl:max-w-sm">
        From spacing and interactions to performance, I focus on building
        websites that feel smooth and intentional.
      </p>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400 xl:justify-start">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        Available for work
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start">
        <button className="border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10">
          View my Work
        </button>

        <button className="bg-white/90 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-400">
          Contact
        </button>
      </div>
    </div>
  );
}

export default function Text() {
  const isLgUp = useMediaQuery('(min-width: 1024px)');

  return isLgUp ? <AnimatedContent /> : <StaticContent />;
}
