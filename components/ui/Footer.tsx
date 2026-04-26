"use client";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/club-members", label: "Club Members" },
  { href: "/trips", label: "Trips" },
];

const socials = [
  { icon: "fa-instagram", label: "Instagram", color: "#e4405f", href: "#" },
  { icon: "fa-facebook", label: "Facebook", color: "#3b5998", href: "#" },
  { icon: "fa-linkedin", label: "LinkedIn", color: "#1da1f2", href: "#" },
  { icon: "fa-youtube", label: "YouTube", color: "#ff0000", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black relative overflow-hidden">
      {/* Giant ghost text background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-white/[0.025] leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
      >
        CYCLING
      </div>

      {/* Red top border */}
      <div className="w-full h-0.5 bg-red-600" style={{ boxShadow: "0 0 16px rgba(220,38,38,0.5)" }} />

      {/* Main footer content */}
      <div className="relative z-10 px-8 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-person-biking text-red-600 text-4xl" />
              <span className="font-black text-white text-2xl tracking-tight">
                AIT <span className="text-red-600">CYCLING</span> CLUB
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Born on campus. Built on sweat, elevation, and the kind of mornings most people
              sleep through. Ride with us.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-2">
              {socials.map(({ icon, label, color, href }) => (
                <a
                  key={icon}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/40"
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  <i
                    className={`fa-brands ${icon} text-gray-500 text-sm transition-colors duration-300 group-hover:text-[var(--hover-color)]`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-px bg-red-600" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Navigate
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium w-fit"
              >
                <span className="w-0 group-hover:w-4 h-px bg-red-600 transition-all duration-300" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact / CTA */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-px bg-red-600" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Get In Touch
              </span>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Interested in joining? Show up at the next ride or reach out on Instagram.
            </p>
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 mt-2 w-fit"
            >
              <span className="px-6 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors duration-300">
                Join The Club
              </span>
            </a>

            {/* Location tag */}
            <div className="flex items-center gap-2 mt-4">
              <i className="fa-solid fa-location-dot text-red-600 text-xs" />
              <span className="text-gray-600 text-xs uppercase tracking-widest">
                AIT Campus, Pune
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-gray-700 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} AIT Cycling Club — All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-gray-700 text-xs uppercase tracking-widest">
              Rides Every Weekend
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}