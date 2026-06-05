'use client';

import { Code2, Layout, Rocket, Gauge, Plus } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    desc: 'I build responsive user interfaces using Next.js, React, and Tailwind CSS, turning designs into working and usable websites.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'I build full stack applications with APIs, authentication, and database integration when needed.',
  },
  {
    icon: Rocket,
    title: 'SaaS / Web Apps',
    desc: 'I develop web apps with a simple and maintainable structure, focused on usability and performance.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: 'I improve load speed, responsiveness, and overall user experience of existing projects.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/10 bg-black py-24 text-white"
    >
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs tracking-[0.35em] text-white/40 uppercase">
            Services
          </h2>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            What I Can Do
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            I build websites and web apps that are fast, responsive, and easy to
            maintain. I focus on clean code and making sure everything works
            well across different devices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group relative overflow-hidden border border-white/10 bg-white/5 p-6 transition-all duration-100 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
              >
                {/* glass highlight overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />

                {/* Icon */}
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/80 backdrop-blur-xl">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h4 className="relative text-lg font-semibold tracking-tight">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-relaxed text-white/50">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
