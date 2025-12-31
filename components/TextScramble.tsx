"use client";

import React, { useEffect, useState } from "react";

interface TextScrambleProps {
  initial: string;
  target: string;
}

const chars =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

export function TextScramble({ initial, target }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(initial);

  useEffect(() => {
    const duration = 3000; // 2 seconds
    const steps = 10;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;

      if (currentStep >= steps) {
        setDisplayText(target);
        clearInterval(interval);
        return;
      }

      const progress = currentStep / steps;
      const newText = target
        .split("")
        .map((char) => {
          if (Math.random() < progress) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(newText);
    }, stepDuration);

    return () => {
      clearInterval(interval);
    };
  }, [target]);

  return <React.Fragment>{displayText}</React.Fragment>;
}
