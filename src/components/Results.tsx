"use client";
import { useEffect, useRef } from "react";
import type { CalcResults } from "./Calculator";
import AdUnit from "./AdUnit";
import { useI18n } from "@/lib/i18n";

declare global {
  interface Window {
    Chart: any;
  }
}

interface ResultsProps {
  results: CalcResults;
  unit: "metric" | "imperial";
  onReset: () => void;
}

function toDisplay(kg: number, unit: "metric" | "imperial") {
  return unit === "imperial" ? +(kg * 2.20462).toFixed(1) : +kg.toFixed(1);
}

export default function Results({ results, unit, onReset }: ResultsProps) {
  const { s } = useI18n();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);
  const weightLabel = unit === "imperial" ? "lbs" : "kg";

  useEffect(() => {
    function buildChart() {
      if (!chartRef.current || !window.Chart) return;
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const { currentWeight, goalWeight, totalDays } = results;
      const step = Math.max(1, Math.floor(totalDays / 60));
      const labels: string[] = [];
      const data: number[] = [];
      const milestonePoints: { x: number; y: number }[] = [];
      const today = new Date();

      for (let d = 0; d <= totalDays; d += step) {
        const progressFraction = d / totalDays;
        const projectedWeightKg = currentWeight - progressFraction * (currentWeight - goalWeight);
        const displayWeight = toDisplay(projectedWeightKg, unit);
        const date = new Date(today);
        date.setDate(today.getDate() + d);
        labels.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
        data.push(displayWeight);

        if ([25, 50, 75, 100].includes(Math.round(progressFraction * 100))) {
          milestonePoints.push({ x: labels.length - 1, y: displayWeight });
        }
      }

      chartInstance.current = new window.Chart(chartRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: `${s("r.chartLabel")} (${weightLabel})`,
              data,
              borderColor: "#4A90D9",
              backgroundColor: "rgba(74,144,217,0.08)",
              borderWidth: 2.5,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#4A90D9",
            },
            {
              label: s("r.milestones"),
              data: milestonePoints.map((m) => ({ x: m.x, y: m.y })),
              borderColor: "transparent",
              backgroundColor: "#6FCF97",
              pointRadius: 8,
              pointStyle: "circle",
              pointHoverRadius: 10,
              showLine: false,
              type: "scatter" as any,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            tooltip: {
              callbacks: {
                title: (items: any) => items[0]?.label || "",
                label: (item: any) => {
                  if (item.datasetIndex === 0) return ` ${s("r.weight")}: ${item.parsed.y} ${weightLabel}`;
                  return ` ${s("r.milestones")}: ${item.parsed.y} ${weightLabel}`;
                },
              },
            },
            legend: { position: "bottom" as const },
          },
          scales: {
            x: {
              ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 8, font: { size: 11 } },
              grid: { color: "#F0F4F8" },
            },
            y: {
              title: { display: true, text: `${s("r.weight")} (${weightLabel})`, font: { size: 12 } },
              grid: { color: "#F0F4F8" },
              ticks: { font: { size: 11 } },
            },
          },
        },
      });
    }

    if (window.Chart) {
      buildChart();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js";
      script.onload = buildChart;
      document.head.appendChild(script);
    }

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [results, unit, weightLabel, s]);

  function getPlanText() {
    const cwDisplay = toDisplay(results.currentWeight, unit);
    const gwDisplay = toDisplay(results.goalWeight, unit);
    return `${s("r.planText")}:\n• ${s("r.planTarget")}: ${results.dailyTarget} kcal\n• ${s("r.planDeficit")}: ${results.dailyDeficit} kcal\n• ${s("r.planStart")}: ${cwDisplay} ${weightLabel}\n• ${s("r.planGoal")}: ${gwDisplay} ${weightLabel}\n• ${s("r.planDate")}: ${results.completionDate}\n\nCalculated at deficit-planner.vercel.app`;
  }

  function copyPlan() {
    navigator.clipboard.writeText(getPlanText()).then(() => alert(s("r.copied")));
  }

  const shareText = encodeURIComponent(`${s("r.planText")}! ${s("r.planTarget")}: ${results.dailyTarget} kcal.`);
  const shareUrl = encodeURIComponent("https://deficit-planner.vercel.app");

  return (
    <section id="results" style={{ padding: "0 20px 60px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <div className="disclaimer-box" style={{ marginBottom: 20 }}>
          <strong>⚕️</strong> {s("r.disclaimer")}
        </div>

        {results.exceedsRecommended && (
          <div className="warning-box" style={{ marginBottom: 20 }}>
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>⚠️</span>
            <span>
              <strong>{s("r.warningTitle")}</strong> {s("r.warning")}
            </span>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 28 }}>
          <div className="result-card">
            <div className="value">{results.dailyTarget.toLocaleString()}</div>
            <div className="label">{s("r.dailyTarget")}</div>
          </div>
          <div className="result-card">
            <div className="value" style={{ color: results.exceedsRecommended ? "#E53E3E" : "#4A90D9" }}>
              {results.dailyDeficit.toLocaleString()}
            </div>
            <div className="label">{s("r.dailyDeficit")}</div>
          </div>
          <div className="result-card">
            <div className="value" style={{ fontSize: "1.1rem" }}>{results.completionDate}</div>
            <div className="label">{s("r.completion")}</div>
          </div>
          <div className="result-card">
            <div className="value">{Math.round(results.totalCalories / 1000)}k</div>
            <div className="label">{s("r.totalCut")}</div>
          </div>
        </div>

        <div className="card" style={{ padding: "24px", marginBottom: 28 }}>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 16, color: "#1A1A2E" }}>
            {s("r.chartTitle")}
          </h3>
          <div style={{ position: "relative", height: 320 }}>
            <canvas ref={chartRef} aria-label="Weight loss projection chart" role="img"></canvas>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#9CA3AF", marginTop: 8, textAlign: "center" }}>
            {s("r.chartNote")}
          </p>
        </div>

        <div className="card" style={{ padding: "20px 24px", marginBottom: 28, background: "#F0F9FF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1E40AF" }}>{results.bmr.toLocaleString()}</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s("r.bmr")}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1E40AF" }}>{results.tdee.toLocaleString()}</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s("r.tdee")}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1E40AF" }}>{results.totalDays}</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s("r.totalDays")}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28, justifyContent: "center" }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="share-btn"
            style={{ background: "#1DA1F2", color: "#fff" }}
            aria-label="Share on X (Twitter)"
          >
            {s("r.shareX")}
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="share-btn"
            style={{ background: "#1877F2", color: "#fff" }}
            aria-label="Share on Facebook"
          >
            {s("r.shareFb")}
          </a>
          <a
            href={`https://reddit.com/submit?url=${shareUrl}&title=${shareText}`}
            target="_blank" rel="noopener noreferrer"
            className="share-btn"
            style={{ background: "#FF4500", color: "#fff" }}
            aria-label="Share on Reddit"
          >
            {s("r.shareReddit")}
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="share-btn"
            style={{ background: "#25D366", color: "#fff" }}
            aria-label="Share on WhatsApp"
          >
            {s("r.shareWa")}
          </a>
          <button
            onClick={copyPlan}
            className="share-btn"
            style={{ background: "#6FCF97", color: "#fff" }}
            aria-label="Copy plan to clipboard"
          >
            {s("r.copyPlan")}
          </button>
          <button
            onClick={() => { try { (window as any).sidebar?.addPanel?.("Deficit Planner", window.location.href, ""); } catch { alert(s("r.bookmarkMsg")); } }}
            className="share-btn"
            style={{ background: "#F59E0B", color: "#fff" }}
          >
            {s("r.bookmark")}
          </button>
        </div>

        <AdUnit type="rectangle" className="mb-7" />

        <div className="card" style={{ padding: "24px", marginBottom: 24 }}>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 16, color: "#1A1A2E" }}>{s("r.nextSteps")}</h3>
          <ul style={{ color: "#374151", lineHeight: 1.9, paddingLeft: 20 }}>
            <li>{s("r.tip1")}</li>
            <li>{s("r.tip2")}</li>
            <li>{s("r.tip3")}</li>
            <li>{s("r.tip4")}</li>
            <li>{s("r.tip5")}</li>
            <li>{s("r.tip6")}</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn-secondary" onClick={onReset}>
            {s("r.recalculate")}
          </button>
        </div>
      </div>
    </section>
  );
}
