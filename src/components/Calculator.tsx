"use client";
import { useState, useEffect } from "react";
import Results from "./Results";
import { useI18n } from "@/lib/i18n";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";

const ACTIVITY_FACTORS: Record<string, number> = {
  sedentary: 1.2,
  lightly: 1.375,
  moderately: 1.55,
  very: 1.725,
  extra: 1.9,
};

export interface CalcResults {
  dailyTarget: number;
  dailyDeficit: number;
  completionDate: string;
  totalCalories: number;
  tdee: number;
  bmr: number;
  totalDays: number;
  currentWeight: number;
  goalWeight: number;
  exceedsRecommended: boolean;
}

interface FormData {
  currentWeight: string;
  goalWeight: string;
  timeframeValue: string;
  timeframeUnit: "days" | "weeks" | "months";
  activity: string;
  age: string;
  gender: string;
  heightCm: string;
  heightFt: string;
  heightIn: string;
}

interface FormErrors {
  [key: string]: string;
}

function toKg(weight: number, unit: "metric" | "imperial") {
  return unit === "imperial" ? weight * 0.453592 : weight;
}

function toCm(ft: number, inches: number) {
  return ft * 30.48 + inches * 2.54;
}

export default function Calculator() {
  const { s } = useI18n();
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [form, setForm] = useState<FormData>({
    currentWeight: "",
    goalWeight: "",
    timeframeValue: "",
    timeframeUnit: "weeks",
    activity: "moderately",
    age: "",
    gender: "male",
    heightCm: "",
    heightFt: "",
    heightIn: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [results, setResults] = useState<CalcResults | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("deficitPlannerUnit");
    if (saved === "metric" || saved === "imperial") setUnit(saved);
  }, []);

  const handleUnitChange = (u: "metric" | "imperial") => {
    setUnit(u);
    localStorage.setItem("deficitPlannerUnit", u);
  };

  const setField = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => { const e = { ...prev }; delete e[key]; return e; });
  };

  function validate(): boolean {
    const errs: FormErrors = {};
    const cw = parseFloat(form.currentWeight);
    const gw = parseFloat(form.goalWeight);
    const tv = parseFloat(form.timeframeValue);
    const age = parseInt(form.age);

    if (!form.currentWeight || isNaN(cw) || cw <= 0) errs.currentWeight = s("v.currentWeight");
    if (!form.goalWeight || isNaN(gw) || gw <= 0) errs.goalWeight = s("v.goalWeight");
    if (!isNaN(cw) && !isNaN(gw) && gw >= cw) errs.goalWeight = s("v.goalLess");
    if (!form.timeframeValue || isNaN(tv) || tv <= 0) errs.timeframeValue = s("v.timeframe");

    let totalDays = tv;
    if (form.timeframeUnit === "weeks") totalDays = tv * 7;
    else if (form.timeframeUnit === "months") totalDays = tv * 30.44;
    if (totalDays < 7) errs.timeframeValue = s("v.minDays");

    if (!form.age || isNaN(age) || age < 10 || age > 120) errs.age = s("v.age");
    if (!form.gender) errs.gender = s("v.gender");
    if (!form.activity) errs.activity = s("v.activity");

    if (unit === "metric") {
      const h = parseFloat(form.heightCm);
      if (!form.heightCm || isNaN(h) || h <= 0) errs.heightCm = s("v.height");
    } else {
      const ft = parseFloat(form.heightFt);
      const inches = parseFloat(form.heightIn) || 0;
      if (!form.heightFt || isNaN(ft) || ft <= 0) errs.heightFt = s("v.height");
      if (isNaN(inches) || inches < 0 || inches >= 12) errs.heightIn = s("v.inches");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function calculate() {
    if (!validate()) return;
    setLoading(true);

    const cw = toKg(parseFloat(form.currentWeight), unit);
    const gw = toKg(parseFloat(form.goalWeight), unit);
    const tv = parseFloat(form.timeframeValue);
    const age = parseInt(form.age);

    let totalDays = tv;
    if (form.timeframeUnit === "weeks") totalDays = tv * 7;
    else if (form.timeframeUnit === "months") totalDays = tv * 30.44;
    totalDays = Math.round(totalDays);

    const heightCm = unit === "metric"
      ? parseFloat(form.heightCm)
      : toCm(parseFloat(form.heightFt), parseFloat(form.heightIn) || 0);

    let bmr: number;
    if (form.gender === "male") {
      bmr = 10 * cw + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * cw + 6.25 * heightCm - 5 * age - 161;
    }

    const tdee = bmr * ACTIVITY_FACTORS[form.activity];
    const totalCalories = (cw - gw) * 7700;
    const dailyDeficit = totalCalories / totalDays;
    const dailyTarget = Math.max(tdee - dailyDeficit, 800);

    const completionDate = new Date();
    completionDate.setDate(completionDate.getDate() + totalDays);

    const r: CalcResults = {
      dailyTarget: Math.round(dailyTarget),
      dailyDeficit: Math.round(dailyDeficit),
      completionDate: completionDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      totalCalories: Math.round(totalCalories),
      tdee: Math.round(tdee),
      bmr: Math.round(bmr),
      totalDays,
      currentWeight: cw,
      goalWeight: gw,
      exceedsRecommended: dailyDeficit > 1000,
    };

    setResults(r);

    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          current_weight: parseFloat(form.currentWeight),
          goal_weight: parseFloat(form.goalWeight),
          timeframe_days: totalDays,
          activity_level: form.activity,
          age,
          gender: form.gender,
          height: unit === "metric" ? parseFloat(form.heightCm) : toCm(parseFloat(form.heightFt), parseFloat(form.heightIn) || 0),
          unit_system: unit,
          daily_deficit: r.dailyDeficit,
          daily_target_cal: r.dailyTarget,
          user_agent: navigator.userAgent,
          referrer: document.referrer,
        }),
      }).catch(() => {});
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
    }, 300);
  }

  function reset() {
    setResults(null);
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <section id="calculator" style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="card" style={{ padding: "32px 36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
              <h2 className="section-title" style={{ margin: 0 }}>{s("calc.title")}</h2>
              <div className="unit-toggle" style={{ flexShrink: 0 }}>
                <button className={unit === "metric" ? "active" : ""} onClick={() => handleUnitChange("metric")}>{s("calc.metric")}</button>
                <button className={unit === "imperial" ? "active" : ""} onClick={() => handleUnitChange("imperial")}>{s("calc.imperial")}</button>
              </div>
            </div>

            {/* Row 1: Current Weight + Goal Weight */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label className="form-label" htmlFor="currentWeight">
                  {s("calc.currentWeight")} ({unit === "metric" ? "kg" : "lbs"})
                </label>
                <input
                  id="currentWeight"
                  type="number"
                  className="form-input"
                  placeholder={unit === "metric" ? "e.g. 85" : "e.g. 187"}
                  value={form.currentWeight}
                  onChange={(e) => setField("currentWeight", e.target.value)}
                  min="1"
                  step="0.1"
                  aria-describedby={errors.currentWeight ? "cw-err" : undefined}
                />
                {errors.currentWeight && <div id="cw-err" className="form-error">{errors.currentWeight}</div>}
              </div>
              <div>
                <label className="form-label" htmlFor="goalWeight">
                  {s("calc.goalWeight")} ({unit === "metric" ? "kg" : "lbs"})
                </label>
                <input
                  id="goalWeight"
                  type="number"
                  className="form-input"
                  placeholder={unit === "metric" ? "e.g. 72" : "e.g. 159"}
                  value={form.goalWeight}
                  onChange={(e) => setField("goalWeight", e.target.value)}
                  min="1"
                  step="0.1"
                  aria-describedby={errors.goalWeight ? "gw-err" : undefined}
                />
                {errors.goalWeight && <div id="gw-err" className="form-error">{errors.goalWeight}</div>}
              </div>
            </div>

            {/* Row 2: Timeframe */}
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">{s("calc.timeframe")}</label>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g. 12"
                    value={form.timeframeValue}
                    onChange={(e) => setField("timeframeValue", e.target.value)}
                    min="1"
                    step="1"
                  />
                  {errors.timeframeValue && <div className="form-error">{errors.timeframeValue}</div>}
                </div>
                <select
                  className="form-input"
                  style={{ width: 130, flex: "none" }}
                  value={form.timeframeUnit}
                  onChange={(e) => setField("timeframeUnit", e.target.value)}
                >
                  <option value="days">{s("calc.days")}</option>
                  <option value="weeks">{s("calc.weeks")}</option>
                  <option value="months">{s("calc.months")}</option>
                </select>
              </div>
            </div>

            {/* Row 3: Age + Gender */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label className="form-label" htmlFor="age">{s("calc.age")}</label>
                <input
                  id="age"
                  type="number"
                  className="form-input"
                  placeholder="e.g. 30"
                  value={form.age}
                  onChange={(e) => setField("age", e.target.value)}
                  min="10"
                  max="120"
                />
                {errors.age && <div className="form-error">{errors.age}</div>}
              </div>
              <div>
                <label className="form-label" htmlFor="gender">{s("calc.gender")}</label>
                <select
                  id="gender"
                  className="form-input"
                  value={form.gender}
                  onChange={(e) => setField("gender", e.target.value)}
                >
                  <option value="male">{s("calc.male")}</option>
                  <option value="female">{s("calc.female")}</option>
                </select>
              </div>
            </div>

            {/* Row 4: Height */}
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">{s("calc.height")}</label>
              {unit === "metric" ? (
                <div>
                  <input
                    type="number"
                    className="form-input"
                    placeholder={s("calc.heightCm")}
                    value={form.heightCm}
                    onChange={(e) => setField("heightCm", e.target.value)}
                    min="1"
                    step="0.1"
                  />
                  {errors.heightCm && <div className="form-error">{errors.heightCm}</div>}
                </div>
              ) : (
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <input
                      type="number"
                      className="form-input"
                      placeholder={s("calc.feet")}
                      value={form.heightFt}
                      onChange={(e) => setField("heightFt", e.target.value)}
                      min="1"
                      max="9"
                    />
                    {errors.heightFt && <div className="form-error">{errors.heightFt}</div>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="number"
                      className="form-input"
                      placeholder={s("calc.inches")}
                      value={form.heightIn}
                      onChange={(e) => setField("heightIn", e.target.value)}
                      min="0"
                      max="11"
                    />
                    {errors.heightIn && <div className="form-error">{errors.heightIn}</div>}
                  </div>
                </div>
              )}
            </div>

            {/* Row 5: Activity Level */}
            <div style={{ marginBottom: 28 }}>
              <label className="form-label" htmlFor="activity">{s("calc.activity")}</label>
              <select
                id="activity"
                className="form-input"
                value={form.activity}
                onChange={(e) => setField("activity", e.target.value)}
              >
                <option value="sedentary">{s("calc.sedentary")}</option>
                <option value="lightly">{s("calc.lightly")}</option>
                <option value="moderately">{s("calc.moderately")}</option>
                <option value="very">{s("calc.very")}</option>
                <option value="extra">{s("calc.extra")}</option>
              </select>
            </div>

            <button
              className="btn-primary"
              style={{ width: "100%", fontSize: "1.05rem", padding: "14px" }}
              onClick={calculate}
              disabled={loading}
            >
              {loading ? s("calc.calculating") : s("calc.btn")}
            </button>
          </div>
        </div>
      </section>

      {results && (
        <div className="fade-in">
          <Results results={results} unit={unit} onReset={reset} />
        </div>
      )}
    </div>
  );
}
