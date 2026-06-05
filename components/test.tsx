'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import { SOCIAL_LINKS } from '@/app/data/social';

export default function Hero() {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  return (
    <section className="bg-background items-between relative mx-auto flex h-auto w-full flex-col items-center justify-between gap-16 overflow-hidden border-b border-white/10 px-4 py-24 sm:px-8 md:py-32 lg:flex-row lg:gap-30 lg:overflow-visible lg:px-18 lg:py-50">
      <Plus className="absolute -bottom-2 -left-2 z-80 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-80 h-4 w-4 text-white" />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-50 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
        {/* Tagline */}
        <motion.span
          initial={isLgUp ? { opacity: 0, y: 15, filter: 'blur(6px)' } : false}
          whileInView={
            isLgUp ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined
          }
          transition={
            isLgUp
              ? { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
              : undefined
          }
          viewport={{ once: true }}
          className="mb-4 inline-block text-xs tracking-[0.30em] text-gray-400 uppercase"
        >
          Web Developer — Frontend-focused
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={
            isLgUp ? { opacity: 0, y: 25, filter: 'blur(8px)' } : undefined
          }
          whileInView={
            isLgUp ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined
          }
          transition={
            isLgUp
              ? { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
              : undefined
          }
          viewport={isLgUp ? { once: true } : undefined}
          className="text-4xl leading-none font-semibold md:text-5xl"
        >
          I care about the
          <br />
          small details.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={
            isLgUp ? { opacity: 0, y: 20, filter: 'blur(6px)' } : undefined
          }
          whileInView={
            isLgUp ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined
          }
          transition={
            isLgUp
              ? { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
              : undefined
          }
          viewport={isLgUp ? { once: true } : undefined}
          className="mt-4 max-w-full text-sm text-gray-400 lg:max-w-sm"
        >
          From spacing and interactions to performance, I focus on building
          websites that feel smooth and intentional.
        </motion.p>

        {/* Status */}
        <motion.div
          initial={isLgUp ? { opacity: 0, y: 15 } : undefined}
          whileInView={isLgUp ? { opacity: 1, y: 0 } : undefined}
          transition={
            isLgUp
              ? { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
              : undefined
          }
          viewport={isLgUp ? { once: true } : undefined}
          className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400 lg:justify-start"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for work
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={isLgUp ? { opacity: 0, y: 20 } : undefined}
          whileInView={isLgUp ? { opacity: 1, y: 0 } : undefined}
          transition={
            isLgUp
              ? { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
              : undefined
          }
          viewport={isLgUp ? { once: true } : undefined}
          className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
        >
          <button className="border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10">
            View my Work
          </button>

          <button className="bg-white/90 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-400">
            Contact
          </button>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={isLgUp ? { opacity: 0, y: 30, scale: 0.95 } : undefined}
        whileInView={isLgUp ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={
          isLgUp
            ? {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1],
              }
            : undefined
        }
        viewport={isLgUp ? { once: true } : undefined}
        className="relative z-20 mt-16 flex w-full max-w-2xl justify-center lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
      >
        {/* Glow Ring */}
        <motion.div
          initial={isLgUp ? { opacity: 0, scale: 0.8 } : undefined}
          whileInView={isLgUp ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={isLgUp ? { once: true } : undefined}
          className="absolute top-10 left-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.25)] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-70 lg:w-[280px]"
        />

        {/* Soft Glow Background */}
        <motion.div
          initial={isLgUp ? { opacity: 0, scale: 0.7 } : undefined}
          whileInView={isLgUp ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={isLgUp ? { once: true } : undefined}
          className="absolute top-1/2 left-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white/5 blur-[60px] sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]"
        />

        {/* Portrait */}
        <motion.div
          initial={isLgUp ? { opacity: 0, y: 20, scale: 0.97 } : undefined}
          whileInView={isLgUp ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={
            isLgUp
              ? {
                  duration: 0.9,
                  ease: [0.215, 0.61, 0.355, 1],
                }
              : undefined
          }
          viewport={isLgUp ? { once: true } : undefined}
          className="relative"
        >
          <Image
            src="/portfolio.png"
            alt="Portrait"
            width={700}
            height={900}
            priority
            className="relative h-auto w-full object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={isLgUp ? { opacity: 0, x: 20 } : undefined}
        whileInView={isLgUp ? { opacity: 1, x: 0 } : undefined}
        transition={
          isLgUp ? { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } : undefined
        }
        viewport={isLgUp ? { once: true } : undefined}
        className="bg-background absolute top-1/2 -right-24 hidden -translate-y-1/2 rotate-90 border border-white/10 px-4 text-xs text-[10px] font-medium tracking-[0.4em] text-white/80 uppercase lg:block"
      >
        Simplicity works
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-40 w-full bg-linear-to-t from-black via-black/5 to-transparent" />
      <motion.div
        initial={
          isLgUp ? { opacity: 0, y: 10, filter: 'blur(6px)' } : undefined
        }
        whileInView={
          isLgUp ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined
        }
        transition={
          isLgUp
            ? {
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
              }
            : undefined
        }
        viewport={isLgUp ? { once: true } : undefined}
        className="z-50 w-full border-b border-white/10 pb-2 text-center text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300 hover:text-white/90 lg:max-w-xs xl:max-w-sm"
      >
        Minimal Design - Maximum Impact
      </motion.div>

      {/* MODERN SOCIAL LINKS WITH TEXT ON THE RIGHT */}
      <motion.div
        initial={isLgUp ? { opacity: 0, y: 15 } : undefined}
        whileInView={isLgUp ? { opacity: 1, y: 0 } : undefined}
        transition={
          isLgUp ? { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } : undefined
        }
        viewport={isLgUp ? { once: true } : undefined}
        className="relative z-50 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-white/5 bg-zinc-950/20 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/10 max-sm:w-[90%] sm:px-6 lg:absolute lg:right-8 lg:bottom-8 lg:flex-nowrap"
      >
        {SOCIAL_LINKS.map((link, i) => (
          <motion.div
            key={link.name}
            initial={
              isLgUp ? { opacity: 0, y: 10, filter: 'blur(6px)' } : undefined
            }
            whileInView={
              isLgUp ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined
            }
            transition={
              isLgUp
                ? {
                    duration: 0.5,
                    delay: i * 0.08, // 👈 manual stagger (no variants)
                    ease: [0.215, 0.61, 0.355, 1],
                  }
                : undefined
            }
            viewport={isLgUp ? { once: true } : undefined}
            className="flex items-center"
          >
            <a
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-2.5 text-xs font-medium text-zinc-400 uppercase transition-all duration-300 hover:text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center text-zinc-400 transition-colors group-hover:text-white">
                {link.icon}
              </span>

              <span className="relative py-1">{link.name}</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
