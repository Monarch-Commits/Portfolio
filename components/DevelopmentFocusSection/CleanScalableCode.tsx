'use client';

import Image from 'next/image';

export default function CleanScalableCode() {
  return (
    <section className="bg-background relative w-full overflow-hidden text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-2 md:px-12 lg:grid-cols-2 lg:gap-12">
        {/* LEFT TEXT CONTENT */}
        <div className="z-10 w-full max-w-full space-y-3 px-4 pt-10 sm:max-w-xl sm:space-y-4 sm:px-0 md:max-w-2xl lg:max-w-xl lg:pt-0">
          <h2 className="text-xl leading-tight font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">
            Clean & Scalable Code
          </h2>

          <p className="text-sm leading-relaxed font-light text-neutral-400 sm:text-base md:text-lg">
            I write modular, maintainable, and well-structured code to support
            long-term scalability, easier updates, and efficient development
            workflows.
          </p>
        </div>

        <div className="relative flex w-full justify-center md:h-[500px] lg:h-[400px] lg:justify-end">
          <div className="relative aspect-[4/3] h-full w-full max-w-[500px] lg:aspect-auto lg:max-w-none">
            <Image
              src="/cleanCode.svg"
              alt="Fast Mockup"
              fill
              className="object-contain"
              sizes="(max-w-7xl) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
