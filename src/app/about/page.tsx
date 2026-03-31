import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Deficit Planner | Free Calorie Calculator",
  description:
    "Discover Deficit Planner, a free science-backed calorie deficit calculator using the Mifflin-St Jeor equation. No sign-up required. Built by SPINAI.",
  keywords:
    "calorie deficit calculator, free TDEE calculator, Mifflin-St Jeor, BMR calculator, weight loss planner, calorie counting tool, energy expenditure, fat loss calculator, diet planning, nutrition calculator",
  openGraph: {
    title: "About Deficit Planner | Free Calorie Deficit Calculator",
    description:
      "Learn about Deficit Planner, a free science-backed calorie deficit calculator. No sign-up, no fees, no hidden features. Built on the Mifflin-St Jeor equation.",
    url: "https://deficit-planner.vercel.app/about",
    siteName: "Deficit Planner",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main
        style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}
      >
        <article className="prose">
          <h1>About Deficit Planner</h1>

          <p>
            Deficit Planner is a free, science-backed calorie deficit calculator
            designed to help you understand exactly how many calories you need to
            eat each day to reach your weight loss goals. Unlike many fitness
            tools that hide their best features behind paywalls or require you to
            create yet another online account before you can access basic
            information, Deficit Planner provides every calculation, chart, and
            recommendation completely free of charge. We believe that access to
            accurate nutritional information should never be gated by a
            subscription fee, a credit card number, or a mandatory email
            registration.
          </p>

          <p>
            Whether you are taking your first steps toward a healthier body
            composition or you are a seasoned athlete fine-tuning your nutrition
            for competition, Deficit Planner offers a straightforward,
            evidence-based starting point. The tool strips away the noise, the
            marketing gimmicks, and the conflicting advice that makes online
            nutrition so confusing, and replaces all of it with clear numbers
            grounded in peer-reviewed metabolic research.
          </p>

          <section>
            <h2>What Is Deficit Planner and What Problem Does It Solve?</h2>

            <p>
              At its core, Deficit Planner is a calculator that estimates your
              Total Daily Energy Expenditure (TDEE) and then shows you what a
              safe, sustainable calorie deficit looks like for your specific
              body. You enter basic information — your age, biological sex,
              height, current weight, and general activity level — and the tool
              instantly computes your Basal Metabolic Rate (BMR) using the
              Mifflin-St Jeor equation, one of the most widely validated
              formulas in sports nutrition and clinical dietetics research. From
              there, it applies a scientifically established activity multiplier
              to estimate the total number of calories you burn in a typical
              day.
            </p>

            <p>
              The problem Deficit Planner solves is deceptively simple but
              profoundly important: most people who want to lose weight have no
              reliable way of knowing how many calories they actually need. The
              internet is overflowing with conflicting calculators that use
              outdated formulas, produce wildly different numbers, or bury their
              methodology so deeply that you have no way of evaluating whether
              the results are trustworthy. Some tools use the Harris-Benedict
              equation from 1919, which has been shown in modern research to
              overestimate calorie needs by five to fifteen percent in many
              populations. Others use proprietary algorithms that cannot be
              independently verified.
            </p>

            <p>
              Deficit Planner cuts through that confusion. We use a single,
              transparent formula — the Mifflin-St Jeor equation — because the
              scientific consensus, including guidance from the Academy of
              Nutrition and Dietetics, identifies it as the most accurate
              predictive equation for estimating resting metabolic rate in both
              normal-weight and overweight adults. Every number you see in
              Deficit Planner can be reproduced with a pencil and paper if you
              know the formula, and we publish the formula right on our{" "}
              <a href="/how-it-works">How It Works</a> page so you can verify
              it yourself.
            </p>

            <p>
              The tool then projects your weight over time under different
              deficit scenarios, giving you a visual chart that makes it easy to
              see how small daily changes compound into significant results over
              weeks and months. Whether you want to lose half a pound per week
              or aim for a more aggressive two-pound-per-week pace, Deficit
              Planner helps you see the realistic timeline and calorie targets
              involved — no guesswork, no wishful thinking, just math.
            </p>
          </section>

          <section>
            <h2>Who Is Deficit Planner Built For?</h2>

            <p>
              Deficit Planner was designed to serve a broad range of users, from
              complete beginners to experienced health professionals. Here is a
              closer look at the groups who benefit most from the tool:
            </p>

            <ul>
              <li>
                <strong>Dieters and people starting a weight loss journey.</strong>{" "}
                If you have decided to lose weight but feel overwhelmed by the
                sheer volume of contradictory advice online, Deficit Planner
                gives you a clear, evidence-based starting point. You do not
                need to understand the underlying science to use it — just enter
                your details and the tool does the rest. However, if you do want
                to learn the science, every aspect of the calculation is
                explained transparently.
              </li>
              <li>
                <strong>Fitness enthusiasts and gym-goers.</strong> Whether you
                are cutting for a bodybuilding show, leaning out for summer, or
                simply trying to shed a few pounds while maintaining your
                training performance, accurate TDEE estimation is the foundation
                of intelligent nutrition planning. Deficit Planner provides that
                foundation without asking you to pay for a premium subscription
                to an app you will only use for twelve weeks.
              </li>
              <li>
                <strong>Registered dietitians and nutritionists.</strong>{" "}
                Professionals in clinical and private-practice nutrition settings
                can use Deficit Planner as a quick reference tool during client
                consultations. Because the tool uses the Mifflin-St Jeor
                equation — the same formula recommended in clinical practice
                guidelines — the results align with what practitioners would
                calculate manually. The interactive weight projection chart is
                also a useful visual aid for helping clients understand realistic
                timelines.
              </li>
              <li>
                <strong>Personal trainers and coaches.</strong> Trainers who
                provide basic nutrition guidance alongside exercise programming
                can point their clients to Deficit Planner as a trustworthy,
                free resource. It saves time during sessions and gives clients a
                tool they can return to independently as their weight and goals
                change over the course of a training program.
              </li>
              <li>
                <strong>Students and educators.</strong> Anyone studying
                nutrition science, exercise physiology, or public health can use
                Deficit Planner as a practical demonstration of how BMR, TDEE,
                and energy balance calculations work in practice. The
                transparent methodology makes it a useful teaching tool.
              </li>
            </ul>
          </section>

          <section>
            <h2>Why Deficit Planner Is Valuable</h2>

            <h3>Completely Free with No Sign-Up Required</h3>

            <p>
              Many calorie calculators online follow a frustrating pattern: they
              let you enter your details, show you a tantalizing preview of your
              results, and then ask you to create an account or start a free
              trial before you can see your actual numbers. Deficit Planner does
              none of that. The moment you land on the site, you can use every
              feature without entering an email address, creating a password, or
              providing any personal information whatsoever. Your data stays in
              your browser and is never transmitted to our servers. There is no
              account system, no login wall, and no premium tier.
            </p>

            <h3>Science-Backed Methodology</h3>

            <p>
              Deficit Planner is built on the Mifflin-St Jeor equation,
              published in 1990 by researchers M.D. Mifflin and S.T. St Jeor
              and validated in dozens of subsequent studies across diverse
              populations. A landmark comparative review published in the{" "}
              <em>Journal of the American Dietetic Association</em> in 2005
              evaluated multiple predictive equations and concluded that the
              Mifflin-St Jeor formula was the most likely to estimate resting
              metabolic rate to within ten percent of measured values. This is
              not a proprietary black box — it is the same formula used in
              hospitals, university nutrition programs, and clinical research
              facilities around the world.
            </p>

            <h3>Transparent and Educational</h3>

            <p>
              We do not just give you a number and send you on your way. Deficit
              Planner explains every step of the calculation process, shows you
              the formulas being used, and helps you understand the relationship
              between your BMR, your activity level, and the deficit required to
              reach your goals. We believe that understanding why a number is
              what it is makes you far more likely to use it effectively and to
              recognize when you need to adjust your approach based on
              real-world results.
            </p>
          </section>

          <section>
            <h2>The Science Behind the Calculator</h2>

            <h3>Basal Metabolic Rate (BMR)</h3>

            <p>
              Your Basal Metabolic Rate is the number of calories your body
              burns at complete rest just to maintain essential life functions —
              breathing, circulating blood, regulating body temperature,
              producing and repairing cells, and supporting brain function. BMR
              typically accounts for sixty to seventy-five percent of the total
              calories a person burns in a day, making it the single largest
              component of your energy expenditure. This is why accurate BMR
              estimation is so important for anyone trying to manage their
              weight.
            </p>

            <p>
              The Mifflin-St Jeor formulas differ slightly for males and females
              to account for well-documented differences in average body
              composition. Males tend to carry more lean muscle mass relative to
              body weight, and muscle tissue is more metabolically active than
              fat tissue, which means males generally have a higher BMR at the
              same weight and height:
            </p>

            <ul>
              <li>
                <strong>Males:</strong> BMR = (10 x weight in kg) + (6.25 x
                height in cm) - (5 x age in years) + 5
              </li>
              <li>
                <strong>Females:</strong> BMR = (10 x weight in kg) + (6.25 x
                height in cm) - (5 x age in years) - 161
              </li>
            </ul>

            <h3>Total Daily Energy Expenditure (TDEE)</h3>

            <p>
              Once your BMR is calculated, Deficit Planner multiplies it by an
              activity factor that reflects how much additional energy you burn
              through daily movement and structured exercise. These activity
              multipliers are derived from decades of exercise physiology
              research and range from 1.2 for sedentary individuals to 1.9 for
              those with extremely demanding physical lifestyles. The result is
              your TDEE — the total number of calories you need each day to
              maintain your current weight. Eating below this number creates a
              deficit; eating above it creates a surplus.
            </p>

            <h3>The Calorie Deficit</h3>

            <p>
              Weight management is fundamentally governed by energy balance.
              When you consume fewer calories than your body expends, you create
              a calorie deficit, and your body turns to stored energy —
              primarily adipose tissue (body fat) — to make up the difference.
              This principle is well established in metabolic research and forms
              the basis of virtually every evidence-based weight loss program in
              the world. One pound of body fat contains approximately 3,500
              calories of stored energy, so a daily deficit of 500 calories
              translates to roughly one pound of fat loss per week. Deficit
              Planner lets you visualize this relationship and choose a deficit
              level that fits your lifestyle, your goals, and your comfort
              level.
            </p>
          </section>

          <section>
            <h2>Our Mission and Commitment to Accuracy</h2>

            <p>
              Our mission is straightforward: make reliable calorie and
              weight-loss information accessible to everyone, everywhere,
              without barriers. The internet is full of conflicting advice,
              dubious supplements, miracle diets, and calculators that produce
              wildly different numbers depending on which outdated formula they
              happen to use. We wanted to cut through that noise and build
              something that people could genuinely trust.
            </p>

            <p>
              We take accuracy seriously. Every formula and multiplier used in
              Deficit Planner is sourced from peer-reviewed scientific
              literature. We regularly review our calculations against the
              latest published research to ensure they remain current and
              reliable. That said, we are transparent about the inherent
              limitations of any predictive calculator: no equation can
              perfectly predict your individual metabolism. Genetics, hormonal
              profile, medication use, sleep quality, stress levels, gut
              microbiome composition, and many other variables influence how
              your body processes energy in ways that no formula can fully
              capture.
            </p>

            <p>
              Deficit Planner provides an excellent starting estimate — one that
              is as accurate as any tool available outside of a clinical
              metabolic laboratory — but we always recommend using your results
              as a starting point and then adjusting based on real-world
              progress over the first two to four weeks. If you are losing
              weight faster than projected, you may want to eat slightly more.
              If progress is slower than expected, a modest reduction may be
              warranted. The calculator gives you the starting coordinates; your
              body provides the ongoing feedback.
            </p>

            <p>
              We also emphasize safety at every level. The tool will never
              recommend a calorie intake below 1,200 calories per day for women
              or 1,500 calories per day for men, as going below these thresholds
              without medical supervision significantly increases the risk of
              nutrient deficiencies, muscle loss, metabolic adaptation, and
              other health complications. If you have a medical condition, take
              medication that affects your metabolism, or are significantly
              underweight or overweight, we strongly encourage you to consult a
              qualified healthcare provider before making changes to your diet.
            </p>
          </section>

          <section>
            <h2>Who Built Deficit Planner?</h2>

            <p>
              Deficit Planner was built by <strong>SPINAI</strong>, a focused
              development team dedicated to creating practical, user-friendly
              web applications that solve real everyday problems. We are
              passionate about combining clean software engineering with
              evidence-based health science. Our team includes developers with
              backgrounds in front-end engineering, data visualization, and a
              genuine personal commitment to fitness and nutrition.
            </p>

            <p>
              We built Deficit Planner because we wanted a tool we would
              actually use ourselves — something fast, accurate, visually clear,
              and free of the clutter, pop-ups, and aggressive upselling that
              plagues so many health-related websites. Every design decision,
              from the clean layout to the interactive projection chart, was
              made with real users in mind. We tested the tool with dieters,
              trainers, and nutrition students before launching it, and their
              feedback shaped the product you see today.
            </p>
          </section>

          <section>
            <h2>Why Is Deficit Planner Free?</h2>

            <p>
              We keep Deficit Planner free because SPINAI&apos;s founding
              mission is to democratize access to health and wellness tools.
              Accurate calorie information should not be a luxury reserved for
              people who can afford monthly app subscriptions or personal
              nutrition coaching. The barrier to healthier living should be as
              low as possible, and for many people, that means zero dollars and
              zero friction.
            </p>

            <p>
              The tool is supported by non-intrusive advertising through
              partners like Google AdSense, which allows us to cover hosting,
              development, and maintenance costs without ever asking users to
              pay. We are committed to keeping advertisements respectful and
              unobtrusive — you will never encounter pop-ups that block the
              calculator, auto-playing video ads, or interstitials that
              interrupt your experience. We will never lock core features behind
              a premium tier. Every calculation, every chart, every
              recommendation is available to every visitor from the moment they
              land on the site, and it will stay that way.
            </p>
          </section>

          <section>
            <h2>Get in Touch</h2>

            <p>
              Have questions, feedback, feature requests, or suggestions for
              improvement? We would love to hear from you. Your input directly
              shapes the future of Deficit Planner — many of the features and
              improvements we have shipped since launch came directly from user
              feedback, and we genuinely appreciate every message we receive.
            </p>

            <p>
              Reach out to us at{" "}
              <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a> and
              we will get back to you as soon as we can. Whether you have found
              a bug, want to suggest a new feature, have a question about the
              science behind the tool, or just want to share your weight loss
              progress, we are always happy to hear from the people who use what
              we build.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
