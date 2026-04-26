"use client";
import Image from "next/image";
import { useState } from "react";

const tours = [
  {
    id: "01",
    title: "Lohagad Fort",
    subtitle: "Hill Climb · 45km",
    description:
      "A thrilling ascent through dense forest roads leading to one of Maharashtra's most iconic forts. The descent is pure adrenaline.",
    img: "/images/image7.jpg",
    tag: "Most Popular",
  },
  {
    id: "03",
    title: "Sahyadri Trails",
    subtitle: "Mountain · 60km",
    description:
      "The Western Ghats at their raw best. Unpaved paths, dramatic valley views, and the kind of silence that only mountains offer.",
    img: "/images/image9.jpg",
    tag: "Advanced",
  },
  {
    id: "04",
    title: "Night Ride",
    subtitle: "City Loop · 25km",
    description:
      "AIT to the city and back under the stars. Neon-lit roads, empty streets, and a group of riders who live for the night.",
    img: "/images/image3.jpg",
    tag: "Night Special",
  },
];

export default function FeaturedTours() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-2 md:px-16 bg-white overflow-hidden">
      <style>{`
        @media (min-width: 1051px) {
          .tour-mobile { display: none; }
          .tour-desktop { display: flex; }
        }
        @media (max-width: 1050px) {
          .tour-mobile { display: flex; }
          .tour-desktop { display: none; }
        }

        .tour-expand-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tour-expand-content.open {
          grid-template-rows: 1fr;
        }
        .tour-expand-inner {
          overflow: hidden;
        }

        .tour-mobile-header {
          transition: background-color 0.3s ease;
        }

        .tour-img-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tour-img-wrapper.open {
          max-height: 220px;
        }
      `}</style>

      {/* Heading */}
      <div className="mb-16 px-2 md:px-0">
        <p className="text-red-600 text-sm uppercase tracking-widest font-bold mb-3">
          — Where We Go
        </p>
        <h2
          className="font-black leading-none tracking-tighter text-black"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          Featured{" "}
          <span className="text-red-600">Tours</span>
        </h2>
        <p className="text-gray-400 mt-4 text-base font-light max-w-lg">
          Our trips are as unforgettable as the college that made us. Every route hand-picked
          by riders, for riders.
        </p>
      </div>

      {/* Tours list */}
      <div className="flex flex-col gap-0 border-t border-gray-200">
        {tours.map((tour, i) => (
          <div key={i}>

            {/* ── MOBILE LAYOUT (≤1050px) ── */}
            <div
              className="tour-mobile flex-col border-b border-gray-200 cursor-pointer overflow-hidden"
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Header row */}
              <div
                className={`tour-mobile-header flex items-center gap-4 px-3 py-6 ${
                  active === i ? "bg-black" : "bg-white"
                }`}
              >
                <span
                  className={`font-black text-4xl leading-none transition-colors duration-300 ${
                    active === i ? "text-red-600" : "text-gray-100"
                  }`}
                >
                  {tour.id}
                </span>
                <div className="flex-1">
                  <h3
                    className={`font-black text-xl tracking-tight transition-colors duration-300 ${
                      active === i ? "text-white" : "text-black"
                    }`}
                  >
                    {tour.title}
                  </h3>
                  <p
                    className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                      active === i ? "text-red-400" : "text-gray-400"
                    }`}
                  >
                    {tour.subtitle}
                  </p>
                </div>
                {/* Arrow indicator */}
                <span
                  className={`text-xl font-black transition-all duration-300 ${
                    active === i ? "text-red-500 rotate-90" : "text-gray-300 rotate-0"
                  }`}
                >
                  →
                </span>
              </div>

              {/* Smooth expand: description */}
              <div className={`tour-expand-content ${active === i ? "open" : ""}`}>
                <div className="tour-expand-inner">
                  <div className={`transition-colors duration-300 px-4 pt-4 pb-3 ${active === i ? "bg-black" : "bg-white"}`}>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        active === i ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {tour.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Smooth expand: image */}
              <div className={`tour-img-wrapper ${active === i ? "open" : ""}`}>
                <div
                  className={`relative w-full transition-colors duration-300 ${active === i ? "bg-black" : "bg-white"}`}
                  style={{ height: "220px" }}
                >
                  <Image
                    src={tour.img}
                    alt={tour.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      active === i ? "scale-105 opacity-100" : "scale-100 opacity-60"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      active === i ? "bg-black/10" : "bg-black/40"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* ── DESKTOP LAYOUT (>1050px) ── */}
            <div
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`tour-desktop flex-row items-stretch border-b border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden ${
                active === i ? "bg-black" : "bg-white"
              }`}
            >
              {/* Number + title */}
              <div className="flex items-center gap-10 px-6 py-8 w-1/2">
                <span
                  className={`font-black text-6xl transition-colors duration-300 leading-none ${
                    active === i ? "text-red-600" : "text-gray-100"
                  }`}
                >
                  {tour.id}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className={`font-black text-3xl tracking-tight transition-colors duration-300 ${
                        active === i ? "text-white" : "text-black"
                      }`}
                    >
                      {tour.title}
                    </h3>
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                      {tour.tag}
                    </span>
                  </div>
                  <p
                    className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                      active === i ? "text-red-400" : "text-gray-400"
                    }`}
                  >
                    {tour.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div
                className={`overflow-hidden transition-all duration-500 w-1/3 flex items-center px-6 ${
                  active === i ? "max-h-40 opacity-100 py-4" : "max-h-full opacity-100 py-8"
                }`}
              >
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    active === i ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {tour.description}
                </p>
              </div>

              {/* Image thumbnail */}
              <div className="relative flex-shrink-0 w-48 overflow-hidden">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    active === i ? "scale-110 opacity-100" : "opacity-60"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    active === i ? "bg-black/10" : "bg-black/30"
                  }`}
                />
              </div>

              {/* Arrow */}
              <div className="flex items-center px-6">
                <span
                  className={`text-2xl font-black transition-all duration-300 ${
                    active === i ? "text-red-500 translate-x-2" : "text-gray-200 translate-x-0"
                  }`}
                >
                  →
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}