import HeroSlider from "@/components/sections/Hero/HeroSlider";
import AboutSection from "@/components/sections/Hero/AboutSection";
import Credentials from "@/components/sections/Hero/Credentials";
import FeaturedTours from "@/components/sections/Hero/FeaturedTours";
import Testimonial from "@/components/sections/Hero/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="px-16 py-16">
        <AboutSection />
        <Credentials />
        <FeaturedTours />
        <Testimonial />
      </div>
    </>
  );
}