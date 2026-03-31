import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Deficit Planner Calculator",
  description:
    "Learn how Deficit Planner calculates BMR, TDEE, and calorie deficit using the Mifflin-St Jeor equation. Step-by-step guide with formulas and examples.",
  keywords:
    "how calorie deficit works, BMR calculation, TDEE formula, Mifflin-St Jeor equation, activity multiplier, weight loss calculator, calorie deficit explained, energy balance, metabolic rate, fat loss science",
  openGraph: {
    title: "How Deficit Planner Works | BMR, TDEE & Calorie Deficit Guide",
    description:
      "Step-by-step guide to how Deficit Planner calculates your BMR, TDEE, and calorie deficit using the Mifflin-St Jeor equation. Includes formulas, examples, and FAQs.",
    url: "https://deficit-planner.vercel.app/how-it-works",
    siteName: "Deficit Planner",
    type: "article",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main
        style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}
      >
        <article className="prose">
          <h1>How Deficit Planner Works</h1>

          <p>
            Deficit Planner uses a multi-step calculation process grounded in
            exercise science and nutritional research to estimate how many
            calories you should eat each day to lose weight at a safe,
            sustainable pace. This page walks you through every step of the
            process — from the moment you enter your details to the interactive
            weight projection chart — so you understand exactly where your
            numbers come from and why you can trust them. Whether you are new
            to calorie counting or a seasoned nutrition enthusiast, this guide
            will give you a thorough understanding of the science powering
            your results.
          </p>

          <section>
            <h2>Your 3-Step Guide to Using Deficit Planner</h2>

            <p>
              Using Deficit Planner is designed to be fast and intuitive. Here
              is what the process looks like from start to finish:
            </p>

            <h3>Step 1: Enter Your Personal Details</h3>

            <p>
              Navigate to the <a href="/">Deficit Planner calculator</a> on our
              home page. You will see a simple form asking for five pieces of
              information: your age, your biological sex, your height, your
              current weight, and your general activity level. These inputs are
              all the calculator needs to estimate your metabolic rate with a
              high degree of accuracy. You can enter your height and weight in
              either metric (centimeters and kilograms) or imperial (feet/inches
              and pounds) — the tool handles the conversion automatically.
              No account creation is required, and none of your data is stored
              on our servers.
            </p>

            <h3>Step 2: Review Your BMR, TDEE, and Deficit Targets</h3>

            <p>
              Once you submit your details, Deficit Planner instantly computes
              three critical numbers: your Basal Metabolic Rate (BMR), your
              Total Daily Energy Expenditure (TDEE), and your recommended daily
              calorie targets at various deficit levels. The results are
              displayed clearly, with each number labeled and explained so you
              know exactly what it means and how it was derived. You can select
              different deficit intensities — from a gentle 250-calorie daily
              deficit to a more aggressive 1,000-calorie deficit — and see how
              each option affects your projected rate of weight loss.
            </p>

            <h3>Step 3: Explore Your Weight Projection Chart</h3>

            <p>
              Below the numerical results, Deficit Planner generates an
              interactive weight projection chart that visualizes your expected
              weight over the coming weeks and months. This chart is one of the
              tool&apos;s most powerful features because it transforms abstract
              calorie numbers into a concrete, visual timeline. You can see at
              a glance how long it will take to reach your goal weight at your
              chosen deficit level, and you can toggle between deficit options to
              compare timelines side by side. The chart dynamically recalculates
              as your projected weight decreases, accounting for the fact that a
              lighter body burns fewer calories — a nuance that many simpler
              calculators ignore entirely.
            </p>
          </section>

          <section>
            <h2>Detailed Explanation: Calculating Your Basal Metabolic Rate</h2>

            <p>
              Your Basal Metabolic Rate is the number of calories your body
              needs to perform its most basic life-sustaining functions —
              breathing, circulating blood, maintaining body temperature,
              producing and repairing cells, supporting brain function, and
              processing nutrients at a cellular level. Even if you stayed in
              bed all day and did absolutely nothing, your body would still burn
              this many calories simply to keep you alive. BMR typically
              accounts for sixty to seventy-five percent of total daily energy
              expenditure, making it by far the largest component of the
              calories you burn each day.
            </p>

            <p>
              Deficit Planner uses the <strong>Mifflin-St Jeor equation</strong>{" "}
              to estimate your BMR. This formula was developed by researchers
              M.D. Mifflin and S.T. St Jeor and published in the{" "}
              <em>American Journal of Clinical Nutrition</em> in 1990. It has
              since been validated in dozens of peer-reviewed studies across
              diverse populations and age groups. A comprehensive review
              published in the <em>Journal of the American Dietetic Association</em>{" "}
              in 2005 compared multiple predictive equations and concluded that
              the Mifflin-St Jeor formula was the most reliable for estimating
              resting metabolic rate in both normal-weight and overweight
              individuals. The Academy of Nutrition and Dietetics recommends it
              as the preferred equation for clinical use.
            </p>

            <h3>The Mifflin-St Jeor Formulas</h3>

            <p>The equations are as follows:</p>

            <ul>
              <li>
                <strong>For males:</strong> BMR = (10 x weight in kg) + (6.25 x
                height in cm) - (5 x age in years) + 5
              </li>
              <li>
                <strong>For females:</strong> BMR = (10 x weight in kg) + (6.25
                x height in cm) - (5 x age in years) - 161
              </li>
            </ul>

            <p>
              The equation incorporates the three variables that most strongly
              influence metabolic rate: body size (captured by both weight and
              height), age (metabolic rate naturally decreases by roughly two
              to three percent per decade after early adulthood), and biological
              sex (males tend to carry more lean muscle mass, which is more
              metabolically active than fat tissue, resulting in a higher BMR at
              the same body dimensions). The sex-specific constant at the end
              of the formula (+5 for males, -161 for females) accounts for
              this average difference in body composition.
            </p>

            <p>
              For example, a 30-year-old male who weighs 85 kg and stands 178 cm
              tall would have a BMR of: (10 x 85) + (6.25 x 178) - (5 x 30) + 5
              = 850 + 1,112.5 - 150 + 5 = <strong>1,817.5 calories per day</strong>.
              This means his body would burn roughly 1,818 calories daily even
              at complete rest.
            </p>
          </section>

          <section>
            <h2>Understanding Total Daily Energy Expenditure (TDEE)</h2>

            <p>
              Your BMR represents the calories you burn at complete rest, but
              most people do not spend their entire day lying motionless.
              Walking to work, climbing stairs, carrying groceries, exercising,
              cooking, cleaning, playing with children, and even fidgeting and
              maintaining posture all add to your daily calorie burn. To account
              for this additional expenditure, Deficit Planner multiplies your
              BMR by an <strong>activity factor</strong> that reflects your
              general level of daily movement and structured exercise.
            </p>

            <p>
              These activity multipliers are derived from decades of research in
              exercise physiology and have been used in clinical nutrition
              practice since the mid-twentieth century. They were originally
              developed from studies that measured total energy expenditure using
              doubly labeled water and indirect calorimetry, then correlated
              those measurements with self-reported activity levels.
            </p>

            <h3>Activity Multiplier Table</h3>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "1.5rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f3f4f6",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "12px 16px", borderBottom: "2px solid #d1d5db" }}>
                      Activity Level
                    </th>
                    <th style={{ padding: "12px 16px", borderBottom: "2px solid #d1d5db" }}>
                      Multiplier
                    </th>
                    <th style={{ padding: "12px 16px", borderBottom: "2px solid #d1d5db" }}>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      <strong>Sedentary</strong>
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      1.2
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      Little or no exercise. Desk job with minimal daily
                      movement. Most activity comes from walking around the
                      house or office.
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#f9fafb" }}>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      <strong>Lightly Active</strong>
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      1.375
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      Light exercise 1-3 days per week. Regular walks, light
                      yoga, or casual recreational activity a few times per
                      week.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      <strong>Moderately Active</strong>
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      1.55
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      Moderate exercise 3-5 days per week. Jogging, cycling,
                      swimming, or resistance training at moderate intensity for
                      30 to 60 minutes most days.
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#f9fafb" }}>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      <strong>Very Active</strong>
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      1.725
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      Hard exercise 6-7 days per week. Intense training almost
                      daily, competitive athletics, or physically demanding work
                      combined with regular workouts.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      <strong>Extra Active</strong>
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      1.9
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
                      Very hard daily exercise plus a physically demanding job.
                      Professional athletes in heavy training, military
                      personnel in active duty, or manual laborers who also
                      exercise intensely.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The result of multiplying your BMR by the appropriate activity
              factor is your TDEE — the estimated total number of calories your
              body burns in a single day. If you consumed exactly this many
              calories, your weight would theoretically remain stable over time,
              assuming the estimate is accurate and your activity level remains
              consistent.
            </p>
          </section>

          <section>
            <h2>How the Deficit Calculation Works</h2>

            <p>
              A calorie deficit is simply the difference between the calories
              you burn (your TDEE) and the calories you consume. When this
              number is negative — meaning you eat less than you burn — your
              body compensates by drawing on stored energy reserves, primarily
              from adipose tissue (body fat). One pound of body fat contains
              approximately 3,500 calories of stored energy, so a daily deficit
              of 500 calories translates to roughly one pound of fat loss per
              week (500 x 7 = 3,500 calories).
            </p>

            <p>
              Deficit Planner allows you to select your desired rate of weight
              loss and then calculates the corresponding daily calorie target.
              The tool provides common deficit levels:
            </p>

            <ul>
              <li>
                <strong>250-calorie deficit</strong> (~0.5 lb/week) — A gentle,
                highly sustainable approach that minimizes hunger, preserves
                muscle mass, and is ideal for people who are already relatively
                lean or who prefer a gradual transition.
              </li>
              <li>
                <strong>500-calorie deficit</strong> (~1 lb/week) — The most
                commonly recommended rate for steady, sustainable weight loss.
                This is the sweet spot for most people balancing results with
                quality of life.
              </li>
              <li>
                <strong>750-calorie deficit</strong> (~1.5 lb/week) — A
                moderately aggressive pace suitable for individuals with more
                weight to lose who can tolerate a larger energy restriction
                without significant impacts on mood, energy, or training
                performance.
              </li>
              <li>
                <strong>1,000-calorie deficit</strong> (~2 lb/week) — The
                maximum rate generally considered safe without direct medical
                supervision. Best suited for individuals with a significant
                amount of weight to lose, and typically not recommended as a
                long-term strategy.
              </li>
            </ul>

            <p>
              Regardless of which deficit level you select, Deficit Planner
              enforces minimum calorie floors of 1,200 calories per day for
              women and 1,500 calories per day for men. These safety thresholds
              exist because eating below them significantly increases the risk
              of nutrient deficiencies, muscle wasting, hormonal disruption,
              fatigue, and metabolic adaptation — a condition where your
              body&apos;s metabolic rate slows disproportionately in response to
              severe caloric restriction.
            </p>

            <h3>Worked Example: 85 kg Male Targeting 72 kg in 12 Weeks</h3>

            <p>
              Let us walk through a complete example to illustrate how all the
              pieces fit together. Consider a 30-year-old male who weighs 85 kg,
              stands 178 cm tall, and exercises moderately (3-5 days per week).
              His goal is to reach 72 kg — a loss of 13 kg (approximately 28.6
              pounds).
            </p>

            <p>
              <strong>Step 1 — Calculate BMR:</strong> Using the Mifflin-St Jeor
              equation: BMR = (10 x 85) + (6.25 x 178) - (5 x 30) + 5 = 850 +
              1,112.5 - 150 + 5 = <strong>1,817.5 kcal/day</strong>.
            </p>

            <p>
              <strong>Step 2 — Calculate TDEE:</strong> With a &quot;moderately
              active&quot; multiplier of 1.55: TDEE = 1,817.5 x 1.55 ={" "}
              <strong>2,817 kcal/day</strong> (rounded).
            </p>

            <p>
              <strong>Step 3 — Apply deficit:</strong> To lose 13 kg, he needs
              to create a total deficit of approximately 13 x 7,700 = 100,100
              kcal (using the widely accepted estimate of 7,700 kcal per
              kilogram of body fat). Over 12 weeks (84 days), that requires a
              daily deficit of roughly 100,100 / 84 ={" "}
              <strong>~1,192 kcal/day</strong>. This would bring his daily
              intake to approximately 2,817 - 1,192 ={" "}
              <strong>~1,625 kcal/day</strong>.
            </p>

            <p>
              However, this is an aggressive deficit — close to a 42% reduction
              from his TDEE. Deficit Planner would flag this as a rapid rate of
              loss and would recalculate the TDEE weekly as weight decreases.
              In practice, a more moderate approach of targeting 0.75 to 1 kg
              per week would extend the timeline to 13-17 weeks but would be
              significantly more sustainable, easier to adhere to, and better
              for preserving lean muscle mass. The projection chart helps users
              visualize these trade-offs clearly.
            </p>
          </section>

          <section>
            <h2>How the Interactive Chart Projection Works</h2>

            <p>
              One of Deficit Planner&apos;s most valued features is the
              interactive weight projection chart. After computing your deficit,
              the tool models your expected weight trajectory over a
              configurable number of weeks. The chart is not a simple straight
              line from your current weight to your goal weight — it
              incorporates a critical nuance that many basic calculators miss:
              as you lose weight, your body burns fewer calories.
            </p>

            <p>
              Here is how it works technically: for each projected week, the
              tool recalculates your BMR using your new (lower) projected
              weight, then recalculates your TDEE, and then applies your chosen
              deficit to determine how much weight you would lose in the
              following week. This recursive recalculation means the chart
              naturally shows weight loss decelerating over time — a pattern
              that mirrors real-world experience and helps set realistic
              expectations.
            </p>

            <p>
              The chart uses a smoothed trend line rather than attempting to
              predict day-by-day fluctuations. In reality, your scale weight
              will bounce up and down daily due to water retention, sodium
              intake, glycogen stores, bowel contents, hormonal cycles, and
              other factors that have nothing to do with actual fat loss. The
              projection chart shows you the underlying trajectory — the
              direction your weight is heading if you maintain your deficit
              consistently. Think of it as a compass heading rather than a
              turn-by-turn navigation instruction.
            </p>
          </section>

          <section>
            <h2>Safety Considerations and Health Warnings</h2>

            <p>
              Deficit Planner is an estimation tool designed for general
              informational purposes. It is not a medical device, and its
              results should not be treated as medical advice. While the
              formulas it uses are well-validated across large population
              studies, individual metabolism varies due to genetics, hormonal
              profiles, medications, body composition, gut microbiome, sleep
              patterns, stress levels, and other factors that no equation can
              fully capture. Here are important safety points that every user
              should consider:
            </p>

            <ul>
              <li>
                <strong>Consult a healthcare provider</strong> before starting
                any weight loss program, especially if you have diabetes, heart
                disease, kidney disease, thyroid disorders, a history of eating
                disorders, or any other medical condition that may be affected
                by changes in caloric intake.
              </li>
              <li>
                <strong>Never go below the minimum calorie thresholds</strong>{" "}
                (1,200 kcal/day for women, 1,500 kcal/day for men) without
                direct medical supervision. Very low calorie diets (VLCDs)
                require professional monitoring to ensure nutritional adequacy
                and to watch for complications.
              </li>
              <li>
                <strong>Losing weight too quickly</strong> increases the risk of
                gallstones, significant muscle loss, nutritional deficiencies,
                hair loss, menstrual irregularities, metabolic adaptation, and
                psychological effects including irritability and difficulty
                concentrating. The CDC and most major health organizations
                recommend a rate of 0.5 to 1 kg (1 to 2 pounds) per week as
                safe and sustainable. For more details, see our guide on{" "}
                <a href="/blog/safe-weight-loss-rate">safe weight loss rates</a>.
              </li>
              <li>
                <strong>Monitor how you feel throughout the process.</strong>{" "}
                Persistent fatigue, excessive hair shedding, difficulty
                concentrating, constant irritability, feeling cold all the
                time, loss of menstrual period, or inability to recover from
                workouts can all be signs that your deficit is too aggressive
                and needs to be reduced.
              </li>
              <li>
                <strong>Use the calculator as a starting point,</strong> not a
                rigid prescription. Adjust your intake based on how your body
                responds over the first two to four weeks. If real-world results
                differ significantly from the projection, recalibrate your
                inputs or consult a nutrition professional.
              </li>
              <li>
                <strong>This tool is intended for adults.</strong> Children,
                adolescents, pregnant or breastfeeding women, and the elderly
                have different nutritional requirements that this calculator is
                not designed to address.
              </li>
            </ul>

            <p>
              Weight loss is a journey that benefits from patience, consistency,
              and self-compassion. Deficit Planner gives you the numbers — what
              you do with them is up to you, and we encourage a balanced,
              health-first approach every step of the way. For a comprehensive
              overview of calorie deficit principles, visit our{" "}
              <a href="/blog/calorie-deficit-guide">calorie deficit guide</a>.
            </p>
          </section>

          <section>
            <h2>Frequently Asked Questions</h2>

            <h3>1. What exactly is a calorie deficit, and why does it cause weight loss?</h3>
            <p>
              A calorie deficit occurs when you consume fewer calories than your
              body expends over a given period. Your body requires a constant
              supply of energy to fuel everything from organ function to physical
              movement. When dietary intake falls short of this demand, your
              body taps into stored energy reserves — primarily body fat — to
              bridge the gap. Over time, this consistent draw on fat stores
              results in measurable weight loss. The principle of energy balance
              is one of the most well-established concepts in nutritional
              science and has been validated through decades of metabolic ward
              studies, where participants live in controlled environments and
              every calorie consumed and expended is meticulously tracked.
            </p>

            <h3>2. How accurate is the Mifflin-St Jeor equation?</h3>
            <p>
              The Mifflin-St Jeor equation has been shown in large-scale
              validation studies to predict resting metabolic rate within ten
              percent of the value measured by indirect calorimetry in
              approximately eighty percent of individuals. This makes it the
              most accurate widely available predictive equation, surpassing
              older formulas like the Harris-Benedict equation (1919) and the
              Owen equation (1986). However, no predictive equation is perfect
              for every individual. Factors such as extreme body composition
              (very high muscle mass or very high body fat percentage),
              metabolic conditions like hypothyroidism, and certain medications
              can cause the estimate to deviate from your true metabolic rate.
              For the most accurate measurement, a test called indirect
              calorimetry — which measures oxygen consumption and carbon dioxide
              production — can be performed in a clinical or sports science
              laboratory.
            </p>

            <h3>3. What is TDEE and how is it different from BMR?</h3>
            <p>
              BMR (Basal Metabolic Rate) is the number of calories your body
              burns at complete rest — the absolute minimum energy required to
              sustain life. TDEE (Total Daily Energy Expenditure) is the total
              number of calories you burn in a full day, including your BMR plus
              all additional energy expenditure from physical activity, the
              thermic effect of food (the energy cost of digesting and
              processing what you eat), and non-exercise activity thermogenesis
              (NEAT), which includes unconscious movements like fidgeting,
              maintaining posture, and gesticulating. For most people, BMR
              accounts for sixty to seventy-five percent of TDEE, physical
              activity accounts for fifteen to thirty percent, and the thermic
              effect of food accounts for approximately ten percent. TDEE is the
              number you actually need to eat below in order to lose weight.
              Learn more in our{" "}
              <a href="/faq">comprehensive FAQ section</a>.
            </p>

            <h3>4. How do I choose the right activity level?</h3>
            <p>
              Choosing the correct activity level is one of the most impactful
              decisions you will make when using the calculator, because the
              difference between &quot;sedentary&quot; and &quot;very active&quot; can translate
              to over 1,000 calories per day in your TDEE estimate. A common
              mistake is overestimating activity level — many people who exercise
              three to four times per week but work sedentary desk jobs are
              better classified as &quot;lightly active&quot; rather than &quot;moderately
              active,&quot; because the exercise sessions represent only a small
              fraction of their total waking hours. When in doubt, we recommend
              selecting the lower activity level and adjusting upward if you
              find yourself losing weight faster than projected after two to
              three weeks.
            </p>

            <h3>5. Is it safe to lose two pounds per week?</h3>
            <p>
              For most adults with a significant amount of weight to lose (a
              BMI of 30 or above), losing up to two pounds per week is generally
              considered safe by the CDC and the National Institutes of Health.
              However, as you get closer to a healthy weight range, a rate of
              0.5 to 1 pound per week becomes more appropriate to minimize
              muscle loss, prevent metabolic adaptation, and ensure nutritional
              adequacy. Rapid weight loss also increases the risk of gallstones,
              which is why the medical community advises caution. Deficit
              Planner&apos;s minimum calorie floor is an additional safeguard
              against excessively aggressive targets. For detailed guidance, see
              our article on{" "}
              <a href="/blog/safe-weight-loss-rate">safe weight loss rates</a>.
            </p>

            <h3>6. Why does weight loss slow down over time?</h3>
            <p>
              Weight loss deceleration is a normal and expected physiological
              phenomenon. As you lose weight, your body becomes smaller and
              requires less energy to maintain itself — your BMR decreases. This
              means the same calorie intake that created a 500-calorie deficit
              when you weighed 90 kg might only create a 350-calorie deficit
              when you weigh 80 kg, because your TDEE has dropped. Additionally,
              research suggests that the body undergoes a degree of metabolic
              adaptation during sustained calorie restriction — a process
              sometimes called &quot;adaptive thermogenesis&quot; — where metabolic rate
              decreases slightly beyond what would be predicted by weight loss
              alone. Deficit Planner accounts for the first factor (reduced BMR)
              by recalculating your metabolic rate at each projected weight
              point on the chart.
            </p>

            <h3>7. Can I use Deficit Planner if I want to gain weight or build muscle?</h3>
            <p>
              Deficit Planner is primarily designed for weight loss scenarios,
              but the BMR and TDEE calculations it provides are equally useful
              for anyone trying to gain weight or build muscle. If your goal is
              a caloric surplus (eating more than you burn to support muscle
              growth), you would simply add calories to your TDEE rather than
              subtracting them. A surplus of 250 to 500 calories per day is
              typically recommended for lean muscle gain, though the specific
              amount depends on your training program, experience level, and
              genetic factors. We may add dedicated muscle-building features in
              a future update.
            </p>

            <h3>8. How often should I recalculate my TDEE?</h3>
            <p>
              We recommend recalculating your numbers every four to six weeks
              during an active weight loss phase, or whenever your weight
              changes by five or more pounds in either direction. As your body
              composition changes, your metabolic rate changes with it, and your
              calorie targets should be updated accordingly. You should also
              recalculate if your activity level changes significantly — for
              example, if you start a new job that is more or less physically
              demanding, begin a new exercise program, or experience a
              significant change in daily routine. Since Deficit Planner is free
              and requires no login, recalculating takes less than thirty
              seconds at any time. For more answers, visit our{" "}
              <a href="/faq">FAQ page</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
