"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const FRAME_COUNT = 24;
const FRAME_DURATION = 40;

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface DecryptTextProps {
  text: string;
}

export function DecryptText({ text }: DecryptTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const [frame, setFrame] = useState(FRAME_COUNT);

  // Only letters and numbers participate in the scrambling effect.
  const characters = [...text];

  const animatedCharacters = characters
    .map((character, index) => ({
      character,
      index,
    }))
    .filter(({ character }) => /[a-z0-9]/i.test(character));

  const totalAnimatedCharacters = animatedCharacters.length;

  useEffect(() => {
    if (shouldReduceMotion === null) return;

    // Display the original text immediately when reduced motion is enabled.
    if (shouldReduceMotion) {
      setFrame(FRAME_COUNT);
      return;
    }

    let currentFrame = 0;

    setFrame(0);

    const timer = window.setInterval(() => {
      currentFrame += 1;

      setFrame(currentFrame);

      // Stop once every character has been decrypted.
      if (currentFrame >= FRAME_COUNT) {
        window.clearInterval(timer);
      }
    }, FRAME_DURATION);

    return () => {
      window.clearInterval(timer);
    };
  }, [shouldReduceMotion]);

  // Keep track of the position of each animated character.
  let animatedIndex = 0;

  const decodedText = characters
    .map((character) => {
      // Preserve spaces, punctuation and special characters.
      if (!/[a-z0-9]/i.test(character)) {
        return character;
      }

      const currentIndex = animatedIndex++;

      // Calculate when this particular character should resolve.
      const revealFrame = Math.ceil(
        ((currentIndex + 1) / totalAnimatedCharacters) * FRAME_COUNT,
      );

      // Once its reveal frame is reached, show the original character.
      if (frame >= revealFrame) {
        return character;
      }

      // Generate a random replacement character.
      const randomIndex = Math.floor(Math.random() * GLYPHS.length);

      let randomCharacter = GLYPHS[randomIndex];

      // Preserve the original character's letter casing.
      if (character === character.toLowerCase()) {
        randomCharacter = randomCharacter.toLowerCase();
      }

      return randomCharacter;
    })
    .join("");

  return (
    <span>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {shouldReduceMotion === false ? decodedText : text}
      </span>
    </span>
  );
}
