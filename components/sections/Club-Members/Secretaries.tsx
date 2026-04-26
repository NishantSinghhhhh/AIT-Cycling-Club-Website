import MemberGroup from "./MemberGroup";
import { type Member } from "./MemberCard";

const secretaries: Member[] = [
  {
    name: "Alex Sharma",
    role: "Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image5.jpg",
  },
  {
    name: "Priya Kulkarni",
    role: "Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/professional-cyclist-woman.jpg",
  },
];

export default function Secretaries() {
  return <MemberGroup title="Secretaries" members={secretaries} columns="2" containerWidth="half" />;
}