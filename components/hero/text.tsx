'use client';

import Link from 'next/link';

export default function Text() {
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
        <Link
          href="#project"
          className="border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10"
        >
          View my Work
        </Link>

        <Link
          href="#contact"
          className="bg-white/90 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
