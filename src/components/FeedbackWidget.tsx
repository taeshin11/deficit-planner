"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";

export default function FeedbackWidget() {
  const { s } = useI18n();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit() {
    if (!message.trim()) return;
    setSending(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "feedback",
            message,
            email: email || "",
            timestamp: new Date().toISOString(),
            page: window.location.href,
          }),
        });
      } else {
        window.location.href = `mailto:taeshinkim11@gmail.com?subject=Deficit Planner Feedback&body=${encodeURIComponent(message)}`;
      }
      setSent(true);
    } catch {
      window.location.href = `mailto:taeshinkim11@gmail.com?subject=Deficit Planner Feedback&body=${encodeURIComponent(message)}`;
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button className="feedback-float" onClick={() => setOpen(true)} aria-label={s("fb.btn")}>
        {s("fb.btn")}
      </button>

      {open && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="modal-box" role="dialog" aria-modal="true" aria-label={s("fb.title")}>
            {!sent ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1A1A2E", margin: 0 }}>{s("fb.title")}</h3>
                  <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", color: "#9CA3AF" }} aria-label="Close">✕</button>
                </div>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: 16 }}>{s("fb.sub")}</p>
                <div style={{ marginBottom: 14 }}>
                  <label className="form-label" htmlFor="fb-msg">{s("fb.label")}</label>
                  <textarea
                    id="fb-msg"
                    className="form-input"
                    style={{ height: 110, resize: "vertical" }}
                    placeholder={s("fb.placeholder")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label className="form-label" htmlFor="fb-email">{s("fb.email")}</label>
                  <input
                    id="fb-email"
                    type="email"
                    className="form-input"
                    placeholder={s("fb.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="btn-primary"
                  style={{ width: "100%" }}
                  onClick={submit}
                  disabled={sending || !message.trim()}
                >
                  {sending ? s("fb.sending") : s("fb.send")}
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🎉</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1A1A2E", marginBottom: 8 }}>{s("fb.thanks")}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: 20 }}>{s("fb.appreciate")}</p>
                <button className="btn-secondary" onClick={() => { setOpen(false); setSent(false); setMessage(""); setEmail(""); }}>{s("fb.close")}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
