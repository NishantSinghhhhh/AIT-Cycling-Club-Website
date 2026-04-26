import MemberGroup from "./MemberGroup";
import { type Member } from "./MemberCard";

const jointSecretaries: Member[] = [
  {
    name: "Ravi Patil",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Sneha Desai",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Amit Joshi",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Pooja Nair",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Karan Mehta",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Divya Rao",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Arjun Verma",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
  {
    name: "Meera Iyer",
    role: "Joint Secretary",
    bio: "Passionate cyclist and dedicated club member committed to promoting cycling culture and organizing memorable rides.",
    image: "/images/image1.jpg",
  },
];

export default function JointSecretaries() {
  return <MemberGroup title="Joint Secretaries" members={jointSecretaries} columns="4" containerWidth="full" />;
}