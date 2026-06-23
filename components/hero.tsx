'use client';

import { motion } from 'framer-motion';
import Text from './hero/text';
import CenterImage from './hero/image';
import SocialLinks from './hero/socialLinks';
import { Plus } from 'lucide-react';
import Minimal from './hero/minimal';

export default function Hero() {
  return (
    <section className="bg-background relative mx-auto flex h-auto w-full flex-col items-center justify-between gap-16 overflow-visible border-b border-white/10 px-4 py-24 sm:px-8 md:py-32 lg:gap-20 lg:px-18 lg:py-50 xl:flex-row">
      <Plus className="absolute -bottom-2 -left-2 z-50 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-50 h-4 w-4 text-white" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <Text />
      <CenterImage />

      <div className="pointer-events-none absolute inset-0 z-40 w-full bg-linear-to-t from-black via-black/5 to-transparent" />

      <div className="bg-background absolute top-1/2 -right-24 hidden -translate-y-1/2 rotate-90 border border-white/10 px-4 text-xs text-[10px] font-medium tracking-[0.4em] text-white/80 uppercase lg:block">
        Simplicity works
      </div>

      <Minimal />

      <SocialLinks />
    </section>
  );
}
