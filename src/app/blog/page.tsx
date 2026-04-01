import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Weight Loss Blog & Guides",
  description: "Expert guides on calorie deficit, BMR, TDEE, and safe weight loss. Science-backed articles to help you reach your fitness goals.",
  keywords: "weight loss blog, calorie deficit guide, BMR guide, TDEE explained, safe weight loss, diet tips, fitness articles",
  openGraph: {
    title: "Weight Loss Blog & Guides | Deficit Planner",
    description: "Expert guides on calorie deficit, BMR, TDEE, and safe weight loss strategies.",
    url: "https://deficit-planner.vercel.app/blog",
    siteName: "Deficit Planner",
    type: "website",
  },
};

const posts = [
  {
    slug: "/blog/calorie-deficit-guide",
    title: "How to Calculate Your Calorie Deficit: A Complete Guide",
    description: "Learn the science behind calorie deficits, BMR, and TDEE. Includes step-by-step calculations, a full worked example, common mistakes to avoid, and actionable tips for sustainable weight loss.",
    date: "March 30, 2026",
    readTime: "12 min read",
    tags: ["Calorie Deficit", "BMR", "TDEE", "Weight Loss"],
  },
  {
    slug: "/blog/safe-weight-loss-rate",
    title: "Safe Rate of Weight Loss: How Fast Can You Lose Weight Safely?",
    description: "Discover what research says about safe weight loss rates, why losing too fast is dangerous, warning signs to watch for, and evidence-based strategies for sustainable results.",
    date: "March 30, 2026",
    readTime: "9 min read",
    tags: ["Safe Weight Loss", "Health", "Nutrition", "Fitness"],
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>
          Weight Loss Blog &amp; Guides
        </h1>
        <p style={{ color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 40 }}>
          Science-backed articles to help you understand calorie deficits, calculate your nutrition needs, and reach your weight loss goals safely and sustainably.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                className="card blog-card"
                style={{
                  padding: "28px 32px",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#6B7280" }}>{post.date}</span>
                  <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>|</span>
                  <span style={{ fontSize: "0.8rem", color: "#4A90D9", fontWeight: 500 }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10, lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 16 }}>
                  {post.description}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "#EFF6FF",
                        color: "#1E40AF",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: "28px", background: "linear-gradient(135deg, #EFF6FF 0%, #F0FFF4 100%)", borderRadius: 12, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p style={{ color: "#374151", fontSize: "0.95rem", marginBottom: 20 }}>
            Use our free calorie deficit calculator to create your personalized plan.
          </p>
          <Link
            href="/#calculator"
            className="btn-primary"
            style={{ textDecoration: "none", display: "inline-flex" }}
          >
            Calculate My Plan
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
