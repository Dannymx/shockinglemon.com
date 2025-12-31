"use client";

import Link from "next/link";
import { useState } from "react";

import { HamburgerButton } from "@/components/HamburgerButton";
import { TextScramble } from "@/components/TextScramble";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Music", href: "/music" },
  { name: "Band", href: "/band" },
  { name: "Media", href: "/media" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
        mx-auto w-full bg-gray-800
        sm:container sm:bg-transparent
      `}
    >
      <div
        className={`
          mx-auto px-2
          sm:px-6
          lg:px-8
        `}
      >
        <div
          className={`
            relative flex h-16 items-center justify-between
            sm:h-auto
          `}
        >
          {/* Mobile menu button */}
          <div
            className={`
              absolute inset-y-0 left-0 flex items-center
              sm:hidden
            `}
          >
            <Popover onOpenChange={setIsOpen} open={isOpen}>
              <PopoverTrigger
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  `
                    inline-flex items-center justify-center rounded-md p-2
                    text-gray-400
                    hover:bg-gray-700 hover:text-white
                    focus:ring-2 focus:ring-white focus:outline-none
                    focus:ring-inset
                  `,
                )}
              >
                <HamburgerButton isOpen={isOpen} />
              </PopoverTrigger>
              <PopoverContent
                align="start"
                side="bottom"
                className={`
                  h-(--radix-popper-available-height)
                  w-(--radix-popper-available-width) overflow-y-auto
                  rounded-none border-none bg-background/90 p-0 shadow-none
                  backdrop-blur-sm
                  data-[side=bottom]:slide-in-from-top-2
                  data-[state=closed]:animate-out data-[state=closed]:fade-out-0
                  data-[state=closed]:zoom-out-95
                  data-[state=open]:animate-in data-[state=open]:fade-in-0
                  data-[state=open]:zoom-in-95
                `}
              >
                <div className="flex flex-col gap-12 overflow-auto p-6">
                  <div className="flex flex-col gap-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block rounded-md px-3 py-2 font-bebas text-2xl
                          text-foreground
                          hover:bg-muted hover:text-foreground
                        `}
                        href={
                          item.href as
                            | "/music"
                            | "/band"
                            | "/media"
                            | "/blog"
                            | "/about"
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center justify-center border-t pt-6">
                    <ThemeToggle />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div
            className={`
              flex flex-1 items-center justify-center
              sm:flex-col sm:items-stretch sm:justify-between
            `}
          >
            <div className="flex items-center justify-center">
              <span
                className={`
                  font-bauhaus text-2xl font-bold text-light-copy
                  sm:text-6xl sm:font-normal sm:text-dark-copy
                `}
              >
                <Link href="/">
                  <TextScramble
                    initial="ショッキングレモン"
                    target="Shocking Lemon"
                  />
                </Link>
              </span>
            </div>

            {/* Desktop navigation */}
            <div
              className={`
                mt-4 hidden
                sm:block
              `}
            >
              <div className="relative">
                <NavigationMenu>
                  <NavigationMenuList
                    className={`
                      flex justify-center space-x-4 align-middle font-bebas
                      text-2xl
                    `}
                  >
                    {navigation.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          className={cn(
                            `
                              rounded-md px-3 py-1
                              hover:bg-muted hover:text-foreground
                            `,
                          )}
                          href={
                            item.href as
                              | "/music"
                              | "/band"
                              | "/media"
                              | "/blog"
                              | "/about"
                          }
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                {/* Theme toggle - top right */}
                <div className="absolute top-0 right-0">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
