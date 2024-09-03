import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimationDemo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppleCardsCarouselDemo />
      <BackgroundGradientAnimationDemo />
      <Footer />
    </>
  );
}
