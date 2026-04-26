import Image from "next/image";

type SocialLink = {
  icon: string;
  href: string;
  hoverColor: string;
  label: string;
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: SocialLink[];
};

const defaultSocials: SocialLink[] = [
  { icon: "fa-instagram", href: "#", hoverColor: "hover:text-pink-500", label: "Instagram" },
  { icon: "fa-facebook", href: "#", hoverColor: "hover:text-blue-600", label: "Facebook" },
  { icon: "fa-linkedin", href: "#", hoverColor: "hover:text-sky-500", label: "LinkedIn" },
];

export default function MemberCard({ name, role, bio, image, socials = defaultSocials }: Member) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-red-200 hover:shadow-lg hover:border-red-300 transition-all duration-300 flex flex-col">
      {/* Photo */}
      <div className="relative w-full h-44 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Dots decorative */}
      <div className="flex justify-center gap-1 py-3">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-red-500" />
        ))}
      </div>

      {/* Info */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-black font-bold text-xl">{name}</h3>
        <p className="text-red-500 text-sm font-semibold mb-3">{role}</p>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{bio}</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              aria-label={s.label}
              className={`text-gray-400 text-xl transition-colors duration-200 ${s.hoverColor}`}
            >
              <i className={`fa-brands ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}