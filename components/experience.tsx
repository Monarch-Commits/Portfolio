import { Plus } from 'lucide-react';

const experiences = [
  {
    title: 'On-the-Job Training',
    role: 'IT Support / System Developer',
    company: 'University of Southern Mindanao (USM) – Kidapawan City Campus',
    period: 'Feb 2025 – May 2025',
    description: [
      'Provided IT support by troubleshooting and repairing school laptops, printers, and other technical equipment.',
      'Assisted in setting up fiber internet connections and campus-wide Wi-Fi.',
      'Maintained computer laboratories and provided technical assistance to students, including ID processing.',
      'Developed a Student Profiling System with real-time updates, search functionality, and secure authentication.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    links: [
      { label: 'View Project', href: '#' },
      { label: 'View Certificate', href: '#' },
    ],
  },
  {
    title: 'Capstone Project',
    role: 'Library Systems Developer',
    company: 'Makilala Institute of Science and Technology',
    period: 'May 2024 – January 2025',
    description: [
      'Developed a centralized system to manage and track library collections, including books and journals.',
      'Implemented full CRUD operations, report generation, and subject-based monitoring.',
      'Designed the system to improve organization, reporting efficiency, and long-term monitoring of library resources.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    links: [
      { label: 'View Project', href: '#' },
      { label: 'View Documentation', href: '#' },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-black px-6 py-24 text-white md:px-16">
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Experience
          </h2>
          <p className="mt-3 text-white/60">
            Work on real projects, building systems and handling technical tasks
            when needed.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <Plus className="absolute -top-2 -left-2 z-80 h-4 w-4 text-white" />
              <Plus className="absolute -top-2 -right-2 z-80 h-4 w-4 text-white" />

              <Plus className="absolute -bottom-2 -left-2 z-80 h-4 w-4 text-white" />
              <Plus className="absolute -right-2 -bottom-2 z-80 h-4 w-4 text-white" />
              {/* Card Top Header */}
              <div className="flex flex-col gap-2 md:items-start md:justify-between lg:flex-row">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    {exp.role} • {exp.company}
                  </p>
                </div>
                <span className="text-sm text-white/40">{exp.period}</span>
              </div>

              {/* Description Bullet Points */}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/30">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons (Primary vs Secondary) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {exp.links.map((link, i) => {
                  const isPrimary =
                    link.label.toLowerCase().includes('project') ||
                    link.label.toLowerCase().includes('live');

                  return (
                    <a
                      key={i}
                      href={link.href}
                      className={`group/link flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition ${
                        isPrimary
                          ? 'bg-white text-black hover:bg-gray-200' // Primary Style
                          : 'border border-white/20 text-white hover:bg-white/10' // Secondary Style
                      }`}
                    >
                      {link.label}
                      <span className="text-xs transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
