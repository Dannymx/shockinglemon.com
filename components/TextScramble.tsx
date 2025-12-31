"use client";

import { useEffect, useState } from "react";

interface TextScrambleProps {
  initial: string;
  target: string;
  /** How long to show the initial text before morphing starts (ms) */
  delay?: number;
  /** How long the morph transition takes (ms) */
  duration?: number;
}

export function TextScramble({
  initial,
  target,
  delay = 2500,
  duration = 2000,
}: TextScrambleProps) {
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioned(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="relative inline-block">
      {/* Japanese text - starts visible and focused, blurs and fades out */}
      <span
        className="transition-all ease-out"
        style={{
          transitionDuration: `${duration}ms`,
          opacity: isTransitioned ? 0 : 1,
          filter: isTransitioned ? "blur(12px)" : "blur(0px)",
        }}
      >
        {initial}
      </span>

      {/* English text - starts blurred and invisible, sharpens and fades in */}
      <span
        className="absolute inset-0 text-center transition-all ease-out"
        style={{
          transitionDuration: `${duration}ms`,
          opacity: isTransitioned ? 1 : 0,
          filter: isTransitioned ? "blur(0px)" : "blur(12px)",
        }}
      >
        {target}
      </span>
    </span>
  );
}
