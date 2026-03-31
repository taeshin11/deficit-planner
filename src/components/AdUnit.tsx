"use client";

interface AdUnitProps {
  type?: "native" | "rectangle" | "leaderboard";
  className?: string;
}

export default function AdUnit({ type = "native", className = "" }: AdUnitProps) {
  const sizes: Record<string, { width: number; height: number; label: string }> = {
    native: { width: 728, height: 90, label: "Advertisement" },
    rectangle: { width: 300, height: 250, label: "Advertisement" },
    leaderboard: { width: 728, height: 90, label: "Advertisement" },
  };
  const s = sizes[type];

  return (
    <div className={`ad-unit ${className}`} style={{ width: "100%", maxWidth: s.width, height: s.height, margin: "0 auto" }} aria-label="Advertisement">
      {/* ADSTERRA_AD_UNIT */}
      {/* Replace ADSTERRA_KEY_HERE with your actual Adsterra key */}
      {/* <script async src="//www.highperformanceformat.com/ADSTERRA_KEY_HERE/invoke.js"></script> */}
      <span style={{ opacity: 0.5 }}>{s.label}</span>
    </div>
  );
}
