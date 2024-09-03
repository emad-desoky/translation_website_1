import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimationDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppleCardsCarouselDemo />
      <BackgroundGradientAnimationDemo />
    </>
  );
}
