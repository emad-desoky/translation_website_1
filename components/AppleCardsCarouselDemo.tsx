"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";

// Define the type for the card data
type CardData = {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
};

const DummyContent = ({
  title,
  text,
  src,
}: {
  title: string;
  text: string;
  src: string;
}) => {
  return (
    <div className="relative bg-[#1E1E1E] p-8 md:p-12 lg:p-16 rounded-3xl mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src={src}
          alt={title}
          height={500}
          width={500}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-sans mt-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  // Define the card data with image paths relative to the public directory
  const [data] = useState<CardData[]>([
    {
      category: "About Us",
      title: "Alfabeto for certified translation ",
      src: "/aboutUs.jpg",
      content: (
        <DummyContent
          title="About Us"
          text="Alfabeto for certified translation is a professional trusted company that provides top-notch translation solutions for its clients in Egypt while also serving international markets in Europe, Asia, and the MENA region since 2018. Alfabeto is not just another amateur translation center because we are authorized to deliver certified translation services by various foreign embassies and all local governmental entities as a result of owning a team of expert translators in different languages."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
    {
      category: "Our Services",
      title: "Alfabeto solutions are..",
      src: "/ourServices.jpg",
      content: (
        <DummyContent
          title="Productivity"
          text="Alfabeto solutions are not limited only to providing certified translation services but extend to delivering a comprehensive portfolio of technical & specialized translation, localization, simultaneous interpretation, and content creation services. Our main goal is to deliver all your needs of professional translation services to save costs and effort rather than dealing with multiple translation offices."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
    {
      category: "Journey",
      title: "Our journey is..",
      src: "/journy.jpg",
      content: (
        <DummyContent
          title="Journey"
          text="Our journey is a testament to dedication and perseverance. Over the years, we&#8217;ve navigated countless challenges and embraced opportunities for growth. From long days filled with rigorous deadlines to late nights fueled by passion, every step has been a milestone toward achieving excellence. We began with a vision to set new standards in the translation industry, and through tireless effort and unwavering commitment, we have transformed that vision into reality. Our path has been marked by relentless pursuit of perfection and an unyielding focus on customer satisfaction. Each project, no matter how complex, has been a learning experience that has shaped our approach and honed our skills."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
    {
      category: "Clients",
      title: "Our expertise...",
      src: "/clients.jpg",
      content: (
        <DummyContent
          title="Clients"
          text="Our commitment to excellence in translation services has earned us the trust of a diverse range of esteemed clients, including numerous governmental authorities and foreign embassies. We take pride in our ability to deliver precise and culturally accurate translations that meet the highest standards. Our client base spans various industries, reflecting the breadth and depth of our expertise. From legal and technical documents to creative and marketing materials, we have successfully handled complex projects for organizations of all sizes. Each client’s unique needs and expectations have driven us to continuously enhance our services and adapt to evolving industry demands. Our reputation for reliability and professionalism has led to long-lasting partnerships with clients who value our dedication and quality. We understand that trust is earned, not given, and we work diligently to uphold the confidence our clients place in us."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "/pic1.jpg",
      content: (
        <DummyContent
          title="Photography"
          text="Capture stunning images with the latest iOS photography enhancements."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "/pic2.jpg",
      content: (
        <DummyContent
          title="Hiring"
          text="Join our team! We're looking for talented individuals to help us innovate."
          src="https://assets.aceternity.com/macbook.png" // Provide the specific image here
        />
      ),
    },
  ]);

  // Map card data to Card components
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-950 text-white">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-50 font-sans">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          Get 50%{" "}
        </span>
        off this month when you try our services!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
