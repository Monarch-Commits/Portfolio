'use client';
import { motion } from 'framer-motion';
import { Plus, Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { AlertDialogBasic } from './ui/button/dialogbutton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const projects = [
  {
    id: 1,
    title: 'Apex Studio Landing Page',
    thumbnail: '/projects/1.png',
    desc: 'A modern, high-converting digital agency landing page designed for startups, SaaS companies, and creative businesses. Built with a premium modern interface, responsive layouts, strategic content sections, testimonials, pricing blocks, and strong visual hierarchy to maximize engagement and conversions.',

    problem:
      'Many digital agencies struggle to convert visitors into leads because of cluttered layouts, weak messaging, poor content structure, and inconsistent mobile experiences.',

    solution:
      'Designed and developed a conversion-focused landing page with a clear visual hierarchy, responsive sections, compelling call-to-action placement, modern typography, and smooth micro-interactions using Framer Motion.',

    result:
      'Delivered a professional agency website that improves user engagement, presents services more effectively, and provides a seamless browsing experience across desktop, tablet, and mobile devices.',

    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],

    live: 'https://apexstudio-landingpage.vercel.app/',
    code: 'https://github.com/Monarch-Commits/Apex-Studio-Landing-Page',
  },

  {
    id: 2,
    title: 'Modern Real Estate',
    thumbnail: '/projects/2.png',
    desc: 'A modern luxury real estate landing page built to showcase premium properties through elegant layouts, featured listings, testimonials, and conversion-focused inquiry sections.',

    problem:
      'Real estate websites often present listings in a generic and outdated manner, making it difficult to build trust and encourage potential buyers to take action.',

    solution:
      'Created a visually polished real estate experience with modern property cards, responsive layouts, social proof sections, and strategically positioned inquiry forms to increase lead generation opportunities.',

    result:
      'Established a premium online presence that highlights property listings effectively while creating a smoother and more engaging experience for prospective buyers.',

    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],

    live: 'https://real-state-liard-eight.vercel.app/',
    code: 'https://github.com/Monarch-Commits/real-state',
  },

  {
    id: 3,
    title: 'FlowAI Landing Page',
    thumbnail: '/projects/3.png',
    desc: 'A modern SaaS landing page featuring a clean bento-grid layout, responsive design, smooth animations, and performance-focused development tailored for AI and technology products.',

    problem:
      'AI startups frequently struggle to explain complex products in a simple and engaging way while maintaining fast loading speeds and modern visual appeal.',

    solution:
      'Built a structured SaaS landing page using a bento-grid design system, concise content sections, smooth animations, and optimized Next.js rendering to improve clarity and performance.',

    result:
      'Created a professional product marketing experience that communicates value quickly, maintains excellent responsiveness, and delivers a polished modern SaaS aesthetic.',

    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],

    live: 'https://flowai-landingpage.vercel.app/',
    code: 'https://github.com/Monarch-Commits/SaaS-Landing-Page',
  },

  {
    id: 4,
    title: 'Creator Portfolio Landing Page',
    thumbnail: '/projects/4.png',
    desc: 'A storytelling-driven portfolio website created for content creators and video professionals. Features cinematic visuals, smooth interactions, and a modern personal branding experience.',

    problem:
      'Many creator portfolios fail to communicate personality, showcase work effectively, and create a memorable experience for potential clients and collaborators.',

    solution:
      'Designed a cinematic portfolio experience using storytelling-based layouts, motion design, visual hierarchy, and responsive interactions to highlight the creator’s work and services.',

    result:
      'Delivered an engaging personal brand experience that improves project presentation, strengthens credibility, and encourages client inquiries.',

    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],

    live: 'https://storycut-landingpage.vercel.app/',
    code: 'https://github.com/Monarch-Commits/StoryCut-Studio',
  },
];

export default function FeaturedProject() {
  return (
    <section
      id="project"
      className="relative w-full border-b border-white/10 bg-black py-24 text-white md:py-32 lg:py-40"
    >
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 overflow-y-auto opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {/* Modern glass + gradient background */}
                  <div className="h-full w-full bg-gradient-to-b from-zinc-950/90 via-zinc-950/95 to-black/95 p-5 backdrop-blur-xl">
                    {/* Accent glow line */}
                    <div className="mb-3 h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                    <Accordion
                      type="single"
                      collapsible
                      defaultValue="desc"
                      className="w-full"
                    >
                      <AccordionItem value="desc">
                        <AccordionTrigger className="text-sm text-white">
                          Description
                        </AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-zinc-300">
                          {project.desc}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="problem"
                        className="border-red-500/20"
                      >
                        <AccordionTrigger className="text-red-400">
                          Problem
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-zinc-300">
                          {project.problem}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="solution"
                        className="border-blue-500/20"
                      >
                        <AccordionTrigger className="text-blue-400">
                          Solution
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-zinc-300">
                          {project.solution}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="result"
                        className="border-green-500/20"
                      >
                        <AccordionTrigger className="text-green-400">
                          Result
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-zinc-300">
                          {project.result}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
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
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-white/20 bg-white/70 px-3 py-2 text-xs text-black transition hover:bg-white/10"
                    >
                      <Code className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </div>
                  <AlertDialogBasic
                    solution={project.solution}
                    problem={project.problem}
                    result={project.result}
                    title={project.title}
                    desc={project.desc}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
