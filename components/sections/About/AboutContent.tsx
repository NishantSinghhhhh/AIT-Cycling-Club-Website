import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="w-full bg-[#fcfcfc] flex flex-col md:flex-row py-16 px-[5%] gap-10">
      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-black font-extrabold text-5xl md:text-6xl flex items-center gap-2">
          Yes,{" "}
          <span className="text-red-600 underline decoration-red-600">
            We Can
          </span>{" "}
          Do It!
        </h1>

        <h3 className="text-black font-light text-xl mt-4">
          AIT Cycling Club is here to bring fun in your life
        </h3>

        <p className="text-red-600 text-lg mt-6 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          provident asperiores optio praesentium earum iste magni, fuga
          distinctio minus dicta maiores hic reprehenderit dolore quis quasi
          labore nemo! Eveniet delectus incidunt voluptatem beatae numquam?
        </p>

        <p className="text-black text-lg mt-4 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          nemo aliquam explicabo, quam vel nulla eum nesciunt enim amet eaque
          tempora labore incidunt ut nostrum quisquam nihil voluptatibus harum
          sapiente perferendis! Perspiciatis iure ea cumque nam quasi, nulla
          provident odit.
        </p>
      </div>

      {/* Video Thumbnail */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <Image
          src="/images/image4.jpg"
          alt="Get on, Let's Go"
          width={600}
          height={400}
          className="object-contain w-full h-auto px-8"
        />
        {/* Overlay text */}
        <span className="absolute top-4 left-[12%] text-white font-bold text-2xl md:text-3xl drop-shadow-lg">
          Get on, Let&apos;s Go
        </span>
        {/* Play Button */}
        <i className="fa-solid fa-circle-play absolute text-[#e3051a] text-8xl opacity-90 hover:opacity-100 hover:scale-110 transition-transform cursor-pointer drop-shadow-xl" />
      </div>
    </section>
  );
}