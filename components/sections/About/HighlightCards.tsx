type HighlightItem = {
  icon: string;
  label: string;
  color?: string;
};

const highlights: HighlightItem[] = [
  {
    icon: "fa-solid fa-user-tie",
    label: "We Are Professional",
    color: "text-black",
  },
  {
    icon: "fa-regular fa-heart",
    label: "Our Rides are Awesome",
    color: "text-red-600",
  },
  {
    icon: "fa-solid fa-person-biking",
    label: "We have 80+ Cycles",
    color: "text-black",
  },
];

export default function HighlightCards() {
  return (
    <section className="w-full px-[10%] py-10 flex flex-col sm:flex-row justify-around items-center gap-8">
      {highlights.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center text-center gap-3"
        >
          <i
            className={`${item.icon} ${item.color} text-6xl`}
            aria-hidden="true"
          />
          <h3 className={`${item.color} text-xl font-light`}>{item.label}</h3>
        </div>
      ))}
    </section>
  );
}