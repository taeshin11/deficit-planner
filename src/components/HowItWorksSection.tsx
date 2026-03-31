"use client";
import { useI18n } from "@/lib/i18n";

export default function HowItWorksSection() {
  const { s } = useI18n();

  const steps = [
    { n: "1", title: s("hiw.s1"), desc: s("hiw.s1d") },
    { n: "2", title: s("hiw.s2"), desc: s("hiw.s2d") },
    { n: "3", title: s("hiw.s3"), desc: s("hiw.s3d") },
    { n: "4", title: s("hiw.s4"), desc: s("hiw.s4d") },
  ];

  return (
    <section style={{ background: "#fff", padding: "60px 20px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 40 }}>{s("hiw.title")}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="card" style={{ padding: "24px", textAlign: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#4A90D9", color: "#fff", fontWeight: 700, fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{n}</div>
              <div style={{ fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
