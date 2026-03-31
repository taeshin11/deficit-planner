import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Deficit Planner",
  description:
    "Get answers to 15+ common questions about calorie deficits, BMR, TDEE, the Mifflin-St Jeor equation, safe weight loss rates, activity levels, and how the Deficit Planner calculator works.",
  keywords:
    "calorie deficit FAQ, BMR questions, TDEE explained, Mifflin-St Jeor equation, safe weight loss, calorie calculator questions, activity level guide, weight loss plateau, calorie deficit calculator help",
  openGraph: {
    title: "Frequently Asked Questions | Deficit Planner",
    description:
      "Find detailed answers to 15+ questions about calorie deficits, BMR, TDEE, safe weight loss, and how to use the free Deficit Planner calculator.",
    url: "https://deficit-planner.vercel.app/faq",
    siteName: "Deficit Planner",
    type: "article",
  },
};

const faqs = [
  {
    question: "What is a calorie deficit?",
    answer:
      "A calorie deficit occurs when you consume fewer calories than your body burns over the course of a day. Your body requires a specific amount of energy — measured in calories — to sustain all of its functions, from breathing and circulating blood to walking and exercising. This total energy requirement is called your Total Daily Energy Expenditure (TDEE). When your calorie intake falls below your TDEE, your body is forced to draw on its stored energy reserves, primarily body fat, to make up the difference. Over time, this consistent energy gap produces measurable weight loss. For instance, if your TDEE is 2,400 calories and you eat 1,900 calories each day, you maintain a 500-calorie deficit. Because one pound of body fat stores roughly 3,500 calories, that daily deficit translates to approximately one pound of fat loss per week. Deficit Planner automates this entire calculation so you can focus on execution rather than arithmetic.",
  },
  {
    question: "How does Deficit Planner calculate my daily calories?",
    answer:
      "Deficit Planner follows a three-step process to determine your recommended daily calorie intake. First, it calculates your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, which factors in your age, sex, height, and weight. Second, it multiplies your BMR by an activity multiplier that corresponds to your self-reported activity level, producing your Total Daily Energy Expenditure (TDEE). Third, it subtracts your chosen calorie deficit — typically between 250 and 1,000 calories per day — from your TDEE to arrive at a daily calorie target designed to produce steady, sustainable weight loss. The calculator also enforces safety floors of 1,200 calories for women and 1,500 calories for men to help prevent excessively low intake. All of these computations happen instantly in your browser, and you can adjust any input to see how it changes your results in real time.",
  },
  {
    question: "What is BMR and why does it matter?",
    answer:
      "BMR stands for Basal Metabolic Rate. It represents the number of calories your body needs to perform its most essential life-sustaining functions while at complete rest — functions like breathing, circulating blood, regulating body temperature, and repairing cells. For most people, BMR accounts for 60 to 75 percent of total daily calorie expenditure, making it by far the largest single component of energy use. Understanding your BMR matters because it serves as the foundation for every calorie calculation. Without an accurate BMR estimate, any calorie target you set is essentially a guess. Deficit Planner uses the Mifflin-St Jeor equation to estimate your BMR because peer-reviewed research has consistently shown it to be the most accurate predictive formula available for the general healthy adult population.",
  },
  {
    question: "What is TDEE?",
    answer:
      "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns in an entire day, combining your Basal Metabolic Rate (the energy used at rest), the thermic effect of food (the energy required to digest what you eat, roughly 10 percent of intake), and all physical activity — from fidgeting and walking to structured exercise sessions. TDEE is calculated by multiplying your BMR by an activity factor that reflects how physically active you are on a typical day. Your TDEE is the critical number for weight management: eating below it produces weight loss, eating at it maintains your weight, and eating above it leads to weight gain. Deficit Planner displays your estimated TDEE alongside your deficit target so you can see exactly where your numbers come from. You can learn more about how TDEE is calculated on our how-it-works page.",
  },
  {
    question: "How fast can I safely lose weight?",
    answer:
      "Most reputable health organizations, including the Centers for Disease Control and Prevention (CDC) and the National Institutes of Health (NIH), recommend a weight loss rate of one to two pounds per week for the general adult population. This pace corresponds to a daily calorie deficit of roughly 500 to 1,000 calories. Losing weight more rapidly than this increases the risk of muscle loss, nutritional deficiencies, gallstone formation, metabolic slowdown, and hormonal disruption. Rapid weight loss is also psychologically difficult to sustain, often triggering cycles of severe restriction followed by compensatory overeating. A moderate, consistent approach may feel slower, but research overwhelmingly shows it produces better long-term outcomes. Deficit Planner helps you stay within this safe range by enforcing minimum calorie floors and clearly displaying your projected weekly weight loss rate.",
  },
  {
    question: "What happens if my deficit is too large?",
    answer:
      "An excessively large calorie deficit — sometimes called a crash diet — can cause a cascade of negative health effects. In the short term, you may experience fatigue, irritability, difficulty concentrating, headaches, and persistent hunger. Over weeks and months, a very large deficit can lead to significant muscle loss (your body breaks down muscle tissue for energy when fat stores alone cannot keep up), hormonal disruption (including reduced thyroid function and, in women, loss of menstrual periods), weakened immune function, hair loss, and nutrient deficiencies. Your metabolism may also slow down through a process called adaptive thermogenesis, meaning your body learns to function on fewer calories, which makes future weight loss harder and weight regain easier. Deficit Planner guards against this by never recommending intake below 1,200 calories for women or 1,500 calories for men, but you should also listen to your body and consult a healthcare provider if you experience any of these symptoms.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "Deficit Planner uses the Mifflin-St Jeor equation, which peer-reviewed research has shown to predict resting metabolic rate within approximately 10 percent of laboratory-measured values for most healthy adults. This makes it the most accurate widely available estimation formula, but it remains an estimate. Individual metabolism is influenced by factors that no equation can fully capture, including genetics, hormonal balance, body composition (the ratio of lean mass to fat mass), medication use, sleep quality, stress, and gut microbiome composition. We recommend treating the calculator's output as a well-informed starting point and then adjusting based on real-world results over a two-to-four-week observation period. If you are losing weight faster than projected, increase your intake slightly. If your weight is not changing, reduce your intake by 100 to 200 calories and reassess after another two weeks.",
  },
  {
    question: "Should I eat back exercise calories?",
    answer:
      "In most cases, no. The activity multiplier you select when using Deficit Planner already accounts for your general level of physical activity, including regular exercise. Adding extra calories on top of your TDEE estimate for individual workouts often leads to overcompensation, because fitness trackers, smartwatches, and gym machines frequently overstate exercise calorie burn by 20 to 50 percent. If you perform an unusually intense workout that goes well beyond your normal routine — for example, a two-hour hike when you typically do 30-minute gym sessions — it can be reasonable to eat back roughly half of the estimated additional calories burned. However, for day-to-day consistency, trusting your activity-level setting and sticking to your calculated target is the more reliable approach. If you find yourself consistently hungry or fatigued, consider moving up one activity level in the calculator rather than manually adding exercise calories.",
  },
  {
    question: "Can I use this tool for weight gain?",
    answer:
      "Deficit Planner is designed primarily for weight loss, but the BMR and TDEE estimates it provides are equally valid for anyone looking to gain weight. If your goal is to build muscle or increase body mass, you would simply eat above your TDEE rather than below it. A caloric surplus of 250 to 500 calories per day, combined with a structured resistance training program, is the standard recommendation for lean muscle gain while minimizing unnecessary fat accumulation. While Deficit Planner does not currently include a dedicated surplus mode or muscle-building projections, you can use the TDEE figure it calculates as a reliable baseline and add your desired surplus on top of it. We may introduce a dedicated bulking mode in a future update based on user demand.",
  },
  {
    question: "What is the Mifflin-St Jeor equation?",
    answer:
      "The Mifflin-St Jeor equation is a formula published in 1990 by researchers M.D. Mifflin and S.T. St Jeor that estimates Basal Metabolic Rate based on a person's weight, height, age, and sex. The formulas are: for men, BMR equals (10 multiplied by weight in kilograms) plus (6.25 multiplied by height in centimeters) minus (5 multiplied by age in years) plus 5; for women, the same calculation applies but you subtract 161 instead of adding 5. A 2005 review by the American Dietetic Association compared several predictive equations and concluded that the Mifflin-St Jeor formula was the most reliable for estimating resting metabolic rate in both normal-weight and overweight individuals. This is why Deficit Planner — along with many clinical nutrition professionals — uses it as the default calculation method. You can read a detailed breakdown of the math on our how-it-works page.",
  },
  {
    question: "How do I choose my activity level?",
    answer:
      "Selecting the correct activity level is one of the most important steps in getting an accurate calorie target, and it is also the step where most people make mistakes — usually by overestimating. Here is a practical guide: choose Sedentary if you work a desk job and get little to no structured exercise. Choose Lightly Active if you walk regularly or perform light exercise one to three days per week. Choose Moderately Active if you engage in moderate-intensity exercise such as jogging, cycling, or swimming for 30 to 60 minutes three to five days per week. Choose Very Active if you train intensely six to seven days per week or have a physically demanding job. Choose Extra Active only if you combine a highly physical occupation with daily intense training, such as a construction worker who also trains for competitive sports. When in doubt, select one level lower than you think applies. It is always better to slightly underestimate your activity and eat a little more if needed than to overestimate and create an unsustainably large deficit.",
  },
  {
    question: "Will my calorie needs change as I lose weight?",
    answer:
      "Yes, absolutely. As you lose weight, your body becomes smaller and requires less energy to sustain itself. Both your BMR and your TDEE decrease as your weight drops, which means the calorie deficit that produced results at the beginning of your journey will gradually shrink over time. This is one of the primary reasons weight loss slows down or plateaus after several weeks or months. To maintain a consistent rate of loss, you need to periodically recalculate your calorie target using your updated weight. We recommend re-running the Deficit Planner calculator every two to four weeks, or whenever you lose five or more pounds, to ensure your numbers stay current. The calculator makes this easy — simply enter your new weight and your targets will update instantly. Metabolic adaptation (your body becoming slightly more energy-efficient in response to prolonged dieting) can also play a role, though its effects are generally modest in the context of a moderate deficit.",
  },
  {
    question: "Is 1,200 calories too low?",
    answer:
      "For most adults, 1,200 calories per day is considered the absolute minimum for nutritional adequacy, and many nutrition professionals argue it is too low for sustained dieting without medical supervision. At 1,200 calories, it becomes extremely difficult to meet your body's requirements for essential vitamins, minerals, protein, healthy fats, and fiber through food alone. The risk of nutrient deficiencies, muscle loss, fatigue, hormonal disruption, and metabolic slowdown increases significantly at this intake level. Deficit Planner uses 1,200 calories as a hard floor for women and 1,500 calories as a floor for men — the calculator will never recommend eating below these thresholds regardless of the deficit you select. If your calculated target hits one of these floors, it is a signal that you may be trying to lose weight too quickly. Consider reducing your weekly weight loss goal, increasing your activity level, or consulting a registered dietitian for personalized guidance.",
  },
  {
    question: "How does the weight-loss projection chart work?",
    answer:
      "After you enter your details and calculate your deficit, Deficit Planner generates a visual projection chart that shows your estimated weight over time based on your current calorie target. The chart uses a simple linear model: it takes your daily calorie deficit, converts it to a weekly fat-loss estimate (using the widely accepted figure of 3,500 calories per pound of fat), and plots your projected weight week by week. This gives you a clear visual timeline for reaching your goal weight. It is important to understand that real-world weight loss is rarely perfectly linear — daily fluctuations in water retention, digestive contents, and glycogen stores can cause your actual weight to bounce above and below the projected line. The chart represents the overall trend you can expect if you maintain your deficit consistently. We recommend weighing yourself at the same time each day (ideally first thing in the morning) and comparing weekly averages rather than individual daily readings.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your privacy is a core principle of Deficit Planner. All calculations are performed entirely within your browser using client-side JavaScript — your age, weight, height, sex, and activity level are never transmitted to our servers or any third party. We do not create user accounts, we do not maintain databases of personal health information, and we do not track individual usage patterns. The only data stored locally is your unit preference (metric or imperial), which is saved in your browser's local storage so the calculator remembers your choice on future visits. Our optional feedback widget sends user-submitted comments to a private collection endpoint, but this never includes any calculator inputs. We do use Google AdSense for advertising, which may place cookies on your device to serve relevant ads, but we do not share any personally identifiable information with advertising partners. For complete details on how we handle data, please read our privacy policy.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "40px 20px 60px",
        }}
      >
        <div className="prose">
          <h1>Frequently Asked Questions</h1>

          <p>
            Welcome to the Deficit Planner FAQ. Below you will find detailed
            answers to the most common questions we receive about calorie
            deficits, how our calculator works, and the science behind
            sustainable weight loss. We have organized these questions to take
            you from foundational concepts through practical usage tips. If your
            question is not answered here, please visit our{" "}
            <Link href="/contact" style={{ color: "#4A90D9" }}>
              contact page
            </Link>{" "}
            or email us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>.
          </p>

          {faqs.map((faq, index) => (
            <details
              key={index}
              style={{
                borderBottom: "1px solid #E5E7EB",
                paddingBottom: 4,
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  padding: "16px 0",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  listStyle: "revert",
                }}
              >
                {faq.question}
              </summary>
              <div style={{ padding: "0 0 16px 0", lineHeight: 1.75 }}>
                <p>{faq.answer}</p>
                {index === 3 && (
                  <p>
                    <Link href="/how-it-works" style={{ color: "#4A90D9" }}>
                      Learn more about how TDEE is calculated →
                    </Link>
                  </p>
                )}
                {index === 9 && (
                  <p>
                    <Link href="/how-it-works" style={{ color: "#4A90D9" }}>
                      See a full breakdown of the Mifflin-St Jeor math →
                    </Link>
                  </p>
                )}
                {index === 14 && (
                  <p>
                    <Link href="/privacy" style={{ color: "#4A90D9" }}>
                      Read our full Privacy Policy →
                    </Link>
                  </p>
                )}
              </div>
            </details>
          ))}

          <div
            style={{
              marginTop: 40,
              padding: "24px",
              background: "#F9FAFB",
              borderRadius: 8,
              border: "1px solid #E5E7EB",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Still Have Questions?</h2>
            <p>
              If you did not find the answer you were looking for, we are happy
              to help. Check out these resources or get in touch directly:
            </p>
            <ul>
              <li>
                <Link href="/how-it-works" style={{ color: "#4A90D9" }}>
                  How It Works
                </Link>{" "}
                — a detailed explanation of the formulas and methodology behind
                Deficit Planner.
              </li>
              <li>
                <Link href="/blog/calorie-deficit-guide" style={{ color: "#4A90D9" }}>
                  The Complete Guide to Calorie Deficits
                </Link>{" "}
                — an in-depth article covering everything from the basics to
                advanced strategies.
              </li>
              <li>
                <Link href="/contact" style={{ color: "#4A90D9" }}>
                  Contact Us
                </Link>{" "}
                — reach out by email or use the feedback widget on the homepage.
              </li>
              <li>
                <Link href="/" style={{ color: "#4A90D9" }}>
                  Try the Calculator
                </Link>{" "}
                — head back to the homepage and calculate your personalized
                calorie target for free.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
