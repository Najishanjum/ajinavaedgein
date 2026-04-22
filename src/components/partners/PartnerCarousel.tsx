import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, RotateCw } from "lucide-react";
import { partners } from "@/lib/site-data";

export function PartnerCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const total = partners.length;

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    dragStart.current = null;
    setTimeout(() => setPaused(false), 1500);
  };

  const getOffset = (i: number) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* radial glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#22d3ee33,transparent_60%)] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#d4a85822,transparent_70%)] blur-3xl" />
      </div>

      {/* stage */}
      <div
        className="relative mx-auto h-[440px] sm:h-[520px] w-full max-w-5xl"
        style={{ perspective: "1600px" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {partners.map((p, i) => {
          const o = getOffset(i);
          const abs = Math.abs(o);
          const isActive = o === 0;
          const visible = abs <= 2;

          const translateX = o * 220;
          const rotateY = o * -22;
          const scale = isActive ? 1 : abs === 1 ? 0.78 : 0.6;
          const blur = isActive ? 0 : abs === 1 ? 4 : 8;
          const opacity = visible ? (isActive ? 1 : abs === 1 ? 0.75 : 0.35) : 0;
          const z = 100 - abs;

          return (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={p.name}
              className="absolute left-1/2 top-1/2 h-[360px] w-[280px] sm:h-[440px] sm:w-[340px] -ml-[140px] -mt-[180px] sm:-ml-[170px] sm:-mt-[220px] rounded-[28px] outline-none transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translate3d(${translateX}px,0,0) rotateY(${rotateY}deg) scale(${scale})`,
                filter: `blur(${blur}px)`,
                opacity,
                zIndex: z,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <div
                className="group relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-1"
              >
                {/* gradient overlay (gold → black) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a85833] via-transparent to-black/70" />
                {/* glow ring on active */}
                {isActive && (
                  <div className="pointer-events-none absolute -inset-[2px] rounded-[28px] bg-[conic-gradient(from_0deg,#22d3ee,#d4a858,#22d3ee)] opacity-60 blur-md animate-pulse-glow" />
                )}
                <div className="relative h-full w-full p-3 flex flex-col">
                  <div className="flex-1 rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={p.logo}
                      alt={`${p.name} poster`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center px-2">
                    <div className="font-display font-bold text-sm sm:text-base text-white drop-shadow">
                      {p.name}
                    </div>
                    <div className="text-[11px] text-white/70 mt-0.5 line-clamp-1">{p.role}</div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass border border-white/15 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all shadow-glow"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass border border-white/15 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all shadow-glow"
      >
        <ChevronRight size={22} />
      </button>

      {/* circular controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Undo"
          className="h-10 w-10 rounded-full border border-white/15 glass flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <RotateCcw size={16} />
        </button>

        {/* pill indicators */}
        <div className="flex items-center gap-2">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-8 bg-gradient-edge shadow-glow"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Redo"
          className="h-10 w-10 rounded-full border border-white/15 glass flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <RotateCw size={16} />
        </button>
      </div>
    </div>
  );
}
