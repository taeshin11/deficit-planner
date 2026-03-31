import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Deficit Planner",
  description:
    "Learn how Deficit Planner calculates your BMR, TDEE, and calorie deficit using the Mifflin-St Jeor equation. Understand the science behind your weight loss projection.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>How Deficit Planner Works</h1>

          <p>
            Deficit Planner uses a multi-step calculation process grounded in
            exercise science and nutritional research to estimate how many
            calories you should eat each day to lose weight at a safe,
            sustainable pace. This page walks you through every step of the
            process so you understand exactly where your numbers come from and
            why you can trust them.
          </p>

          <h2>Step 1: Calculating Your Basal Metabolic Rate (BMR)</h2>

          <p>
            Your Basal Metabolic Rate is the number of calories your body needs
            to perform its most basic life-sustaining functions — breathing,
            circulating blood, maintaining body temperature, producing cells, and
            processing nutrients. Even if you stayed in bed all day and did
            absolutely nothing, your body would still burn this many calories
            simply to keep you alive.
          </p>

          <p>
            Deficit Planner uses the <strong>Mifflin-St Jeor equation</strong>{" "}
            to estimate your BMR. This formula was developed by researchers M.D.
            Mifflin and S.T. St Jeor in 1990 and has since been validated in
            dozens of peer-reviewed studies. The American Dietetic Association
            considers it the most reliable predictive equation for estimating
            resting metabolic rate in non-obese and obese individuals alike.
          </p>

          <p>The formulas are:</p>

          <ul>
            <li>
              <strong>For males:</strong> BMR = (10 × weight in kg) + (6.25 ×
              height in cm) − (5 × age in years) + 5
            </li>
            <li>
              <strong>For females:</strong> BMR = (10 × weight in kg) + (6.25 ×
              height in cm) − (5 × age in years) − 161
            </li>
          </ul>

          <p>
            The equation accounts for the three variables that most strongly
            influence metabolic rate: body size (weight and height), age (metabolic
            rate naturally decreases as you get older), and sex (males tend to
            have more lean mass, which burns more calories at rest). When you
            enter your details into Deficit Planner, the tool performs this
            calculation instantly and displays your estimated BMR.
          </p>

          <h2>Step 2: Estimating Your Total Daily Energy Expenditure (TDEE)</h2>

          <p>
            Your BMR represents the calories you burn at complete rest, but most
            people do not spend their entire day lying motionless. Walking,
            working, exercising, cooking, cleaning, and even fidgeting all add to
            your daily calorie burn. To account for this, Deficit Planner
            multiplies your BMR by an <strong>activity factor</strong> that
            reflects your general level of daily movement.
          </p>

          <p>
            These activity multipliers are derived from research in exercise
            physiology and have been used in clinical nutrition for decades. The
            specific values Deficit Planner uses are:
          </p>

          <ul>
            <li>
              <strong>Sedentary (little or no exercise):</strong> BMR × 1.2 —
              This applies to people who work desk jobs and do not exercise
              regularly. Most daily movement comes from walking around the house
              or office.
            </li>
            <li>
              <strong>Lightly active (light exercise 1–3 days per week):</strong>{" "}
              BMR × 1.375 — This fits someone who takes regular walks, does
              light yoga, or performs casual physical activity a few times per
              week.
            </li>
            <li>
              <strong>Moderately active (moderate exercise 3–5 days per week):</strong>{" "}
              BMR × 1.55 — This describes someone who exercises at a moderate
              intensity for 30 to 60 minutes most days, such as jogging,
              cycling, or swimming.
            </li>
            <li>
              <strong>Very active (hard exercise 6–7 days per week):</strong>{" "}
              BMR × 1.725 — This level suits people who train intensely almost
              every day, such as competitive athletes or those with physically
              demanding jobs combined with regular workouts.
            </li>
            <li>
              <strong>Extra active (very hard exercise and a physical job):</strong>{" "}
              BMR × 1.9 — This is reserved for individuals with extremely high
              physical demands, such as professional athletes in heavy training,
              military personnel in active duty, or manual laborers who also
              exercise daily.
            </li>
          </ul>

          <p>
            The result of this multiplication is your TDEE — the estimated total
            number of calories your body burns in a single day. If you ate
            exactly this many calories, your weight would theoretically remain
            stable over time.
          </p>

          <h2>Step 3: Applying a Calorie Deficit</h2>

          <p>
            A calorie deficit is simply the difference between the calories you
            burn (your TDEE) and the calories you consume. When this number is
            negative — meaning you eat less than you burn — your body compensates
            by drawing on stored energy, primarily from fat tissue. One pound of
            body fat contains approximately 3,500 calories of stored energy, so a
            daily deficit of 500 calories translates to roughly one pound of fat
            loss per week.
          </p>

          <p>
            Deficit Planner allows you to select your desired rate of weight loss
            and then calculates the corresponding daily calorie target. The tool
            provides common deficit levels including:
          </p>

          <ul>
            <li>
              <strong>250-calorie deficit</strong> (about 0.5 lb per week) — A
              gentle approach that is easiest to sustain long-term and minimizes
              muscle loss.
            </li>
            <li>
              <strong>500-calorie deficit</strong> (about 1 lb per week) — The
              most commonly recommended rate for steady, sustainable weight loss.
            </li>
            <li>
              <strong>750-calorie deficit</strong> (about 1.5 lb per week) — A
              moderately aggressive pace suitable for those with more weight to
              lose.
            </li>
            <li>
              <strong>1,000-calorie deficit</strong> (about 2 lb per week) — The
              maximum rate generally considered safe without medical supervision.
            </li>
          </ul>

          <p>
            Regardless of the deficit level you select, Deficit Planner enforces
            minimum calorie floors of 1,200 calories per day for women and 1,500
            calories per day for men. These thresholds exist because eating below
            them significantly increases the risk of nutrient deficiencies,
            fatigue, muscle loss, and metabolic slowdown.
          </p>

          <h2>Step 4: The Weight Projection Chart</h2>

          <p>
            One of Deficit Planner&apos;s most useful features is the weight
            projection chart. After computing your deficit, the tool models your
            expected weight over a period of weeks. The chart uses a
            straightforward linear model: each week, your projected weight
            decreases by the amount of fat loss predicted by your deficit size.
          </p>

          <p>
            It is important to understand that real-world weight loss is rarely
            perfectly linear. Water retention, hormonal fluctuations, changes in
            sodium intake, and other factors cause day-to-day and week-to-week
            weight swings that have nothing to do with actual fat loss. The chart
            represents the underlying trend — the direction your weight is
            heading if you maintain your deficit consistently. Think of it as a
            smoothed average rather than a day-by-day prediction.
          </p>

          <p>
            The chart also recalculates your TDEE as your projected weight
            decreases, since a lighter body burns fewer calories. This means your
            deficit naturally narrows over time unless you adjust your calorie
            intake or increase your activity level, which is why weight loss
            often slows as you approach your goal.
          </p>

          <h2>Safety Considerations</h2>

          <p>
            Deficit Planner is an estimation tool, not a medical device. While
            the formulas it uses are well-validated, individual metabolism
            varies due to genetics, hormones, medications, body composition, and
            other factors that no equation can fully capture. Here are important
            safety points to keep in mind:
          </p>

          <ul>
            <li>
              <strong>Consult a healthcare provider</strong> before starting any
              weight loss program, especially if you have diabetes, heart
              disease, kidney disease, an eating disorder, or any other medical
              condition.
            </li>
            <li>
              <strong>Do not go below the minimum calorie thresholds</strong>{" "}
              (1,200 for women, 1,500 for men) without direct medical
              supervision. Very low calorie diets require careful monitoring.
            </li>
            <li>
              <strong>Losing weight too quickly</strong> increases the risk of
              gallstones, muscle loss, nutritional deficiencies, and metabolic
              adaptation. A rate of 1 to 2 pounds per week is generally
              recommended by the CDC and most major health organizations.
            </li>
            <li>
              <strong>Monitor how you feel.</strong> Persistent fatigue, hair
              loss, difficulty concentrating, irritability, and feeling cold all
              the time can be signs that your deficit is too aggressive.
            </li>
            <li>
              <strong>Use the calculator as a starting point,</strong> not a
              rigid prescription. Adjust your intake based on how your body
              responds over the first two to four weeks.
            </li>
          </ul>

          <p>
            Weight loss is a journey that benefits from patience, consistency,
            and self-compassion. Deficit Planner gives you the numbers — what you
            do with them is up to you, and we encourage a balanced, health-first
            approach every step of the way.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
