import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <Image
          src="/images/image2.jpg"
          alt="Cycling"
          width={600}
          height={450}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* Heading */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pt-10 pb-6 px-4">
        <h1 className="flex items-center gap-2 text-gray-100 font-extrabold text-7xl md:text-8xl">
          ABOUT
          <span className="text-red-600">US</span>
        </h1>

        <p className="text-[#818181] text-lg mt-2">
          <Link href="/" className="hover:text-red-500 text-[#818181]">Home</Link>
          {" / About Us"}
        </p>

        <p className="flex items-start gap-1 mt-8">
          <span className="text-red-600 text-6xl leading-none">&ldquo;</span>
          <span className="text-gray-100 text-2xl md:text-3xl font-medium">
            Nothing Compares to the simple pleasure of a bike ride
          </span>
          <span className="text-red-600 text-6xl leading-none self-end">&rdquo;</span>
        </p>
      </div>
    </section>
  );
}