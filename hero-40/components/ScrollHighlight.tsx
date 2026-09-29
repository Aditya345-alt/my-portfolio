"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SplitBy = "characters" | "words";
type ScrollPosition =
  | "top top" | "top center" | "top bottom"
  | "center top" | "center center" | "center bottom"
  | "bottom top" | "bottom center" | "bottom bottom";

type ScrollHighlightProps = {
  text: string;
  font?: React.CSSProperties;
  dimColor?: string;
  highlightColor?: string;
  splitBy?: SplitBy;
  scrollStart?: ScrollPosition;
  scrollEnd?: ScrollPosition;
  scrub?: boolean;
  className?: string;
};

export default function ScrollHighlight({
  text,
  font,
  dimColor = "rgba(87, 36, 156, 0.14)",
  highlightColor = "#57249c",
  splitBy = "words",
  scrollStart = "top center",
  scrollEnd = "bottom center",
  scrub = true,
  className,
}: ScrollHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const chars = Array.from(text);
  const stagger = splitBy === "characters" ? 0.03 : 0.1;

  useEffect(() => {
    const paragraph = containerRef.current;
    if (!paragraph) return;
    const targets = paragraph.querySelectorAll(splitBy === "characters" ? ".char" : ".word");
    const ctx = gsap.context(() => {
      gsap.set(targets, { color: dimColor });
      gsap.to(targets, {
        color: highlightColor,
        stagger,
        ease: "none",
        scrollTrigger: {
          trigger: paragraph,
          start: scrollStart,
          end: scrollEnd,
          scrub,
        },
      });
    }, paragraph);
    return () => ctx.revert();
  }, [text, dimColor, highlightColor, splitBy, stagger, scrollStart, scrollEnd, scrub]);

  return (
    <p ref={containerRef} className={className} style={{ margin: 0, whiteSpace: "pre-wrap", color: dimColor, ...font }}>
      {splitBy === "characters"
        ? chars.map((char, index) => (
            <span key={`${char}-${index}`} className="char" style={{ display: "inline-block", color: dimColor }}>
              {char === " " ? "\u00a0" : char}
            </span>
          ))
        : words.map((word, index) => (
            <React.Fragment key={`${word}-${index}`}>
              <span className="word" style={{ display: "inline-block", color: dimColor }}>{word}</span>
              {index < words.length - 1 ? " " : null}
            </React.Fragment>
          ))}
    </p>
  );
}
