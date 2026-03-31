import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Deficit Planner | Free Calorie Deficit Calculator",
  description:
    "Learn about Deficit Planner, a free calorie deficit calculator built by SPINAI. Discover the science behind our tool and our commitment to helping people lose weight safely.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>About Deficit Planner</h1>

          <p>
            Deficit Planner is a free, science-backed calorie deficit calculator
            designed to help you understand exactly how many calories you need to
            eat each day to reach your weight loss goals. Unlike many fitness
            tools that hide their best features behind paywalls, Deficit Planner
            provides every calculation, chart, and recommendation completely free
            of charge. We believe that access to accurate nutritional information
            should never be gated by a subscription fee.
          </p>

          <h2>What Is Deficit Planner?</h2>

          <p>
            At its core, Deficit Planner is a calculator that estimates your
            Total Daily Energy Expenditure (TDEE) and then shows you what a safe,
            sustainable calorie deficit looks like for your body. You enter basic
            information — your age, sex, height, weight, and activity level — and
            the tool instantly computes your Basal Metabolic Rate (BMR) using the
            Mifflin-St Jeor equation, one of the most widely validated formulas
            in sports nutrition research. From there, it applies an activity
            multiplier to estimate the total number of calories you burn in a
            typical day.
          </p>

          <p>
            The tool then projects your weight over time under different deficit
            scenarios, giving you a visual chart that makes it easy to see how
            small daily changes compound into significant results over weeks and
            months. Whether you want to lose half a pound per week or aim for a
            more aggressive two-pound-per-week pace, Deficit Planner helps you
            see the realistic timeline and calorie targets involved.
          </p>

          <h2>Who Built This?</h2>

          <p>
            Deficit Planner was built by <strong>SPINAI</strong>, a small
            development team focused on creating practical, user-friendly web
            applications that solve real problems. We are passionate about
            combining clean software engineering with evidence-based health
            science. Our team includes developers with backgrounds in front-end
            engineering, data visualization, and a genuine personal interest in
            fitness and nutrition. We built Deficit Planner because we wanted a
            tool we would actually use ourselves — something fast, accurate, and
            free of the clutter that plagues so many health-related websites.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is straightforward: make reliable calorie and weight-loss
            information accessible to everyone. The internet is full of
            conflicting advice, dubious supplements, and calculators that produce
            wildly different numbers depending on which outdated formula they
            happen to use. We wanted to cut through that noise. Deficit Planner
            uses the Mifflin-St Jeor equation because peer-reviewed research has
            consistently shown it to be the most accurate predictive equation for
            estimating resting metabolic rate in healthy adults. We pair that
            with well-established activity multipliers derived from the work of
            exercise physiologists to give you a TDEE estimate you can actually
            trust.
          </p>

          <h2>Why Is It Free?</h2>

          <p>
            We keep Deficit Planner free because we believe the barrier to
            healthier living should be as low as possible. The tool is supported
            by non-intrusive advertising through partners like Adsterra and
            Google AdSense, which allows us to cover hosting and development
            costs without ever asking users to pay. We will never lock core
            features behind a premium tier. Every calculation, every chart, every
            recommendation is available to every visitor from the moment they
            land on the site.
          </p>

          <h2>The Science Behind the Tool</h2>

          <p>
            Weight management, at a fundamental level, is governed by energy
            balance. When you consume fewer calories than your body expends, you
            create a calorie deficit, and your body turns to stored energy —
            primarily fat — to make up the difference. This principle is well
            established in metabolic research and forms the basis of virtually
            every evidence-based weight loss program in the world.
          </p>

          <p>
            The Mifflin-St Jeor equation, published in 1990 and validated in
            numerous subsequent studies, estimates your Basal Metabolic Rate —
            the number of calories your body burns at complete rest just to
            maintain essential functions like breathing, circulating blood, and
            regulating temperature. The formulas differ slightly for males and
            females to account for differences in average body composition:
          </p>

          <ul>
            <li>
              <strong>Males:</strong> BMR = (10 × weight in kg) + (6.25 × height
              in cm) − (5 × age in years) + 5
            </li>
            <li>
              <strong>Females:</strong> BMR = (10 × weight in kg) + (6.25 ×
              height in cm) − (5 × age in years) − 161
            </li>
          </ul>

          <p>
            Once your BMR is calculated, Deficit Planner multiplies it by an
            activity factor that reflects how much additional energy you burn
            through daily movement and exercise. These factors range from 1.2 for
            sedentary individuals to 1.9 for those with extremely active
            lifestyles. The result is your TDEE — the total number of calories
            you need to maintain your current weight.
          </p>

          <p>
            From there, creating a deficit is simple arithmetic. A deficit of
            approximately 500 calories per day translates to roughly one pound of
            fat loss per week, since one pound of body fat contains about 3,500
            calories of stored energy. Deficit Planner lets you visualize this
            relationship and choose a deficit level that fits your lifestyle and
            goals.
          </p>

          <h2>Our Commitment to Accuracy</h2>

          <p>
            We take accuracy seriously. Every formula and multiplier used in
            Deficit Planner is sourced from peer-reviewed literature. We
            regularly review our calculations against the latest research to
            ensure they remain up to date. That said, we are transparent about
            the limitations: no calculator can perfectly predict your individual
            metabolism. Genetics, hormonal factors, medication, sleep quality,
            stress, and many other variables influence how your body processes
            energy. Deficit Planner provides an excellent starting estimate, but
            we always recommend using your results as a starting point and
            adjusting based on real-world progress.
          </p>

          <p>
            We also emphasize safety. The tool will never recommend a calorie
            intake below 1,200 calories per day for women or 1,500 calories per
            day for men, as going below these thresholds without medical
            supervision increases the risk of nutrient deficiencies and other
            health complications. If you have a medical condition, take
            medication that affects your metabolism, or are significantly
            underweight or overweight, we strongly encourage you to consult a
            healthcare provider before making changes to your diet.
          </p>

          <h2>Get in Touch</h2>

          <p>
            Have questions, feedback, or suggestions? We would love to hear from
            you. Reach out to us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a> and we
            will get back to you as soon as we can. Your feedback directly shapes
            the future of Deficit Planner, and we genuinely appreciate every
            message we receive.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
