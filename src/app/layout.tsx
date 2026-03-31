import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://deficit-planner.vercel.app"),
  title: {
    default: "Free Calorie Deficit Calculator | Deficit Planner",
    template: "%s | Deficit Planner",
  },
  description: "Calculate your personalized daily calorie deficit plan with an interactive weight-loss projection chart. Free BMR & TDEE calculator — no sign-up required.",
  keywords: "calorie deficit calculator, weight loss calculator, BMR calculator, TDEE calculator, how to lose weight, daily calorie intake, calorie counter, diet planner, weight loss plan, macro calculator",
  authors: [{ name: "SPINAI" }],
  creator: "SPINAI",
  publisher: "Deficit Planner",
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" as const, "max-video-preview": -1 },
  openGraph: {
    title: "Free Calorie Deficit Calculator | Deficit Planner",
    description: "Calculate your personalized daily calorie deficit plan with an interactive weight-loss projection chart. 100% free, science-backed.",
    url: "https://deficit-planner.vercel.app",
    siteName: "Deficit Planner",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Deficit Planner - Free Calorie Deficit Calculator with Weight Loss Chart" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Calorie Deficit Calculator | Deficit Planner",
    description: "Calculate your personalized daily calorie deficit plan with an interactive weight-loss projection chart. 100% free.",
    images: ["/og-image.png"],
    creator: "@spinai",
  },
  alternates: { canonical: "https://deficit-planner.vercel.app" },
  category: "Health & Fitness",
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_HERE",
  },
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
        <script
          async
          src="https://pl29026922.profitablecpmratenetwork.com/53/cf/e0/53cfe0a2b7dd9ea7ef36d4b7af43fc3e.js"
        />
      </head>
      <body className="min-h-screen flex flex-col"><ClientLayout>{children}</ClientLayout></body>
    </html>
  );
}
