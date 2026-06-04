'use client';
import { motion } from 'framer-motion';
import { Plus, Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Apex Studio Landing Page',
    thumbnail: '/projects/1.png',
    desc: 'A modern, high-converting digital agency landing page designed for startups, SaaS companies, and creative businesses. It features a premium modern UI with a fully responsive layout, conversion-focused sections, testimonials and pricing blocks, and a clear visual hierarchy. The design is enhanced with clean typography and well-balanced modern spacing to ensure a professional and engaging user experience across all devices.',
    stack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'Modern Real Estate',
    thumbnail: '/projects/2.png',
    desc: 'A modern and responsive real estate landing page built for luxury property brands, featuring featured listings, testimonials, and conversion-focused sections designed to drive inquiries and showcase premium properties.',
    stack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'FlowAI Landing Page',
    thumbnail: '/projects/3.png',
    desc: 'A modern, high-performance landing page developed with Next.js and Tailwind CSS. Designed with a clean bento-grid interface, smooth animations, responsive layouts, and optimized performance to deliver a fast and engaging user experience.',
    stack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'Creator Portfolio Landing Page',
    thumbnail: '/projects/4.png',
    desc: 'A storytelling-driven portfolio website for a video creator, crafted with a cinematic aesthetic, smooth interactions, and responsive design. Developed using Next.js, Tailwind CSS, and Framer Motion to create an engaging experience that highlights the creator’s brand, content, and services.',
    stack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
];

export default function FeaturedProject() {
  return (
    <section className="relative w-full border-b border-white/10 bg-black py-24 text-white md:py-32 lg:py-40">
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Selected web development work
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/10 bg-zinc-900"
            >
              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-100 group-hover:scale-103"
                />

                {/* STRONG DARK OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/95" />

                {/* CLEAR HOVER TEXT */}
                <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="max-w-md text-center text-base leading-relaxed font-medium text-white">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center justify-between gap-4 p-4 md:items-start">
                {/* LEFT */}
                <div>
                  <h3 className="text-center text-lg font-semibold md:text-start md:text-lg lg:text-xl">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex gap-2 whitespace-nowrap">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT BUTTONS */}
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>

                  <a
                    href={project.code}
                    className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    <Code className="h-3.5 w-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button className="relative border border-white/20 bg-white/5 px-8 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/10">
            <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
            <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
