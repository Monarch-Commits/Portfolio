'use client';

import { sendContact } from '@/app/actions/contact.action';
import { Mail, Plus, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled =
    loading || !name.trim() || !email.trim() || !message.trim();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const res = await sendContact(formData);

      if (res.success) {
        toast.success('Message sent successfully');

        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error(res.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      toast.error('Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-background relative border-y border-white/10 py-24 text-white"
    >
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-xs tracking-[0.35em] text-white/70 uppercase">
            Contact
          </h2>
          <h3 className="mt-3 text-4xl font-semibold md:text-5xl">
            Let’s work together
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT */}
          <div className="border border-white/10 bg-white/5 p-8">
            <h4 className="text-lg font-semibold">Get in touch</h4>

            <div className="mt-6 space-y-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>monarchpagcas@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <BsGithub className="h-4 w-4" />
                <span>github.com/Monarch-Commits</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-white/10 bg-white/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Your Message"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white"
              />

              {/* REAL HONEYPOT (IMPORTANT FIX) */}
              <input
                type="text"
                name="honeypot"
                className="hidden"
                autoComplete="off"
                placeholder="honeypot"
              />

              <button
                type="submit"
                disabled={isDisabled}
                className="flex w-full items-center justify-center gap-2 bg-white px-4 py-3 text-sm text-black disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/30">
          Thank you for visiting my portfolio. © {new Date().getFullYear()}{' '}
          Monarch.
        </p>
      </div>
    </section>
  );
}
