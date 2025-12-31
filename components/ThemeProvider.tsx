"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="light"
      themes={["light", "lemon"]}
    >
      {children}
    </NextThemesProvider>
  );
}
