'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/app/data/social';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function SocialLinks() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reduceMotion = useReducedMotion();

  const shouldAnimate = isDesktop && !reduceMotion;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 15 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
      transition={
        shouldAnimate
          ? {
              duration: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }
          : undefined
      }
      className="relative z-50 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-white/5 bg-zinc-950/20 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/10 max-sm:w-[90%] sm:px-6 xl:absolute xl:right-8 xl:bottom-8 xl:flex-nowrap"
    >
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name !== 'Email' ? '_blank' : undefined}
          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
          className="group flex items-center gap-2.5 text-xs font-medium text-zinc-400 uppercase transition-all duration-300 hover:text-white"
        >
          <span className="flex h-5 w-5 items-center justify-center text-zinc-400">
            {link.icon}
          </span>

          <span className="relative py-1">{link.name}</span>
        </a>
      ))}
    </motion.div>
  );
}
