import TripsHero from "./TripsHero";
import TripsList from "./TripsList";

export default function TripsSection() {
  return (
    <main>
      <TripsHero />

      {/* Stats strip */}
      <div className="w-full bg-red-600 py-6 px-[5%] flex flex-wrap justify-around gap-4">
        {[
          { number: "15+", label: "Trips Completed" },
          { number: "2,000+", label: "KM Covered" },
          { number: "120+", label: "Riders" },
          { number: "3+", label: "States Explored" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-white font-extrabold text-4xl">{stat.number}</p>
            <p className="text-red-100 text-sm font-light">{stat.label}</p>
          </div>
        ))}
      </div>

      <TripsList />
    </main>
  );
}