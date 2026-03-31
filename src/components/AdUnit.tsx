"use client";
import { useEffect, useRef } from "react";

interface AdUnitProps {
  type?: "native" | "rectangle" | "leaderboard";
  className?: string;
}

export default function AdUnit({ type = "native", className = "" }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    const container = containerRef.current;

    if (type === "native") {
      // Adsterra Native Banner
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl29026921.profitablecpmratenetwork.com/1a177882f5efa59988e3c215c96aac14/invoke.js";
      container.appendChild(script);
    } else if (type === "rectangle") {
      // Adsterra 300x250 Banner
      const optScript = document.createElement("script");
      optScript.textContent = `atOptions = { 'key': '3de20ee9abc5297deb4b1a3bd08bbdb6', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} };`;
      container.appendChild(optScript);
      const invokeScript = document.createElement("script");
      invokeScript.src = "https://www.highperformanceformat.com/3de20ee9abc5297deb4b1a3bd08bbdb6/invoke.js";
      container.appendChild(invokeScript);
    } else if (type === "leaderboard") {
      // Adsterra 728x90 Banner
      const optScript = document.createElement("script");
      optScript.textContent = `atOptions = { 'key': 'af0b8fd9664b817a65dbd6941a5c3cd8', 'format': 'iframe', 'height': 90, 'width': 728, 'params': {} };`;
      container.appendChild(optScript);
      const invokeScript = document.createElement("script");
      invokeScript.src = "https://www.highperformanceformat.com/af0b8fd9664b817a65dbd6941a5c3cd8/invoke.js";
      container.appendChild(invokeScript);
    }
  }, [type]);

  return (
    <div className={className} style={{ width: "100%", margin: "0 auto", minHeight: 50 }} aria-label="Advertisement">
      {type === "native" ? (
        <div ref={containerRef}>
          <div id="container-1a177882f5efa59988e3c215c96aac14"></div>
        </div>
      ) : (
        <div ref={containerRef} style={{ display: "flex", justifyContent: "center" }} />
      )}
    </div>
  );
}
