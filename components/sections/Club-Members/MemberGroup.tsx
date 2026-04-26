import MemberCard, { type Member } from "./MemberCard";

type MemberGroupProps = {
  title: string;
  members: Member[];
  columns?: "2" | "3" | "4";
  containerWidth?: "half" | "three-quarter" | "full";
};

const colClass = {
  "2": "grid-cols-1 sm:grid-cols-2",
  "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const widthClass = {
  "half": "w-full md:w-1/2",
  "three-quarter": "w-full md:w-3/4",
  "full": "w-full",
};

export default function MemberGroup({ title, members = [], columns = "3", containerWidth = "full" }: MemberGroupProps) {
  return (
    <div className={`${widthClass[containerWidth]} mb-16`}>
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <span className="w-1 h-10 bg-red-600 rounded-full" />
        <h2 className="text-gray-100 font-extrabold text-4xl md:text-5xl underline decoration-red-500 underline-offset-4">
          {title}
        </h2>
      </div>

      <div className={`grid ${colClass[columns]} gap-6`}>
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}