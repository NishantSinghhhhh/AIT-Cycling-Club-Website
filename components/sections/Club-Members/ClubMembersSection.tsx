import ClubMembersHero from "./ClubMembersHero";
import Secretaries from "./Secretaries";
import JointSecretaries from "./JointSecretaries";
import SEMembers from "./SEMembers";

export default function ClubMembersSection() {
  return (
    <main>
      <ClubMembersHero />

      {/* Stats strip */}
      <div className="w-full bg-red-600 py-6 px-[5%] flex flex-wrap justify-around gap-4">
        {[
          { number: "80+", label: "Cycles" },
          { number: "120+", label: "Active Members" },
          { number: "50+", label: "Rides Completed" },
          { number: "5+", label: "Years Running" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-white font-extrabold text-4xl">{stat.number}</p>
            <p className="text-red-100 text-sm font-light">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Member sections */}
      <div className="w-full px-[5%] pt-16 pb-10">
        <div>
          <Secretaries />
        </div>
        <div>
          <JointSecretaries />
        </div>
        <div>
          <SEMembers />
        </div>
      </div>
    </main>
  );
}