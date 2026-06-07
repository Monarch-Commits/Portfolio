import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type Props = {
  title: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
};

export function AlertDialogBasic({
  title,
  desc,
  problem,
  solution,
  result,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="z-50 block rounded-none border border-white/80 bg-white/80 text-xs text-black hover:bg-white/10 lg:hidden">
          Details
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="z-100 h-[85dvh] max-h-[85dvh] rounded-none border border-white/10 bg-zinc-950 text-white">
        {/* corners accent */}
        <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
        <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
        <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
        <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />

        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold">
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription className="text-zinc-400">
            Full case study breakdown of this project
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Accordion type="single" collapsible defaultValue="problem">
          <AccordionItem value="desc" className="border-white/20">
            <AccordionTrigger className="text-sm text-white transition hover:text-cyan-300">
              Description
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-zinc-300">
              {desc}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="problem" className="border-red-500/20">
            <AccordionTrigger className="text-red-400">
              Problem
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-zinc-300">{problem}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="solution" className="border-blue-500/20">
            <AccordionTrigger className="text-blue-400">
              Solution
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-zinc-300">{solution}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="result" className="border-green-500/20">
            <AccordionTrigger className="text-green-400">
              Result
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-zinc-300">{result}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <AlertDialogFooter className="mt-5 flex flex-row items-center justify-between">
          <AlertDialogCancel className="rounded-none border border-white/20 bg-white/5 text-white hover:bg-white/10">
            Close
          </AlertDialogCancel>

          <AlertDialogAction className="rounded-none bg-white text-black hover:bg-white/80">
            Got it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
