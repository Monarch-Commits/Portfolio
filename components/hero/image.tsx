'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CenterImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative z-20 hidden justify-center md:flex">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-200" />
      )}

      <Image
        src="/hero4.svg"
        alt="iPhone Mockup"
        width={500}
        height={500}
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
        className={`h-auto w-full object-contain transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
