'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FastPerformanceCard() {
  return (
    <section className="bg-background relative w-full overflow-hidden text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-2 md:px-12 lg:grid-cols-2 lg:gap-12">
        {/* LEFT TEXT CONTENT */}
        <div className="z-10 w-full max-w-full space-y-3 px-4 pt-10 sm:max-w-xl sm:space-y-4 sm:px-0 md:max-w-2xl lg:max-w-xl lg:pt-0">
          <h2 className="text-xl leading-tight font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">
            Performance Optimization
          </h2>

          <p className="text-sm leading-relaxed font-light text-neutral-400 sm:text-base md:text-lg">
            I optimize websites to load faster and run smoothly by keeping the
            code clean and reducing unnecessary resources.
          </p>
        </div>

        {/* RIGHT VISUAL CONTENT (CANVAS CONTAINER) */}
        <div className="relative flex w-full justify-center md:h-[500px] lg:h-[400px] lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 80, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              bounce: 0.2,
            }}
            className="relative aspect-[4/3] h-full w-full max-w-[500px] lg:aspect-auto lg:max-w-none"
          >
            <Image
              src="/Faster.svg"
              alt="Fast Mockup"
              fill
              priority
              className="object-contain"
              sizes="(max-w-7xl) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
