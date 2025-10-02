"use client";

import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ReviewSection } from "@/components/home/ReviewSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
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
    </div>
  );
}
