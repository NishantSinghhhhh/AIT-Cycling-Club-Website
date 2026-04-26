"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Joining AIT Cycling Club was the best decision I made in college. The rides, the people, the routes — everything is next level. Nothing beats that Saturday morning climb with the whole crew.",
    name: "Rahul Deshmukh",
    role: "3rd Year, Mechanical Engineering",
    avatar: "/images/professional-cyclist-woman.jpg",
  },
  {
    quote:
      "I'd never ridden more than 10km before joining. Within three months the club had me doing 60km Sahyadri trails. The community here pushes you in the best way possible.",
    name: "Priya Sharma",
    role: "2nd Year, Computer Engineering",
    avatar: "/images/image2.jpg",
  },
  {
    quote:
      "The Lohagad trip was a turning point for me. We started at 4am, hit the fort at sunrise, and I knew right then — this club is something special. Pure freedom.",
    name: "Arjun Patil",
    role: "4th Year, Civil Engineering",
    avatar: "/images/image3.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="w-full bg-black py-24 px-6 md:px-16 overflow-hidden relative">
      {/* Big background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white/[0.03] leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
      >
        RIDERS
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4 relative z-10">
        <div>
          <p className="text-red-600 text-sm uppercase tracking-widest font-bold mb-3">
            — Community Voices
          </p>
          <h2
            className="font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            <span className="text-white">What </span>
            <span className="text-red-600">People </span>
            <span className="text-white">Say</span>
          </h2>
        </div>

        {/* Nav buttons */}
        <div className="flex gap-3 md:mb-4">
          <button
            onClick={prev}
            className="w-12 h-12 border border-gray-700 text-white hover:border-red-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-lg"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-gray-700 text-white hover:border-red-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonial card */}
      <div className="relative z-10 border border-gray-800 p-8 md:p-14 max-w-4xl">
        {/* Quote mark */}
        <div className="text-red-600 font-black leading-none mb-8" style={{ fontSize: "6rem" }}>
          "
        </div>

        <p className="text-white font-light leading-relaxed mb-10"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
          {t.quote}
        </p>

        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-red-600">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${t.avatar})` }}
            />
          </div>
          <div>
            <p className="text-white font-bold text-lg">{t.name}</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest">{t.role}</p>
          </div>

          {/* Dots */}
          <div className="ml-auto flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300
                  ${i === current ? "w-8 bg-red-600" : "w-2 bg-gray-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}