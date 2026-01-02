"use client";

import Link from "next/link";
import { useState } from "react";

import { HamburgerButton } from "@/components/HamburgerButton";
import { MobileMenu } from "@/components/Navigation/MobileMenu";
import { TextScramble } from "@/components/TextScramble";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Music", href: "/music" as const },
  { name: "Band", href: "/band" as const },
  { name: "Media", href: "/media" as const },
  { name: "Blog", href: "/blog" as const },
  { name: "About", href: "/about" as const },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
        sticky top-0 z-50 mx-auto w-full bg-background
        sm:relative sm:container sm:bg-transparent
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
              absolute left-0 flex items-center
              sm:hidden
            `}
          >
            <button
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                `
                  inline-flex items-center justify-center rounded-md p-2
                  text-gray-400
                  hover:bg-gray-700 hover:text-white
                  focus:ring-0 focus:outline-none
                `,
              )}
            >
              <HamburgerButton isOpen={isOpen} />
            </button>
          </div>

          {/* Mobile menu overlay */}
          <MobileMenu
            isOpen={isOpen}
            navigation={navigation}
            onClose={() => setIsOpen(false)}
          />

          <div
            className={`
              flex flex-1 items-center justify-center
              sm:flex-col sm:items-stretch sm:justify-between
            `}
          >
            <div className="flex items-center justify-center">
              <span
                className={`
                  font-bauhaus text-3xl font-bold
                  sm:text-6xl sm:font-normal sm:text-dark-copy
                `}
              >
                <Link href="/">
                  <TextScramble
                    delay={2000}
                    duration={2000}
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
                sm:flex sm:items-center sm:justify-center
              `}
            >
              {/* Left spacer to balance the toggle button width */}
              <div aria-hidden="true" className="w-10" />
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
                        href={item.href}
                        className={cn(
                          `
                            rounded-md px-3 pt-1.5 pb-1
                            hover:bg-muted hover:text-foreground
                          `,
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <ThemeToggle className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
