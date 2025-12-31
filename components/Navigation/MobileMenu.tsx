"use client";

import Link from "next/link";
import { useEffect } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: "/music" | "/band" | "/media" | "/blog" | "/about";
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        `
          fixed inset-x-0 top-16 bottom-0 z-40 transform transition-all
          duration-200 ease-out
          sm:hidden
        `,
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0",
      )}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          `
            absolute inset-0 bg-background/90 backdrop-blur-sm
            transition-opacity duration-200
          `,
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Menu content */}
      <div className="relative flex flex-col gap-6 overflow-auto p-6">
        <div className="flex flex-col gap-3">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                `
                  block rounded-md px-3 py-2 font-bebas text-2xl text-foreground
                  transition-all duration-200
                  hover:bg-muted hover:text-foreground
                `,
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
              )}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className={cn(
            "flex items-center pl-2 transition-all duration-200",
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
          )}
          style={{
            transitionDelay: isOpen ? `${navigation.length * 50}ms` : "0ms",
          }}
        >
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
