import Image from "next/image";

type FunFactCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function FunFactCard({
  imageSrc,
  title,
  description,
}: FunFactCardProps) {
  return (
    <div className="group shadow-md hover:shadow-xl transition-shadow duration-300 mb-6 cursor-pointer">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex flex-col items-center">
        <h3 className="text-black text-base font-semibold group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <h4 className="text-black text-sm font-light group-hover:text-red-500 transition-colors">
          {description}
        </h4>
      </div>
    </div>
  );
}