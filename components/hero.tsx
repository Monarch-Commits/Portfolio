'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-background items-between relative mx-auto flex h-auto w-full flex-col items-center justify-center gap-16 overflow-hidden border-b border-white/10 px-4 py-24 sm:px-8 md:py-32 lg:flex-row lg:gap-30 lg:overflow-visible lg:px-18 lg:py-50">
      {/* <Plus className="absolute -top-2  -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" /> */}

      <Plus className="absolute -bottom-2 -left-2 z-80 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-80 h-4 w-4 text-white" />
      {/* TEXT CONTENT */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-50 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
        <span className="mb-4 inline-block text-xs tracking-[0.35em] text-gray-400 uppercase">
          Web Developer — Frontend-focused
        </span>

        <h1 className="text-4xl leading-none font-black md:text-5xl">
          BUILDING WEB
          <br />
          EXPERIENCES
        </h1>

        <p className="mt-4 max-w-full text-sm text-gray-400 lg:mx-0 lg:max-w-sm">
          I build fast, clean, and responsive web interfaces focused on UI and
          performance.
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400 lg:justify-start">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for work
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <button className="border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition hover:bg-white/10">
            View Work
          </button>

          <button className="bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200">
            Contact
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative z-20 mt-16 flex w-full max-w-2xl justify-center lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
        <div className="absolute top-10 left-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.25)] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px]" />
        <div className="absolute top-1/2 left-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white/5 blur-[60px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]" />
        {/* Image */}
        <Image
          src="/portfolio.png"
          alt="Portrait"
          width={700}
          height={900}
          priority
          className="relative h-auto w-full object-contain"
        />
      </div>
      {/* <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/1 select-none md:text-[12rem] xl:text-[14rem]">
        DESIGN
      </div> */}

      <div className="absolute top-1/2 -right-30 hidden -translate-y-1/2 rotate-90 bg-[#0a0a0a] p-4 text-xs tracking-[0.4em] text-gray-500 uppercase lg:block">
        Scroll to Explore
      </div>
      <div className="pointer-events-none absolute inset-0 z-40 w-full bg-linear-to-t from-black via-black/5 to-transparent" />
      <div className="w-full max-w-full lg:max-w-xs xl:max-w-sm"></div>
    </section>
  );
}
