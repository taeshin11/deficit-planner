import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Free Calorie Deficit Calculator - Lose Weight on Your Schedule | Deficit Planner",
  description: "Enter your goal weight and timeframe to get a personalized daily calorie deficit plan with a visual weight-loss chart. 100% free.",
  keywords: "calorie deficit calculator, weight loss calculator, how to lose weight, daily calorie intake, BMR calculator, TDEE calculator",
  authors: [{ name: "SPINAI" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Calorie Deficit Calculator | Deficit Planner",
    description: "Get a personalized daily calorie deficit plan with a visual weight-loss projection chart. 100% free.",
    url: "https://deficit-planner.vercel.app",
    siteName: "Deficit Planner",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Deficit Planner - Free Calorie Deficit Calculator" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Calorie Deficit Calculator | Deficit Planner",
    description: "Get a personalized daily calorie deficit plan with a visual weight-loss projection chart. 100% free.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://deficit-planner.vercel.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-ADSENSE_ID_HERE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Adsterra Social Bar */}
        {/* ADSTERRA_SOCIAL_BAR_SCRIPT_HERE */}
      </head>
      <body className="min-h-screen flex flex-col"><ClientLayout>{children}</ClientLayout></body>
    </html>
  );
}
