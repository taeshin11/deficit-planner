import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import AdUnit from "@/components/AdUnit";
import FeedbackWidget from "@/components/FeedbackWidget";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export const metadata: Metadata = {
  title: "Free Calorie Deficit Calculator - Lose Weight on Your Schedule | Deficit Planner",
  description: "Enter your goal weight and timeframe to get a personalized daily calorie deficit plan with a visual weight-loss chart. 100% free.",
  alternates: { canonical: "https://deficit-planner.vercel.app" },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Deficit Planner — Calorie Deficit Calculator",
        url: "https://deficit-planner.vercel.app",
        description: "Free calorie deficit calculator that generates a personalized daily calorie intake plan with a weight-loss projection chart.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a calorie deficit?",
            acceptedAnswer: { "@type": "Answer", text: "A calorie deficit occurs when you consume fewer calories than your body burns. To lose 1 kg of fat you need a deficit of approximately 7,700 calories." },
          },
          {
            "@type": "Question",
            name: "How fast is safe to lose weight?",
            acceptedAnswer: { "@type": "Answer", text: "Most experts recommend losing 0.5–1 kg (1–2 lbs) per week. Faster rates may lead to muscle loss or nutritional deficiencies." },
          },
          {
            "@type": "Question",
            name: "What is TDEE?",
            acceptedAnswer: { "@type": "Answer", text: "Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns each day, accounting for your activity level." },
          },
        ],
      },
    ]),
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Native ad below hero */}
        <div style={{ padding: "20px 20px 0", maxWidth: 760, margin: "0 auto" }}>
          <AdUnit type="native" />
        </div>

        {/* Calculator + Results */}
        <Calculator />

        {/* How it works */}
        <HowItWorksSection />

        {/* Ad */}
        <div style={{ padding: "0 20px 40px", maxWidth: 760, margin: "0 auto" }}>
          <AdUnit type="rectangle" />
        </div>
      </main>
      <Footer />
      <FeedbackWidget />
    </>
  );
}
