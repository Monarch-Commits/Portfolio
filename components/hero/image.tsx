'use client';

import Image from 'next/image';

export default function CenterImage() {
  return (
    <div className="relative z-20 flex justify-center">
      <Image
        src="/48.svg"
        alt="iPhone Mockup"
        width={500}
        height={500}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
