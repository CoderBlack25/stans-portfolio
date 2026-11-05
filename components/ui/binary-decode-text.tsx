"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const FRAME_COUNT = 24;
const FRAME_DURATION = 35;
const PAUSE_FRAMES = 36;

export function BinaryDecodeText({ text }: { text: string }) {
  const [frame, setFrame] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const visibleCharacters = [...text].filter((character) => character !== " ").length;

  useEffect(() => {
    if (shouldReduceMotion) {
      setFrame(FRAME_COUNT);
      return;
    }

    const timer = window.setInterval(() => {
      setFrame((currentFrame) => {
        return currentFrame >= FRAME_COUNT + PAUSE_FRAMES ? 0 : currentFrame + 1;
      });
    }, FRAME_DURATION);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const resolvedCharacters =
    (Math.min(frame, FRAME_COUNT) / FRAME_COUNT) * visibleCharacters;
  let characterIndex = 0;
  const decodedText = [...text]
    .map((character) => {
      if (character === " ") return character;

      const currentIndex = characterIndex;
      characterIndex += 1;

      if (currentIndex < resolvedCharacters) return character;
      return (currentIndex + frame) % 2 === 0 ? "0" : "1";
    })
    .join("");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{decodedText}</span>
    </>
  );
}
