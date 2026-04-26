import FunFactCard from "./FunFactCard";

const funFacts = [
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
  { imageSrc: "/images/image1.jpg", title: "Some Fun", description: "Lorem ipsum dolor sit." },
];

export default function FunFacts() {
  return (
    <section className="w-full px-[10%] pt-16 pb-8">
      <h1 className="text-black text-5xl font-extrabold flex justify-center items-center gap-2 mb-10">
        <span className="text-red-600 text-5xl">&ldquo;</span>
        Some{" "}
        <span className="text-red-600 underline decoration-red-600">
          Fun Facts
        </span>{" "}
        About Us
        <span className="text-red-600 text-5xl">&rdquo;</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {funFacts.map((fact, i) => (
          <FunFactCard key={i} {...fact} />
        ))}
      </div>
    </section>
  );
}