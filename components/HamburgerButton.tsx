"use client";

import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
  isOpen: boolean;
}

export function HamburgerButton({ isOpen }: HamburgerButtonProps) {
  return (
    <div className="relative flex h-8 w-4 items-center justify-center">
      <div className="relative size-4">
        <span
          className={cn(
            `
              absolute left-0 block h-0.5 w-4 bg-foreground transition-all
              duration-100
            `,
            isOpen ? "top-[0.4rem] -rotate-45" : "top-1",
          )}
        />
        <span
          className={cn(
            `
              absolute left-0 block h-0.5 w-4 bg-foreground transition-all
              duration-100
            `,
            isOpen ? "top-[0.4rem] rotate-45" : "top-2.5",
          )}
        />
      </div>
      <span className="sr-only">Toggle Menu</span>
    </div>
  );
}
