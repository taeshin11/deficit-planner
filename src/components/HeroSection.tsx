"use client";
import { useI18n } from "@/lib/i18n";

export default function HeroSection() {
  const { s } = useI18n();

  return (
    <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0FFF4 100%)", padding: "64px 20px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DBEAFE", borderRadius: 100, padding: "6px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1E40AF", marginBottom: 20 }}>
          {s("hero.badge")}
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1A1A2E", lineHeight: 1.2, marginBottom: 16 }}>
          {s("hero.h1")}
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#374151", lineHeight: 1.7, marginBottom: 32, maxWidth: 540, margin: "0 auto 32px" }}>
          {s("hero.sub")}
        </p>
        <a
          href="#calculator"
          className="btn-primary"
          style={{ fontSize: "1.05rem", padding: "14px 36px", display: "inline-flex", textDecoration: "none" }}
        >
          {s("hero.cta")}
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
          {[
            [s("hero.feat1"), s("hero.feat1sub")],
            [s("hero.feat2"), s("hero.feat2sub")],
            [s("hero.feat3"), s("hero.feat3sub")],
          ].map(([title, sub]) => (
            <div key={title} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1A1A2E" }}>{title}</div>
              <div style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
