"use client";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    img: "/images/image1.jpg",
    title: "Mountain Rides",
    text: "Conquer steep terrain and breathe in views that reset your entire perspective on the world.",
  },
  {
    img: "/images/image4.jpg",
    title: "Trail Blazing",
    text: "Early morning light, open roads, and nothing but your wheels cutting through the wilderness.",
  },
  {
    img: "/images/image6.jpg",
    title: "Canyon Routes",
    text: "Sunsets over dramatic landscapes — every ride becomes a memory you'll never stop talking about.",
  },
];

export default function AboutSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-2 md:px-16 bg-white overflow-hidden">
      <div className="flex items-end gap-6 mb-16 px-2 md:px-0">
        <h2
          className="font-black leading-none tracking-tighter text-black"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          About
        </h2>
        <div className="mb-4 hidden md:block">
          <div className="w-24 h-1 bg-red-600 mb-2" />
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
            Who We Are
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start px-2 md:px-0">
        {/* Left — image + overlay text */}
        <div className="relative w-full lg:w-[45%] group cursor-pointer flex-shrink-0">
          <div className="relative overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/images/image6.jpg"
              alt="AIT Cycling Club"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600 z-10" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-20 flex items-center justify-center">
              <p className="text-white text-base leading-relaxed px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light">
                AIT Cycling Club was born from a shared love of the open road and the freedom
                two wheels bring. We're a community of passionate riders — from weekend warriors
                to seasoned trail blazers — united by the belief that cycling is more than sport.
                It's a way of life. Join us on our next adventure.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              Est. AIT Campus
            </span>
          </div>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden cursor-pointer group"
              style={{ height: "320px" }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                <div
                  className={`w-6 h-0.5 bg-red-500 mb-2 transition-all duration-300 ${
                    hovered === i ? "w-12" : "w-6"
                  }`}
                />
                <h3 className="text-white font-bold text-lg tracking-wide">{card.title}</h3>
                <p
                  className={`text-gray-300 text-sm leading-relaxed mt-2 transition-all duration-400 overflow-hidden ${
                    hovered === i ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}