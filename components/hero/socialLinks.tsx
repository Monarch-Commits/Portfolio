'use client';

import { SOCIAL_LINKS } from '@/app/data/social';

export default function SocialLinks() {
  return (
    <div className="relative z-50 mt-5 flex flex-nowrap items-center justify-center gap-x-6 gap-y-3 px-5 py-3 text-center sm:px-6">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name !== 'Email' ? '_blank' : undefined}
          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
          className="group flex items-center gap-2.5 text-xs font-medium text-zinc-400 uppercase transition-all duration-300 hover:text-white"
        >
          <span className="flex h-5 w-5 items-center justify-center text-zinc-400">
            {link.icon}
          </span>

          <span className="relative py-1">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
