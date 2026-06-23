'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ResponsiveDesignSection() {
  return (
    <section className="relative flex min-h-100 w-full items-center overflow-hidden text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-2 md:px-12 lg:grid-cols-2 lg:gap-12">
        {/* Left Content: Text */}
        <div className="z-10 w-full max-w-full space-y-3 px-4 pt-10 sm:max-w-xl sm:space-y-4 sm:px-0 md:max-w-2xl lg:max-w-xl lg:pt-0">
          <h2 className="text-xl leading-tight font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">
            Responsive Design
          </h2>

          <p className="text-sm leading-relaxed font-light text-neutral-400 sm:text-base md:text-lg">
            This website is designed to work well on all devices, whether youre
            using a phone, tablet, or desktop computer.
          </p>
        </div>

        {/* Right Content: Hand Mockup Image with Animation */}
        <div className="relative flex w-full justify-center pt-2 pr-0 md:h-[500px] lg:h-[400px] lg:justify-end lg:pt-10 lg:pr-10">
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
              src="/Mockup.png"
              alt="Mobile Responsive Mockup"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-w-7xl) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
