'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPrisma,
  SiGit,
  SiPostgresql,
} from 'react-icons/si';

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
];

export default function DeveloperStory() {
  return (
    <section
      id="about"
      className="bg-background relative border-b border-white/10 py-16 text-white md:py-24 lg:py-32"
    >
      {/* Decorative Corners */}
      <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        {/* IMAGE */}
        <div className="relative w-full max-w-md border-b border-white/10">
          <Image
            src="/front.png"
            alt="Web Developer"
            width={1000}
            height={1000}
            className="h-auto w-full object-contain"
          />

          <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
        </div>

        {/* CONTENT */}
        <div className="mt-10 space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-xs tracking-[0.3em] uppercase">
              About Me
            </p>

            <h2 className="text-3xl leading-tight font-semibold md:text-5xl">
              Building Modern
              <br />
              <span className="text-primary">Digital Experiences</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Im a frontend-focused web developer passionate about creating clean,
            responsive, and high-performing websites. I enjoy transforming ideas
            into engaging digital experiences that combine aesthetics with
            functionality.
          </p>

          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Using technologies like Next.js, React, Tailwind CSS, and Framer
            Motion, I build interfaces that not only look modern but also
            deliver smooth user experiences across all devices.
          </p>

          <div className="w-full pt-8">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              Tech Stack
            </p>

            <div className="relative mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
              <Plus className="absolute -top-2 -left-2 z-80 h-4 w-4 text-white" />
              <Plus className="absolute -top-2 -right-2 z-80 h-4 w-4 text-white" />

              <Plus className="absolute -bottom-2 -left-2 z-80 h-4 w-4 text-white" />
              <Plus className="absolute -right-2 -bottom-2 z-80 h-4 w-4 text-white" />
              {techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center justify-center border border-white/10 bg-white/5 px-3 py-4 text-xs text-gray-300 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                  >
                    <Icon
                      className="mb-2 h-6 w-6 text-gray-300 transition group-hover:text-white"
                      aria-label={`${tech.name} icon`}
                      role="img"
                    />

                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
