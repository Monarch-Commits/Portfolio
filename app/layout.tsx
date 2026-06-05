import type { Metadata } from 'next';
import { Inter, Playfair_Display, Geist } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});
export const metadata: Metadata = {
  title: {
    default: 'Monarch | Web Developer Portfolio',
    template: '%s | Monarch ',
  },
  description:
    'Web developer portfolio showcasing modern web applications, UI/UX designs, and full-stack projects built with Next.js, React, and Tailwind CSS.',
  keywords: [
    'web developer',
    'frontend developer',
    'Next.js developer',
    'React developer',
    'portfolio',
    'tailwind css',
    'javascript developer',
  ],
  authors: [{ name: 'Monarch Pagcas' }],
  creator: 'Monarch',
  openGraph: {
    title: 'Monarch | Web Developer Portfolio',
    description:
      'Explore modern web projects, UI designs, and development work by Monarch Pagcas.',
    url: 'https://monarchs-portfolio.vercel.app/',
    siteName: 'Monarch Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monarch Pagcas | Web Developer Portfolio',
    description:
      'Web developer portfolio featuring modern projects built with Next.js and Tailwind CSS.',
  },
  icons: {
    icon: [
      {
        url: '/MonarchLogoLight.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/MonarchLogoDark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full scroll-smooth',
        'antialiased',
        inter.variable,
        playfair.variable,
        'font-sans',
        geist.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
