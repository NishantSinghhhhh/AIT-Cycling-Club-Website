"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    bg: "/images/image1.jpg",
    tag: "Mountain Trails",
    heading: ["Nothing", "Compares"],
    sub: "The simple pleasure of a bike ride",
  },
  {
    bg: "/images/image6.jpg",
    tag: "Canyon Routes",
    heading: ["Ride", "Further"],
    sub: "Push your limits on every trail",
  },
  {
    bg: "/images/image2.jpg",
    tag: "Dawn Patrol",
    heading: ["Feel", "The Road"],
    sub: "Where the journey becomes the destination",
  },
  {
    bg: "/images/image5.jpg",
    tag: "Sahyadri Climbs",
    heading: ["Born", "To Ride"],
    sub: "AIT Cycling Club — Est. on campus",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [textVisible, setTextVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTextVisible(false);
      setPrev(current);
      setProgress(0);

      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => {
          setTextVisible(true);
          setAnimating(false);
          setPrev(null);
        }, 100);
      }, 600);
    },
    [animating, current]
  );

  const goNext = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1, "prev");
  }, [current, goTo]);

  // Auto-advance with progress bar
  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        goNext();
        elapsed = 0;
      }
    }, interval);

    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Outgoing slide (prev) ── */}
      {prevSlide && (
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${prevSlide.bg})`,
            animation: `slideOut${direction === "next" ? "Left" : "Right"} 0.6s ease-in-out forwards`,
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
      )}

      {/* ── Incoming slide (current) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center z-20"
        style={{
          backgroundImage: `url(${slide.bg})`,
          animation: prevSlide
            ? `slideIn${direction === "next" ? "Right" : "Left"} 0.6s ease-in-out forwards`
            : undefined,
        }}
      >
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Diagonal red accent bar ── */}
      <div
        className="absolute left-0 top-0 h-full w-1.5 bg-red-600 z-30"
        style={{ boxShadow: "0 0 20px rgba(220,38,38,0.6)" }}
      />

      {/* ── Main text block ── */}
      <div className="absolute z-30 bottom-[18%] left-[6%] md:left-[8%] max-w-3xl">
        {/* Tag pill */}
        <div
          className="inline-flex items-center gap-2 mb-6 overflow-hidden"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
        >
          <span className="w-6 h-px bg-red-500" />
          <span className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold">
            {slide.tag}
          </span>
        </div>

        {/* Big heading — each word animates independently */}
        <div className="overflow-hidden">
          {slide.heading.map((word, i) => (
            <div key={`${current}-${i}`} className="overflow-hidden">
              <h1
                className="font-black text-white leading-[0.9] tracking-tighter block"
                style={{
                  fontSize: "clamp(4rem, 11vw, 10rem)",
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(100%)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
                }}
              >
                {i === 1 ? (
                  <>
                    {word.slice(0, -2)}
                    <span className="text-red-600">{word.slice(-2)}</span>
                  </>
                ) : (
                  word
                )}
              </h1>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p
          className="text-gray-300 mt-4 text-base md:text-lg font-light tracking-wide max-w-md"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
          }}
        >
          {slide.sub}
        </p>

        {/* CTA */}
        <div
          className="mt-8 flex items-center gap-6"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          <button className="group relative px-8 py-3 bg-red-600 text-white text-sm font-bold uppercase tracking-widest overflow-hidden hover:bg-red-700 transition-colors duration-300">
            <span className="relative z-10">Join The Ride</span>
          </button>
          <button className="text-white text-sm font-semibold uppercase tracking-widest border-b border-white/30 hover:border-red-500 hover:text-red-400 transition-all duration-300 pb-0.5">
            View Trips →
          </button>
        </div>
      </div>

      {/* ── Slide counter (top right) ── */}
      <div className="absolute top-8 right-8 z-30 flex items-center gap-3">
        <span className="text-white font-black text-4xl leading-none">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-1">
          <div className="w-12 h-px bg-white/20" />
          <div
            className="h-px bg-red-600 transition-all duration-75"
            style={{ width: `${(progress / 100) * 48}px` }}
          />
        </div>
        <span className="text-white/40 font-light text-lg">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Vertical slide thumbnails (right side) ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className="relative overflow-hidden transition-all duration-300"
            style={{
              width: i === current ? "60px" : "48px",
              height: i === current ? "80px" : "48px",
              outline: i === current ? "2px solid #dc2626" : "1px solid rgba(255,255,255,0.2)",
              outlineOffset: "2px",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
              style={{ backgroundImage: `url(${s.bg})` }}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                i === current ? "bg-black/0" : "bg-black/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Prev / Next buttons ── */}
      <div className="absolute bottom-8 left-[6%] md:left-[8%] z-30 flex gap-3">
        <button
          onClick={goPrev}
          className="w-12 h-12 border border-white/30 text-white hover:border-red-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-lg"
        >
          ←
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 border border-white/30 text-white hover:border-red-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-lg"
        >
          →
        </button>
      </div>

      {/* ── Bottom dots ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-10 bg-red-600" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ── CSS Keyframes injected ── */}
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to   { transform: translateX(-8%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to   { transform: translateX(8%); opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(6%); opacity: 0; }
          to   { transform: translateX(0);  opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-6%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
      `}</style>
    </section>
  );
}