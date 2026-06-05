'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Plus, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-100 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between px-4 backdrop-blur-md">
          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/portfolio.svg"
              alt="Monarch Logo"
              width={42}
              height={42}
              priority
            />
            <span className="text-foreground text-lg font-medium">Monarch</span>
          </Link>

          {/* CENTER: DESKTOP NAV */}
          <div className="hidden items-center gap-15 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: MOBILE MENU BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="bg-background absolute top-16 right-4 left-4 z-100 mt-2 border border-white/10 p-4 lg:hidden">
            <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
            <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    link.name === 'Home'
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  } hover:text-foreground`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
