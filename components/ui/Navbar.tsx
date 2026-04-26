"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/club-members", label: "Club Members" },
  { href: "/trips", label: "Trips" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.92)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav className="w-full px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <i className="fa-solid fa-person-biking text-red-600 text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 block" />
              {/* Glow dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            </div>
            <span className="font-black text-white text-lg md:text-xl tracking-tight">
              AIT{" "}
              <span className="text-red-600">CYCLING</span>{" "}
              <span className="text-white/60 font-light">CLUB</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative group px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 block"
                    style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.55)" }}
                  >
                    {/* Hover / active background pill */}
                    <span
                      className={`absolute inset-0 rounded-sm transition-opacity duration-200
                        ${isActive ? "opacity-100 bg-white/10" : "opacity-0 group-hover:opacity-100 bg-white/5"}`}
                    />
                    {/* Active red underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-red-600 transition-all duration-300
                        ${isActive ? "w-4" : "w-0 group-hover:w-3"}`}
                    />
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* CTA button */}
            <li className="ml-4">
              <Link
                href="/club-members"
                className="px-5 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors duration-300"
              >
                Join Us
              </Link>
            </li>
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 origin-center
                ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300
                ${menuOpen ? "w-0 opacity-0" : "w-4"}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 origin-center
                ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-8 transition-all duration-500 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.97)" }}
      >
        {/* Big ghost text */}
        <div
          className="absolute bottom-8 right-4 font-black text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "30vw" }}
        >
          RIDE
        </div>

        <ul className="flex flex-col gap-2 list-none relative z-10">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-24px)",
                  transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
                }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-4 py-3 group"
                >
                  <span
                    className={`text-xs font-bold transition-colors duration-200
                      ${isActive ? "text-red-600" : "text-white/20"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-black tracking-tighter transition-colors duration-200"
                    style={{
                      fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-red-600 ml-2 animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile socials */}
        <div
          className="flex gap-6 mt-12 relative z-10"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.4s ease 0.35s",
          }}
        >
          {["fa-instagram", "fa-facebook", "fa-linkedin", "fa-youtube"].map((icon) => (
            <i
              key={icon}
              className={`fa-brands ${icon} text-white/30 text-xl hover:text-red-500 transition-colors cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </>
  );
}