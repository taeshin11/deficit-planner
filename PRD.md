# PRD.md — Weight Loss Deficit Planner

## Service Info

| Field | Value |
|---|---|
| Service Name | Weight Loss Deficit Planner |
| Short Title | Deficit Planner |
| Folder | `deficit-planner` |
| Domain | Health & Fitness / Calorie Calculator |
| Contact Email | spinaiceo@gmail.com |
| Brand | SPINAI |

---

## 1. Product Overview

A free, single-page web application that calculates the daily calorie deficit a user needs to reach their goal weight within a chosen timeframe. After calculation, the app renders an interactive line chart visualizing the projected weight-loss journey day by day. The tool is SEO-optimized, ad-monetized, and designed for maximum organic traffic acquisition.

---

## 2. Agent Roles (Harness Design)

### 2-A. Planner Agent
- Receives this PRD and expands it into a full implementation spec.
- Focuses on **what** to build, not **how**. Implementation details are deferred to the Builder.
- Outputs: `feature_list.json` (ordered backlog of every feature/task).

### 2-B. Initializer Agent
At the very start of the first session, create exactly three handoff files in the project root:

| File | Purpose |
|---|---|
| `feature_list.json` | Ordered array of features with `id`, `title`, `status` (`pending` / `in-progress` / `done`), and `description`. |
| `claude-progress.txt` | Human-readable log. Each entry: timestamp, feature id, what was done, what is next. |
| `init.sh` | Shell script that installs deps, starts dev server, and prints the local URL. Must be executable (`chmod +x`). |

### 2-C. Builder Agent (Coder)
- Every new session starts with the **Session Start Routine** (see Section 3).
- Implements one feature at a time, commits, updates progress, then moves to the next.

### 2-D. Reviewer Agent
- After each feature is marked `done`, run a review pass:
  - Lint / type-check
  - Verify responsive layout (mobile, tablet, desktop)
  - Confirm the feature works end-to-end
  - Check accessibility basics (contrast, labels, tab order)
  - Log any issues in `claude-progress.txt` and fix before moving on.

---

## 3. Session Start Routine (MANDATORY — every session)

```
1. Read `claude-progress.txt` -> understand current state.
2. Read `feature_list.json` -> identify next `pending` feature.
3. Run `bash init.sh` -> ensure dev server is up.
4. Run existing tests (if any) -> confirm nothing is broken.
5. Pick the next feature -> set status to `in-progress`.
6. Implement -> test -> commit -> update progress file -> set status to `done`.
7. Repeat from step 2 until all features are complete.
```

---

## 4. Feature Specification

### 4-1. Core Calculator

| Input Field | Type | Validation |
|---|---|---|
| Current Weight | number (kg or lbs, toggle) | > 0 |
| Goal Weight | number (kg or lbs) | > 0, must be less than current weight |
| Timeframe | number + unit (days / weeks / months) | minimum 7 days |
| Activity Level | select (Sedentary / Lightly Active / Moderately Active / Very Active / Extra Active) | required |
| Age | number | 10-120 |
| Gender | select (Male / Female) | required |
| Height | number (cm or ft/in, toggle) | > 0 |

**Calculation Logic:**
1. Compute BMR using the Mifflin-St Jeor equation.
   - Male: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5
   - Female: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161
2. Multiply BMR by activity factor to get TDEE.
   - Sedentary: 1.2 | Lightly Active: 1.375 | Moderately Active: 1.55 | Very Active: 1.725 | Extra Active: 1.9
3. Total weight to lose = current weight - goal weight (convert to calories: 1 kg = 7700 kcal / 1 lb = 3500 kcal).
4. Daily deficit = total calories to lose / total days.
5. Recommended daily intake = TDEE - daily deficit.
6. If daily deficit > 1000 kcal, show a health warning: "This plan exceeds the generally recommended maximum deficit. Consider extending your timeframe."

### 4-2. Results Display

- **Summary cards**: Daily calorie target, daily deficit, estimated completion date, total calories to cut.
- **Line chart** (Chart.js via CDN):
  - X-axis: Date (day 0 to target date)
  - Y-axis: Projected weight
  - Smooth curve showing daily projected weight
  - Hover tooltip: date + projected weight
  - Milestone markers at every 25% of progress
- **"Recalculate" button** resets results and scrolls back to the input form.

### 4-3. Unit Toggle
- Metric (kg / cm) and Imperial (lbs / ft-in) toggle.
- Persists via `localStorage`.
- All calculations internally use metric; convert on display only.

### 4-4. Health and Safety Disclaimer
- Persistent banner or collapsible section at the top of results:
  "This tool provides estimates only. Consult a healthcare professional before starting any weight-loss program."

---

## 5. SEO and Traffic Maximization

### 5-1. On-Page SEO
- **Title tag**: `Free Calorie Deficit Calculator - Lose Weight on Your Schedule | Deficit Planner`
- **Meta description** (max 155 chars): `Enter your goal weight and timeframe to get a personalized daily calorie deficit plan with a visual weight-loss chart. 100% free.`
- **H1**: `Calorie Deficit Calculator`
- Use semantic HTML (`<main>`, `<section>`, `<article>`, `<aside>`).
- Structured data: `FAQPage` schema + `WebApplication` schema (JSON-LD).
- `<meta name="robots" content="index, follow">`
- Canonical URL.
- Open Graph and Twitter Card meta tags with a branded preview image.
- `alt` text on every image and chart.

### 5-2. Content Pages (for Ad Approval and SEO Depth)
Generate the following pages with genuine, helpful, original content (minimum 600 words each):

| Page | Slug |
|---|---|
| About | `/about` |
| How It Works | `/how-it-works` |
| FAQ (minimum 10 Q&A pairs) | `/faq` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| Contact | `/contact` |
| Blog: "How to Calculate Your Calorie Deficit" | `/blog/calorie-deficit-guide` |
| Blog: "Safe Rate of Weight Loss Explained" | `/blog/safe-weight-loss-rate` |

### 5-3. Technical SEO
- Auto-generate `sitemap.xml` at build time.
- `robots.txt` allowing all crawlers.
- Target Lighthouse scores: Performance >= 90, Accessibility >= 90, SEO = 100.
- Lazy-load any heavy assets.
- Preconnect to external origins (fonts, analytics, ad scripts).

### 5-4. Traffic Boosters
- Add share buttons (Twitter/X, Facebook, Reddit, WhatsApp) on the results section so users can share their plan.
- Implement a "Copy My Plan" button that copies a text summary to clipboard for forum/social posting.
- Add a "Bookmark This Page" CTA.

---

## 6. Design and UX

### 6-1. Visual Style
- **Background**: Soft, muted pastel palette. Primary background `#F5F7FA` (cool off-white), card backgrounds `#FFFFFF`, accent color `#4A90D9` (calm blue), secondary accent `#6FCF97` (fresh green for positive progress).
- **Typography**: Clean sans-serif (Inter via Google Fonts or system font stack). Weights: 400 body, 600 headings.
- **Corners**: Rounded (`border-radius: 12px` on cards).
- **Shadows**: Subtle `box-shadow` for depth. No hard borders.
- **Icons**: Lucide or Heroicons for a modern, lightweight feel.
- Modern, comfortable UI/UX. Avoid clutter. Generous white space.

### 6-2. Layout
- Single-page app feel with smooth scroll between sections.
- **Hero section**: Headline + subtext + CTA ("Calculate Now") that auto-scrolls to calculator.
- **Calculator section**: Clean form with clear grouping and a prominent "Calculate" button.
- **Results section**: Summary cards, then Line Chart, then Tips / Next Steps.
- **Footer**: Navigation links, SPINAI branding, visitor counter, business contact.

### 6-3. Responsive Design
- Mobile-first CSS approach.
- Breakpoints: 480px, 768px, 1024px, 1280px.
- Touch-friendly inputs (minimum 44px tap targets).
- Chart must resize gracefully on all viewports.
- Test across Chrome, Safari, Firefox, Edge.

### 6-4. Visitor Counter
- **Position**: Footer area, right-aligned. Small and non-intrusive.
- **Display format**: `Today: XX | Total: XX`
- **Implementation**: Google Sheets webhook (Apps Script). On page load, silently POST a visit event; read counts back via GET endpoint and render.
- Must not slow page load. Use async, non-blocking fetch.

---

## 7. Data Collection — Google Sheets Webhook

### 7-1. What to Collect
On "Calculate" button click, silently POST the following to a Google Apps Script web app:

| Field | Value |
|---|---|
| timestamp | ISO 8601 |
| current_weight | number |
| goal_weight | number |
| timeframe_days | number |
| activity_level | string |
| age | number |
| gender | string |
| height | number |
| unit_system | metric or imperial |
| daily_deficit | calculated result |
| daily_target_cal | calculated result |
| user_agent | navigator.userAgent |
| referrer | document.referrer |

### 7-2. Implementation Requirements
- **Claude Code MUST generate the full Apps Script code (`Code.gs`)** with a `doPost(e)` function that appends rows to a Google Sheet, and a `doGet(e)` function that returns visitor counts.
- Deploy instructions must be actionable AND the webhook URL must be wired into the frontend code.
- In the frontend: `fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) })` — fire-and-forget. Do NOT block the UI or the calculation display.
- **Do not just write a setup guide. Generate all code and integrate it end-to-end.**

### 7-3. Visitor Counter via Same Apps Script
- Use a separate sheet tab called `visitors` to log each page load with timestamp.
- `doGet` returns JSON: `{ "today": number, "total": number }`.
- Frontend fetches on page load and renders in the footer.

---

## 8. Monetization — Ad Integration

### 8-1. Adsterra (Primary — Set Up FIRST)
- Integrate Adsterra ad scripts into the site.
- **Ad placements** (must be non-intrusive):
  - Native banner below the hero section.
  - 300x250 rectangle in the sidebar (desktop) or between sections (mobile).
  - Social bar or push notification prompt (Adsterra built-in format).
- Insert Adsterra script tags into HTML. Use placeholder comment `<!-- ADSTERRA_AD_UNIT -->` with `ADSTERRA_KEY_HERE` where the actual key will be inserted once the ad unit is created in the Adsterra dashboard.
- Ensure ads load asynchronously and do not block page rendering.

### 8-2. Google AdSense (Secondary — Apply After Site is Live)
- Prepare the site to meet AdSense quality guidelines (content pages from Section 5-2 are critical).
- Reserve a spot for the AdSense verification meta tag in `<head>`.
- Once approved, add Auto Ads script.

### 8-3. Ad Policy Compliance
- Never place ads that overlay the calculator or interrupt the user flow.
- Label ad sections if required by the ad network.
- Privacy Policy must disclose third-party advertising and cookies.

---

## 9. Feedback and Contact Mechanisms

### 9-1. Feedback Widget
- Small floating button (bottom-left corner) or a subtle link in the footer: **"Suggest Improvement"**.
- On click: lightweight modal with textarea + optional email field + submit button.
- Sends to `spinaiceo@gmail.com` via mailto: link or POST to Google Apps Script (separate sheet tab `feedback`).
- Must not be annoying or obstruct the main content.

### 9-2. Business Inquiry
- On the `/contact` page and in the footer: **"Business Inquiries: spinaiceo@gmail.com"**.
- Simple `mailto:` link. No heavy form required.

### 9-3. SPINAI Branding
- Footer: `Built with care by SPINAI` — subtle styled text.
- Keep it tasteful and small, next to the copyright line.
- Do NOT make it a large banner or prominent watermark.

---

## 10. Tech Stack and Constraints

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js (or plain HTML/CSS/JS if simpler and faster) | Free Vercel hosting, SSR for SEO |
| Styling | Tailwind CSS or vanilla CSS | Rapid responsive development |
| Charts | Chart.js via CDN | Lightweight interactive line chart |
| Hosting | **Vercel** (free tier) | Auto-deploy from GitHub, hides username |
| Public URL | Vercel subdomain (`*.vercel.app`) | Free, clean, no GitHub username exposure |
| Data Store | Google Sheets + Apps Script | Zero cost |
| Ads | Adsterra (primary) + AdSense (secondary) | Fast approval + long-term revenue |
| Analytics | Visitor counter via Sheets webhook | Zero cost |

### 10-1. CRITICAL: Zero-Cost Rule
- Every external service MUST use a **free tier**. No paid APIs, no paid hosting, no paid databases.
- If a free option is unavailable for any feature, skip that feature and document the reason in `claude-progress.txt`.

---

## 11. Deployment Pipeline

### 11-1. GitHub Repository Setup
```bash
# Claude Code MUST EXECUTE these commands directly — not just document them:
gh repo create deficit-planner --public --description "Free Calorie Deficit Calculator with visual weight-loss projection chart" --confirm
git init
git remote add origin <use-the-url-returned-by-gh>
```

### 11-2. Milestone-Based Git Pushes
Commit and push at every major milestone:

| Milestone | Commit Message |
|---|---|
| Project init + handoff files created | `feat: project init with harness handoff files` |
| Calculator logic complete | `feat: core calorie deficit calculator with validation` |
| Chart visualization working | `feat: interactive weight-loss projection line chart` |
| Responsive design complete | `feat: responsive layout for mobile, tablet, desktop` |
| SEO content pages and meta tags | `feat: SEO content pages, structured data, sitemap` |
| Adsterra ad integration | `feat: adsterra ad unit integration` |
| Google Sheets data collection | `feat: google sheets webhook for data collection` |
| Visitor counter live | `feat: async visitor counter via sheets webhook` |
| Feedback widget and contact page | `feat: feedback widget and contact mechanisms` |
| Final QA review and polish | `feat: final QA, lighthouse audit, production polish` |

```bash
# After EACH milestone — Claude Code must execute:
git add -A
git commit -m "<commit message from table above>"
git push origin main
```

### 11-3. Vercel Deployment
```bash
# Claude Code MUST EXECUTE — not just provide a guide:
npx vercel --prod --yes
```
- After successful deploy, record the live Vercel URL in `claude-progress.txt`.
- The Vercel URL (e.g., `deficit-planner.vercel.app`) is the **only** public-facing link. Do NOT share or expose the raw GitHub URL as it reveals the username.

---

## 12. Post-Deploy Verification

After deployment, Claude Code MUST:
1. Visit the live Vercel URL and confirm it loads.
2. Test all calculator inputs with sample data.
3. Verify the line chart renders correctly with tooltips.
4. Confirm the unit toggle works and persists.
5. Test the health warning trigger (deficit > 1000 kcal).
6. Check all navigation links (About, FAQ, Privacy, Terms, Contact, Blog pages).
7. Verify Adsterra ad scripts load without errors.
8. Confirm Google Sheets webhook fires on Calculate click (verify row appears).
9. Check visitor counter displays and increments in footer.
10. Test feedback widget submission.
11. Test responsive layout at 375px, 768px, 1024px, 1440px.
12. Run Lighthouse audit and log scores in `claude-progress.txt`.
13. Fix any issues found and redeploy.

---

## 13. Quality Checklist (Reviewer Agent — Final Sign-Off)

- [ ] All calculator inputs validate correctly; edge cases handled
- [ ] Line chart renders with hover tooltips and milestone markers
- [ ] Unit toggle (metric/imperial) works and persists via localStorage
- [ ] Health warning appears when deficit exceeds 1000 kcal/day
- [ ] All 8+ content pages exist with minimum 600 words of original content each
- [ ] `sitemap.xml` and `robots.txt` are correct and accessible
- [ ] Structured data (JSON-LD) validates via Google Rich Results Test
- [ ] Adsterra ads load without breaking layout or UX
- [ ] Google Sheets webhook fires on Calculate click (verify row appears in Sheet)
- [ ] Visitor counter displays and increments correctly in footer
- [ ] Feedback widget sends data to spinaiceo@gmail.com or logs to sheet
- [ ] Footer contains: SPINAI branding, visitor counter, business inquiry mailto link
- [ ] Lighthouse: Performance >= 90, Accessibility >= 90, SEO = 100
- [ ] Responsive: verified at 375px, 768px, 1024px, 1440px
- [ ] Share buttons and "Copy My Plan" button work correctly
- [ ] Live Vercel URL loads and works end-to-end
- [ ] Zero console errors in production build
- [ ] No GitHub username exposed in any public-facing URL

---

## 14. Automation Rules

1. **CLI-first**: If a problem can be solved via CLI, solve it via CLI. Never write manual guides when automation is possible.
2. **No manual steps**: Claude Code must execute `gh`, `git`, `npx vercel`, and all build/deploy commands directly.
3. **Self-healing**: If a command fails, read the error output, diagnose, fix, and retry automatically. Do not ask the user unless absolutely unavoidable.
4. **Progress logging**: Every significant action must be logged in `claude-progress.txt` with a timestamp.
5. **No guides-only output**: For webhooks, deployment, and integrations — generate the actual code AND execute the setup. Documentation alone is not acceptable.

---

## 15. Reference File Structure

```
deficit-planner/
├── feature_list.json
├── claude-progress.txt
├── init.sh
├── package.json
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/ (or pages/ if Next.js)
│   ├── index.html (or index.jsx)
│   ├── about.html
│   ├── faq.html
│   ├── how-it-works.html
│   ├── privacy.html
│   ├── terms.html
│   ├── contact.html
│   ├── blog/
│   │   ├── calorie-deficit-guide.html
│   │   └── safe-weight-loss-rate.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── calculator.js
│       ├── chart.js
│       ├── visitor-counter.js
│       ├── data-collection.js
│       └── feedback.js
├── apps-script/
│   └── Code.gs
└── README.md
```

---

## 16. Summary

Build a free, beautifully designed, SEO-optimized calorie deficit calculator that:
1. Calculates a personalized daily calorie deficit plan based on user inputs.
2. Visualizes the entire weight-loss journey with an interactive line chart.
3. Silently collects usage data via Google Sheets for analytics.
4. Monetizes through Adsterra (primary) and Google AdSense (secondary).
5. Maximizes organic traffic via content pages, structured data, social sharing, and technical SEO.
6. Deploys to Vercel at zero cost with a clean public URL that hides the GitHub username.
7. Runs fully autonomously — Claude Code builds, tests, deploys, reviews, and fixes without human intervention.