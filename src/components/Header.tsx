"use client";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, s, langs } = useI18n();

  return (
    <header style={{ background: "#fff", borderBottom: "1.5px solid #F0F4F8", position: "sticky", top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.15rem", color: "#4A90D9", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1.3rem" }}>⚖️</span> Deficit Planner
        </Link>
        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 20, alignItems: "center" }} className="hidden md:flex">
          <Link href="/#calculator" className="nav-link">{s("nav.calculator")}</Link>
          <Link href="/how-it-works" className="nav-link">{s("nav.howItWorks")}</Link>
          <Link href="/faq" className="nav-link">{s("nav.faq")}</Link>
          <Link href="/blog/calorie-deficit-guide" className="nav-link">{s("nav.blog")}</Link>
          <Link href="/about" className="nav-link">{s("nav.about")}</Link>
          {/* Language selector */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
            style={{
              padding: "4px 8px",
              border: "1.5px solid #E5E7EB",
              borderRadius: 6,
              fontSize: "0.8rem",
              color: "#6B7280",
              background: "#FAFAFA",
              cursor: "pointer",
              minHeight: 32,
            }}
            aria-label="Select language"
          >
            {langs.map(({ code, label }) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
        </nav>
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#6B7280" }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #F0F4F8", padding: "12px 20px 16px" }} className="md:hidden">
          <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/#calculator" className="nav-link" onClick={() => setMenuOpen(false)}>{s("nav.calculator")}</Link>
            <Link href="/how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>{s("nav.howItWorks")}</Link>
            <Link href="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>{s("nav.faq")}</Link>
            <Link href="/blog/calorie-deficit-guide" className="nav-link" onClick={() => setMenuOpen(false)}>{s("nav.blog")}</Link>
            <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>{s("nav.about")}</Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              style={{ padding: "6px 10px", border: "1.5px solid #E5E7EB", borderRadius: 6, fontSize: "0.85rem", color: "#6B7280", background: "#FAFAFA", marginTop: 4 }}
              aria-label="Select language"
            >
              {langs.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
          </nav>
        </div>
      )}
    </header>
  );
}
