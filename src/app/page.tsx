"use client";

import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { FaWhatsapp } from "react-icons/fa";

  const whatsappNumber = "918606494100";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      {/* Hero Section with Stats Inside */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Banking Partners Section */}
      <section id="partners">
        <PartnerSection />
      </section>

      {/* Why Choose Section */}
      <section id="about">
        <FeatureSection />
      </section>

      {/* Customers Section */}
      <section id="reviews">
        <ReviewSection />
      </section>

      {/* WhatsApp Bubble */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl transition-transform transform hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
