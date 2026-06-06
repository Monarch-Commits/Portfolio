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

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type Props = {
  title: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
};

export function AlertDialogBasic({ title, desc }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="z-100 rounded-none border border-white/80 bg-white/80 text-xs text-black hover:bg-white/10">
          Details
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="z-100 w-[95vw] max-w-3xl rounded-none border border-white/10 bg-zinc-950 text-white">
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

        {/* BODY */}
        <div className="mt-4 max-h-[75vh] space-y-4 overflow-y-auto pr-2">
          {/* PROBLEM */}
          <div className="border border-red-500/10 bg-red-500/5 p-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-red-400 uppercase">
              Problem
            </p>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>

          {/* SOLUTION */}
          <div className="border border-blue-500/10 bg-blue-500/5 p-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Solution
            </p>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>

          {/* RESULT */}
          <div className="border border-green-500/10 bg-green-500/5 p-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-green-400 uppercase">
              Result
            </p>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        </div>

        <AlertDialogFooter className="mt-5">
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
