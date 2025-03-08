"use client";

import { useState, useEffect } from "react";

const TypingAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Iniciar la animación después del retraso especificado
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Animación de tipado
  useEffect(() => {
    if (startTyping && index < text.length) {
      const char = text[index];
      const charDelay = char === " " ? 200 : 50; // Pausa de 200ms entre palabras, 50ms por carácter
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + char);
        setIndex((prev) => prev + 1);
      }, charDelay);
      return () => clearTimeout(timeout);
    }
  }, [startTyping, index, text]);

  return (
    <span>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingAnimation;

