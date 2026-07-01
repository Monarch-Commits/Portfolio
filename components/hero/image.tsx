'use client';

import Image from 'next/image';

export default function CenterImage() {
  return (
    <div className="relative z-20 hidden justify-center md:flex">
      <Image
        src="/hero2.svg"
        alt="iPhone Mockup"
        width={500}
        height={500}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
