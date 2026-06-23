import { Mail } from 'lucide-react';
import { BsFileEarmarkText, BsGithub } from 'react-icons/bs';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Monarch-Commits',
    icon: <BsGithub className="h-4 w-4" />,
  },
  {
    name: 'Email',
    href: 'mailto:monarchpagcas@gmail.com',
    icon: <Mail className="h-4 w-4" />,
  },
  {
    name: 'Resume',
    href: '/MonarchResume.pdf',
    icon: <BsFileEarmarkText className="h-4 w-4" />,
  },
];
