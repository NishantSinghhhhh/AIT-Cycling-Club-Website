import MemberGroup from "./MemberGroup";
import { type Member } from "./MemberCard";

const seMembers: Member[] = [
  {
    name: "Siddharth More",
    role: "SE Member",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image5.jpg",
  },
  {
    name: "Anjali Bhosale",
    role: "SE Member",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/professional-cyclist-woman.jpg",
  },
  {
    name: "Rahul Wagh",
    role: "SE Member",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/professional-cyclist-woman.jpg",
  },
  {
    name: "Neha Chavan",
    role: "SE Member",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/professional-cyclist-woman.jpg",
  },
  {
    name: "Vishal Gaikwad",
    role: "SE Member",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/professional-cyclist-woman.jpg",
  },
];

export default function SEMembers() {
  return <MemberGroup title="SE Members" members={seMembers} columns="3" containerWidth="three-quarter" />;
}