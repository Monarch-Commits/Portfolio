'use client';

import { Mail, Plus, Send } from 'lucide-react';
import { GiThunderBlade } from 'react-icons/gi';
import { LiaLinkedin } from 'react-icons/lia';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background relative border-y border-white/10 py-24 text-white"
    >
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xs tracking-[0.35em] text-white/40 uppercase">
            Contact
          </h2>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Let’s work together
          </h3>
          <p className="mt-4 text-white/50">
            Have a project in mind? I’m open to freelance or collaboration work.
          </p>
        </div>

        {/* Card */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Info */}
          <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <p className="mt-2 text-sm text-white/50">
              I’m open to freelance, collaborations, and full-time
              opportunities.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="h-4 w-4" />
                <span>your.email@example.com</span>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <GiThunderBlade className="h-4 w-4" />
                <span>github.com/yourname</span>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <LiaLinkedin className="h-4 w-4" />
                <span>linkedin.com/in/yourname</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-white/10 bg-white/5 px-4 py-8 backdrop-blur-xl lg:px-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Send Message
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
}
