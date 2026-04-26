import Image from "next/image";
import Link from "next/link";

export default function TripsHero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <Image
          src="/images/image2.jpg"
          alt="Our Trips"
          width={600}
          height={450}
          className="object-contain w-full h-auto rounded-xl"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 pb-10 md:pt-10">
        <h1 className="flex flex-wrap items-center gap-3 text-black font-extrabold text-6xl md:text-7xl">
          OUR <span className="text-red-600">Trips</span>
        </h1>

        <p className="text-[#818181] text-lg mt-2">
          <Link href="/" className="hover:text-red-500 text-[#818181]">Home</Link>
          {" / Our Trips"}
        </p>

        <p className="flex items-start gap-1 mt-8">
          <span className="text-red-600 text-6xl leading-none">&ldquo;</span>
          <span className="text-black text-xl md:text-2xl font-medium leading-snug">
            Wheel by wheel, we uncover the world&apos;s wonders, fueled by the rhythm of the road
          </span>
          <span className="text-red-600 text-6xl leading-none self-end">&rdquo;</span>
        </p>
      </div>
    </section>
  );
}