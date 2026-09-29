"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect zeroes the counter before the first paint so the final value
// never flashes. It is not available while the component is server-rendered.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type CountUpProps = {
  value: number;
  decimals?: number;
  duration?: number;
  delay?: number;
};

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export default function CountUp({
  value,
  decimals = 0,
  duration = 1400,
  delay = 0,
}: CountUpProps) {
  const liveRef = useRef<HTMLSpanElement>(null);
  const finalText = value.toFixed(decimals);

  useIsomorphicLayoutEffect(() => {
    const node = liveRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.textContent = (0).toFixed(decimals);

    let frame = 0;
    let timer = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      node.textContent = (easeOutQuart(progress) * value).toFixed(decimals);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          frame = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      node.textContent = finalText;
    };
  }, [value, decimals, duration, delay, finalText]);

  // The ghost reserves the final width so the suffix never shifts while the
  // digit count grows. The live value is layered on top of it.
  return (
    <span className="metric-count">
      <span className="metric-count-ghost" aria-hidden="true">
        {finalText}
      </span>
      <span className="metric-count-live" ref={liveRef}>
        {finalText}
      </span>
    </span>
  );
}
