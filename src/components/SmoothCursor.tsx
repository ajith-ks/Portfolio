"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Arrow stroke: a thick outline (light: white, dark: black) behind a thin
// filled stroke (light: black, dark: white). Glows softly in dark mode.
const ARROW = (
  <>
    <path
      d="M6 12h13M13 5l7 7-7 7"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-black"
    />
    <path
      d="M6 12h13M13 5l7 7-7 7"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-white"
    />
  </>
);

const HEAD = { stiffness: 260, damping: 30, mass: 0.5 };
const TRAIL = [
  { stiffness: 120, damping: 30, mass: 0.8 },
  { stiffness: 60, damping: 32, mass: 1.1 },
  { stiffness: 32, damping: 34, mass: 1.4 },
];
const DOT = [5, 3.5, 2.5];

export function SmoothCursor() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, HEAD);
  const sy = useSpring(y, HEAD);
  const tx = TRAIL.map((c) => useSpring(x, c));
  const ty = TRAIL.map((c) => useSpring(y, c));
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0);

  const lastAngle = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);

  // Rotate toward direction of travel. Unwrap the angle so the arrow never
  // spins around the 0/360 seam; derived from motion values -> no re-render.
  const rotate = useTransform([sx, sy], ([px, py]: number[]) => {
    const dx = px - lastX.current;
    const dy = py - lastY.current;
    if (Math.hypot(dx, dy) > 0.3) {
      let a = Math.atan2(dy, dx);
      while (a - lastAngle.current > Math.PI) a -= Math.PI * 2;
      while (a - lastAngle.current < -Math.PI) a += Math.PI * 2;
      lastAngle.current = a;
      lastX.current = px;
      lastY.current = py;
    }
    return lastAngle.current * (180 / Math.PI);
  });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const hover = window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || !hover || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      // Scale up over interactive elements; hide native cursor
      const interactive =
        !!el &&
        !!el.closest &&
        !!el.closest("a, button, [role='button'], label");
      // Over form fields and open dialogs: restore native cursor
      const field =
        !!el &&
        !!el.closest &&
        !!el.closest("input, textarea, select, [contenteditable]");
      const dialogOpen = !!document.querySelector("dialog[open]");
      const hide = field || dialogOpen;
      scale.set(hide ? 1 : interactive ? 1.35 : 1);
      opacity.set(hide ? 0 : 1);
      document.documentElement.classList.toggle("custom-cursor", !hide);
    };
    const onLeave = () => {
      opacity.set(0);
      document.documentElement.classList.remove("custom-cursor");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: sx, y: sy, opacity }}
      aria-hidden
    >
      <motion.div
        style={{ rotate, scale, transformOrigin: "center" }}
        className="-translate-x-1/2 -translate-y-1/2 text-foreground dark:drop-shadow-[0_0_7px_rgba(16,185,129,0.55)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          {ARROW}
        </svg>
      </motion.div>
      {TRAIL.map((_, i) => (
        <motion.div
          key={i}
          style={{
            x: tx[i],
            y: ty[i],
            scale: 1 - i * 0.22,
            opacity: 0.55 - i * 0.18,
            width: DOT[i],
            height: DOT[i],
            transformOrigin: "center",
          }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground dark:bg-emerald-300/80"
        />
      ))}
    </motion.div>
  );
}