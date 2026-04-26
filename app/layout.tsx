import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap", // ← fixes font-display warning
});

export const metadata: Metadata = {
  title: "AIT Cycling Club",
  description: "Nothing compares the simple pleasure of a bike ride",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to CDN for faster font loading */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* Load only the FA icons you need instead of the full 300KB CSS */}
        {/* If you only use solid + brands icons, load just those */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css"
        />
      </head>
      <body className={barlow.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}