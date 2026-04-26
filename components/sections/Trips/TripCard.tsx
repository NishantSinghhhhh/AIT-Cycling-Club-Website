import Image from "next/image";

export type Trip = {
  title: string;
  date: string;
  distance: string;
  description: string;
  image: string;
  tags: string[];
  galleryHref?: string;
  alt?: boolean;
};

export default function TripCard({ title, date, distance, description, image, tags, galleryHref, alt }: Trip) {
  return (
    <article
      className={`group flex flex-col md:flex-row ${alt ? "md:flex-row-reverse" : ""} bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100`}
    >
      {/* Image side */}
      <div className="relative md:w-[40%] h-60 md:h-auto overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay with tags */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-semibold text-sm mb-2">{title}</p>
          <p className="text-gray-300 text-xs mb-3">{date}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content side */}
      <div
        className={`flex flex-col justify-between p-7 md:w-[60%] relative
          ${alt ? "md:before:right-auto md:before:left-[-10px] md:before:skew-x-3" : ""}
        `}
      >
        {/* Green accent bar */}
        <span className="block w-9 h-1.5 bg-red-500 rounded-full mb-5" />

        <div className="flex-1">
          <h2 className="text-black font-bold text-2xl md:text-3xl leading-tight mb-1">{title}</h2>
          <p className="text-gray-400 text-sm uppercase tracking-widest font-light mb-4">
            Total Distance: {distance}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">{description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-gray-400 text-xs">{date}</span>
          <a
            href={galleryHref ?? "#"}
            className="text-red-500 text-sm font-semibold hover:text-red-700 transition-colors flex items-center gap-1 group/link"
          >
            {galleryHref ? "View Gallery" : "Read More"}
            <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}