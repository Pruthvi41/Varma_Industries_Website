import { useEffect, useRef, useState } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades and slides headings, paragraphs and grid items into view as they scroll on screen. */
export function useScrollReveal() {
  useEffect(() => {
    if (reduced()) return;
    const sections = document.querySelectorAll("section:not(#home)");
    const targets: HTMLElement[] = [];
    sections.forEach((s) => {
      s.querySelectorAll<HTMLElement>("h2, h2 + p, .grid > *").forEach((el) => {
        if (el.closest(".no-reveal")) return;
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 90}ms`;
        el.classList.add("reveal");
        targets.push(el);
      });
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
}

/** Counts a number up from zero once it is on screen. Pass the final value and an optional suffix. */
export function CountUp({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(reduced() ? to : 0);
  useEffect(() => {
    if (reduced() || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString("en-US")}{suffix}</span>;
}

/** Thin orange progress bar at the top of the page showing how far you have scrolled. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}

/** Welding-spark particles drawn on a canvas. Sits behind the hero text. */
export function Sparks() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || reduced()) return;
    const ctx = c.getContext("2d")!;
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      w = c.width = c.offsetWidth;
      h = c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; r: number };
    const ps: P[] = [];
    const spawn = () => {
      const x = w * (0.55 + Math.random() * 0.4);
      const y = h * (0.78 + Math.random() * 0.1);
      const max = 50 + Math.random() * 60;
      ps.push({ x, y, vx: (Math.random() - 0.5) * 2.2, vy: -(1.5 + Math.random() * 3), life: max, max, r: 0.8 + Math.random() * 1.6 });
    };
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      if (document.visibilityState === "visible" && ps.length < (w < 640 ? 35 : 80) && Math.random() < 0.7) spawn();
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.07; p.life--;
        if (p.life <= 0) { ps.splice(i, 1); continue; }
        const a = p.life / p.max;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,${Math.round(120 + 100 * a)},40,${a})`;
        ctx.shadowColor = "rgba(255,140,30,0.9)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}

/** Moves the element's background slower than the page scroll. */
export function useParallax(ref: React.RefObject<HTMLElement | null>, speed = 0.25) {
  useEffect(() => {
    if (reduced()) return;
    const onScroll = () => {
      if (ref.current && window.scrollY < window.innerHeight * 1.2)
        ref.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, speed]);
}
