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
  live?: string;
  code?: string;
};

export function AlertDialogBasic({ title, desc }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="block rounded-none border border-white/80 bg-white/80 text-xs text-black hover:bg-white/10 lg:hidden">
          Details
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-none border border-white/10 bg-zinc-900 text-white">
        <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
        <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
        <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
        <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription className="text-zinc-300">
            {desc}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-none border border-white/20 bg-white/5 text-white">
            Close
          </AlertDialogCancel>

          <AlertDialogAction className="rounded-none bg-white text-black hover:bg-white/80">
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
