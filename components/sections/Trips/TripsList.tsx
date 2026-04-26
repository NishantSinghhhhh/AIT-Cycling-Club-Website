import TripCard, { type Trip } from "./TripCard";

const trips: Trip[] = [
  {
    title: "AIT to Vetal Tekdi",
    date: "February 6, 2024",
    distance: "34 KM",
    description:
      "Racing against the breaking dawn atop the majestic Vetal Tekdi alongside the spirited members of the Army Institute of Technology's Cycling Club! 🚴‍♂️☀️ We embarked on a thrilling 34-kilometer journey through Pune's picturesque landscapes, conquering challenging elevations with each pedal stroke. As the sun peeked over the horizon, we reached the summit, greeted by awe-inspiring vistas that took our breath away. It was a moment of triumph, camaraderie, and sheer joy as we celebrated our collective passion for cycling amidst nature's splendor. 🌄🌳",
    image: "/images/trips/trip1/Snapinsta.app_426335720_1461995024353043_5709624651179154462_n_1080.jpg",
    tags: ["Eat", "Sleep", "Pedal", "Repeat"],
    alt: false,
  },
  {
    title: "Pune to Mumbai",
    date: "February 13, 2024",
    distance: "160 KM",
    description:
      "From Pune to Mumbai, spanning 160 kilometers of pure grit and determination! 💪🚴‍♂️ With a team of nine dedicated riders, including eight BE students and one TE student, alongside our inspiring mentor Devendra More sir, we embarked on a journey filled with challenges and triumphs. 🏞️🌟 Despite the daunting obstacles and uphill battles, we remained steadfast, relying on teamwork and relentless effort to conquer each mile. Together, we transformed what seemed like an insurmountable challenge into a resounding triumph! 🏆",
    image: "/images/trips/trip2/Snapinsta.app_425508053_1033344094394573_2136607413419148693_n_1080.jpg",
    tags: ["Eat", "Sleep", "Pedal", "Repeat"],
    galleryHref: "#",
    alt: true,
  },
  {
    title: "AIT to Vetal Tekdi",
    date: "February 6, 2024",
    distance: "34 KM",
    description:
      "Racing against the breaking dawn atop the majestic Vetal Tekdi alongside the spirited members of the Army Institute of Technology's Cycling Club! 🚴‍♂️☀️ We embarked on a thrilling 34-kilometer journey through Pune's picturesque landscapes, conquering challenging elevations with each pedal stroke. As the sun peeked over the horizon, we reached the summit, greeted by awe-inspiring vistas that took our breath away. 🌄🌳",
    image: "/images/trips/trip3/Snapinsta.app_420489998_1542655389893372_1490131856840604102_n_1080.jpg",
    tags: ["Eat", "Sleep", "Pedal", "Repeat"],
    alt: false,
  },
  {
    title: "Pune to Mumbai",
    date: "February 13, 2024",
    distance: "160 KM",
    description:
      "From Pune to Mumbai, spanning 160 kilometers of pure grit and determination! 💪🚴‍♂️ With a team of nine dedicated riders alongside our inspiring mentor Devendra More sir, we embarked on a journey filled with challenges and triumphs. Together, we transformed what seemed like an insurmountable challenge into a resounding triumph! 🏆",
    image: "/images/trips/trip4/Snapinsta.app_405759608_1639266353145925_2757825468255004186_n_1080.jpg",
    tags: ["Eat", "Sleep", "Pedal", "Repeat"],
    galleryHref: "#",
    alt: true,
  },
  {
    title: "AIT to Vetal Tekdi",
    date: "February 6, 2024",
    distance: "34 KM",
    description:
      "Racing against the breaking dawn atop the majestic Vetal Tekdi! 🚴‍♂️☀️ We embarked on a thrilling 34-kilometer journey through Pune's picturesque landscapes. As the sun peeked over the horizon, we reached the summit, greeted by awe-inspiring vistas that took our breath away. 🌄🌳",
    image: "/images/trips/trip5/Snapinsta.app_385098742_1802253763527493_8790580057024303295_n_1080.jpg",
    tags: ["Eat", "Sleep", "Pedal", "Repeat"],
    alt: false,
  },
];
// /home/nishant/Desktop/Cycling/website/public/images/
export default function TripsList() {
  return (
    <section className="w-full px-[5%] py-16">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="w-1 h-10 bg-red-600 rounded-full" />
        <h2 className="text-gray-100 font-extrabold text-4xl md:text-5xl underline decoration-red-500 underline-offset-4">
          Our Adventures
        </h2>
      </div>

      {/* Trip cards — 2-column grid on desktop, 1 column on mobile */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {trips.map((trip, i) => (
          <TripCard key={`${trip.title}-${i}`} {...trip} />
        ))}
      </div>
    </section>
  );
}