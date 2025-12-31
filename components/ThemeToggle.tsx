"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "lemon" ? "light" : "lemon");
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        aria-label="Toggle theme"
        className={cn("text-xl", className)}
        size="icon"
        variant="ghost"
      >
        <span className="opacity-50">🍋</span>
      </Button>
    );
  }

  return (
    <Button
      className={cn("text-xl", className)}
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
      aria-label={
        theme === "lemon" ? "Switch to default theme" : "Switch to lemon theme"
      }
    >
      <span className={theme === "lemon" ? "opacity-100" : "opacity-50"}>
        🍋
      </span>
    </Button>
  );
}
