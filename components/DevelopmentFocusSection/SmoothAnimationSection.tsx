'use client';

import AppleIsometricGrid from './StripeDistortionBackground';

export default function SmoothAnimationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-2 md:px-12 lg:grid-cols-2 lg:gap-12">
        {/* LEFT TEXT CONTENT */}
        <div className="z-10 w-full max-w-full space-y-3 px-4 pt-10 sm:max-w-xl sm:space-y-4 sm:px-0 md:max-w-2xl lg:max-w-xl lg:pt-0">
          <h2 className="text-xl leading-tight font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">
            Smooth Animations
          </h2>

          <p className="text-sm leading-relaxed font-light text-neutral-400 sm:text-base md:text-lg">
            I use simple and smooth animations to make the website feel more
            interactive and enjoyable without slowing it down.
          </p>
        </div>

        {/* RIGHT VISUAL CONTENT (CANVAS CONTAINER) */}
        <div className="relative flex w-full justify-center md:h-[500px] lg:h-[400px] lg:justify-end">
          <div className="relative aspect-[4/3] h-full w-full max-w-[500px] lg:aspect-auto lg:max-w-none">
            <div className="h-full w-full overflow-visible rounded-3xl">
              <AppleIsometricGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
