"use client";

const stats = [
  { value: "80+", label: "World Class Cycles", img: "/images/image5.jpg" },
  { value: "200+", label: "Members & Riders", img: "/images/image4.jpg" },
  { value: "50+", label: "Trips Completed", img: "/images/image6.jpg" },
  { value: "5★", label: "Rider Experience", img: "/images/ryan-stone-H-HV5-KI_UM-unsplash.jpg" },
  { value: "12+", label: "Routes Mapped", img: "/images/beautiful-shot-cyclers-mountain-with-cloudy-skies-background.jpg" },
  { value: "3+", label: "Years Strong", img: "/images/taneli-lahtinen-aft9VFtQx38-unsplash.jpg" },
];

export default function Credentials() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
        <h2
          className="font-black leading-none tracking-tighter text-white"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          Cred
          <span className="text-red-600">entials</span>
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold max-w-xs md:mb-4">
          Numbers that speak louder than words
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-800">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative overflow-hidden group cursor-pointer bg-black"
            style={{ height: "280px" }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${stat.img})` }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              {/* Red accent line animates on hover */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-red-600 mb-3 transition-all duration-500" />
              <span
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-gray-300 text-sm uppercase tracking-widest mt-1 font-semibold">
                {stat.label}
              </span>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}