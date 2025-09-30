"use client";

import { FooterSection } from "@/components/home/FooterSection";
import { useRouter } from "next/navigation";

export default function FooterWrapper() {
  const router = useRouter();

  const handleNavigate = (
    page: "home" | "emi-calculator" | "explore-loans" | "contact"
  ) => {
    switch (page) {
      case "home":
        router.push("/");
        break;
      case "emi-calculator":
        router.push("/emi");
        break;
      case "explore-loans":
        router.push("/loans");
        break;
      case "contact":
        router.push("/contact");
        break;
    }
  };

  return <FooterSection onNavigate={handleNavigate} />;
}
