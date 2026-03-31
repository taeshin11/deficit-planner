"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";

export default function Footer() {
  const { s } = useI18n();
  const [counts, setCounts] = useState<{ today: number; total: number } | null>(null);

  useEffect(() => {
    if (!WEBHOOK_URL) return;
    fetch(WEBHOOK_URL)
      .then((r) => r.json())
      .then((data) => setCounts(data))
      .catch(() => {});
  }, []);

  return (
    <footer style={{ background: "#1A1A2E", color: "#9CA3AF", padding: "40px 20px 24px", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 8 }}>⚖️ Deficit Planner</div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{s("footer.desc")}</p>
            <div style={{ marginTop: 12, fontSize: "0.8rem", color: "#6B7280" }}>
              {s("footer.builtBy")}{" "}
              <span style={{ color: "#4A90D9", fontWeight: 600 }}>SPINAI</span>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#E5E7EB", marginBottom: 12, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s("footer.pages")}</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.home")}</Link>
              <Link href="/about" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.about")}</Link>
              <Link href="/how-it-works" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.howItWorks")}</Link>
              <Link href="/faq" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.faq")}</Link>
              <Link href="/contact" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.contact")}</Link>
            </nav>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#E5E7EB", marginBottom: 12, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s("footer.legal")}</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/privacy" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.privacy")}</Link>
              <Link href="/terms" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.terms")}</Link>
            </nav>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#E5E7EB", marginBottom: 12, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s("footer.blog")}</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/blog/calorie-deficit-guide" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.blogGuide")}</Link>
              <Link href="/blog/safe-weight-loss-rate" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.9rem" }} className="hover:text-blue-400">{s("footer.blogSafe")}</Link>
            </nav>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #2D2D44", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Deficit Planner. {s("footer.rights")} |{" "}
            <a href="mailto:spinaiceo@gmail.com" style={{ color: "#4A90D9", textDecoration: "none" }}>{s("footer.business")}: spinaiceo@gmail.com</a>
          </div>
          {counts && (
            <div style={{ fontSize: "0.78rem", color: "#6B7280", textAlign: "right" }}>
              {s("footer.today")}: {counts.today} | {s("footer.total")}: {counts.total}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
