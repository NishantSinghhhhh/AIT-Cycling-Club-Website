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
    id: "02",
    title: "Pune Outskirts",
    subtitle: "Dawn Patrol · 30km",
    description:
      "Beat the city traffic and ride through misty morning highways as the sun breaks the horizon. A ritual for the serious rider.",
    img: "/images/image8.jpg",
    tag: "Beginner Friendly",
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

      <div className="flex flex-col gap-0 border-t border-gray-200">
        {tours.map((tour, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`group flex flex-col md:flex-row items-stretch border-b border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden
              ${active === i ? "bg-black" : "bg-white"}`}
          >
            <div className="flex items-center gap-4 md:gap-10 px-3 md:px-6 py-8 md:w-1/2">
              <span
                className={`font-black text-4xl md:text-6xl transition-colors duration-300 leading-none
                  ${active === i ? "text-red-600" : "text-gray-100"}`}
              >
                {tour.id}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className={`font-black text-xl md:text-3xl tracking-tight transition-colors duration-300
                      ${active === i ? "text-white" : "text-black"}`}
                  >
                    {tour.title}
                  </h3>
                  <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide hidden md:inline">
                    {tour.tag}
                  </span>
                </div>
                <p
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300
                    ${active === i ? "text-red-400" : "text-gray-400"}`}
                >
                  {tour.subtitle}
                </p>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 md:w-1/3 flex items-center px-3 md:px-6
                ${active === i ? "max-h-40 opacity-100 py-4" : "max-h-0 md:max-h-full opacity-0 md:opacity-100 py-0 md:py-8"}`}
            >
              <p className={`text-sm leading-relaxed transition-colors duration-300
                ${active === i ? "text-gray-300" : "text-gray-500"}`}>
                {tour.description}
              </p>
            </div>

            <div
              className={`relative flex-shrink-0 md:w-48 transition-all duration-500 overflow-hidden
                ${active === i ? "h-40 md:h-auto opacity-100" : "h-0 md:h-auto opacity-60"}`}
            >
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="hidden md:flex items-center px-6">
              <span
                className={`text-2xl font-black transition-all duration-300
                  ${active === i ? "text-red-500 translate-x-2" : "text-gray-200 translate-x-0"}`}
              >
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}