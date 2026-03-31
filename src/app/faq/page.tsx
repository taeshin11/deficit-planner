import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Deficit Planner",
  description:
    "Get answers to common questions about calorie deficits, BMR, TDEE, safe weight loss rates, activity levels, and how to use the Deficit Planner calculator.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>Frequently Asked Questions</h1>

          <p>
            Below you will find answers to the most common questions we receive
            about Deficit Planner, calorie deficits, and weight loss in general.
            If your question is not answered here, feel free to reach out to us
            at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>.
          </p>

          <h2>1. What is a calorie deficit?</h2>

          <p>
            A calorie deficit occurs when you consume fewer calories than your
            body burns in a day. Your body needs a certain amount of energy to
            maintain its weight — this is known as your Total Daily Energy
            Expenditure (TDEE). When you eat less than your TDEE, your body must
            make up the energy shortfall by tapping into stored reserves,
            primarily body fat. Over time, this consistent energy gap leads to
            weight loss. For example, if your TDEE is 2,400 calories and you eat
            1,900 calories per day, you are in a 500-calorie deficit. Since one
            pound of body fat stores approximately 3,500 calories, that
            500-calorie daily deficit would result in roughly one pound of fat
            loss per week.
          </p>

          <h2>2. What is BMR and why does it matter?</h2>

          <p>
            BMR stands for Basal Metabolic Rate. It represents the number of
            calories your body burns at complete rest to perform essential
            life-sustaining functions such as breathing, circulating blood,
            maintaining body temperature, and repairing cells. Your BMR typically
            accounts for 60 to 75 percent of your total daily calorie burn,
            making it by far the largest component of your energy expenditure.
            Understanding your BMR matters because it forms the foundation of
            any accurate calorie target. Without knowing your BMR, it is
            impossible to estimate how many calories you actually need. Deficit
            Planner calculates your BMR using the Mifflin-St Jeor equation,
            which research has shown to be the most accurate predictive formula
            for the general population.
          </p>

          <h2>3. What is TDEE and how is it different from BMR?</h2>

          <p>
            TDEE stands for Total Daily Energy Expenditure. While BMR measures
            only the calories burned at rest, TDEE includes every calorie you
            burn throughout the entire day — your resting metabolism, the energy
            used to digest food (known as the thermic effect of food), and all
            physical activity from walking to intense exercise. TDEE is
            calculated by multiplying your BMR by an activity factor that
            reflects your overall level of daily movement. Your TDEE is the
            number you actually need to eat below in order to lose weight. If you
            base your deficit on BMR alone, you would be creating a much larger
            deficit than intended, which could be unhealthy and unsustainable.
          </p>

          <h2>4. What is a safe rate of weight loss?</h2>

          <p>
            Most major health organizations, including the Centers for Disease
            Control and Prevention (CDC), recommend losing weight at a rate of
            one to two pounds per week. This pace corresponds to a daily calorie
            deficit of roughly 500 to 1,000 calories. Losing weight faster than
            this increases the risk of muscle loss, nutrient deficiencies,
            gallstones, and metabolic slowdown. It can also be psychologically
            unsustainable, leading to cycles of extreme restriction followed by
            overeating. A slower, more moderate approach may take longer but is
            far more likely to result in lasting results. Deficit Planner
            enforces minimum calorie intake thresholds — 1,200 for women and
            1,500 for men — to help ensure your deficit stays within a safe range.
          </p>

          <h2>5. How do I choose the right activity level?</h2>

          <p>
            Choosing the correct activity level is one of the most important
            steps in getting an accurate result. A common mistake is
            overestimating activity. Here is a general guide: select
            &quot;Sedentary&quot; if you work a desk job and do not exercise
            regularly. Choose &quot;Lightly active&quot; if you walk regularly or
            do light exercise one to three days per week. Select &quot;Moderately
            active&quot; if you do moderate exercise like jogging, cycling, or
            swimming three to five days per week for 30 to 60 minutes. Choose
            &quot;Very active&quot; if you train hard six to seven days per week.
            Select &quot;Extra active&quot; only if you have an extremely
            physical job combined with daily intense training. When in doubt,
            choose one level lower than you think. It is better to underestimate
            and eat slightly more than to overestimate and create too large a
            deficit.
          </p>

          <h2>6. How accurate is the calculator?</h2>

          <p>
            The Mifflin-St Jeor equation used by Deficit Planner has been shown
            in research to predict resting metabolic rate within about 10 percent
            of measured values for most healthy adults. This makes it the most
            accurate widely available predictive equation, but it is still an
            estimate. Individual metabolism is influenced by factors that no
            equation can fully capture, including genetics, hormonal balance,
            body composition (the ratio of muscle to fat), medications, sleep
            quality, and stress levels. We recommend using the calculator&apos;s
            output as a well-informed starting point and then adjusting based on
            your real-world results over two to four weeks. If you are losing
            weight faster than expected, eat a little more. If your weight is not
            changing, reduce your intake by 100 to 200 calories and reassess.
          </p>

          <h2>7. Why does weight loss slow down over time? What about plateaus?</h2>

          <p>
            Weight loss plateaus are extremely common and happen for several
            reasons. First, as you lose weight, your body becomes smaller and
            therefore burns fewer calories — both at rest and during activity.
            This means the deficit that worked at the start gradually shrinks
            unless you adjust your intake or increase your activity. Second, your
            body can undergo metabolic adaptation, sometimes called &quot;adaptive
            thermogenesis,&quot; where it becomes slightly more efficient at
            using energy in response to prolonged calorie restriction. Third,
            short-term fluctuations in water weight caused by sodium intake,
            carbohydrate consumption, hormonal cycles, and stress can mask
            ongoing fat loss for days or even weeks. If you hit a plateau, do
            not panic. Verify that you are accurately tracking your intake,
            consider a small additional reduction of 100 to 200 calories, and
            give it at least two more weeks before concluding that your progress
            has truly stalled.
          </p>

          <h2>8. Can I switch between metric and imperial units?</h2>

          <p>
            Yes. Deficit Planner includes a unit toggle that lets you switch
            between metric (kilograms and centimeters) and imperial (pounds and
            inches) at any time. Your preference is saved in your browser&apos;s
            local storage, so the next time you visit the site, the calculator
            will default to whichever unit system you used last. All conversions
            are handled automatically — you do not need to do any math yourself.
            Simply toggle the switch and enter your values in whichever system
            you are most comfortable with.
          </p>

          <h2>9. Is my data private? What happens to the information I enter?</h2>

          <p>
            Your privacy is important to us. All calculations performed by
            Deficit Planner happen directly in your browser. We do not create
            user accounts, and we do not store your age, weight, height, or any
            other personal health information on our servers. The only data
            stored locally is your unit preference (metric or imperial), which is
            kept in your browser&apos;s local storage and never transmitted
            anywhere. We do use a Google Sheets webhook for collecting optional
            feedback submitted through our contact form, but this does not
            include any calculator inputs. Our advertising partners, Adsterra and
            Google AdSense, may use cookies to serve relevant ads, but we do not
            share any personally identifiable information with them. For full
            details, please read our <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>10. Should I talk to a doctor before using this tool?</h2>

          <p>
            While Deficit Planner is safe for general informational use, we
            strongly recommend consulting a healthcare provider before starting
            any weight loss program, especially if any of the following apply to
            you: you have been diagnosed with diabetes, heart disease, kidney
            disease, or any other chronic condition; you take medications that
            affect your metabolism or appetite; you have a history of eating
            disorders; you are pregnant or breastfeeding; you are under 18 years
            old; or you plan to follow a very low calorie diet (below 1,200
            calories per day). A doctor or registered dietitian can provide
            personalized guidance that no online calculator can replace. Deficit
            Planner is a helpful educational tool, but it is not a substitute for
            professional medical advice.
          </p>

          <h2>11. Does Deficit Planner account for exercise calories?</h2>

          <p>
            The activity factor you select when using the calculator is intended
            to account for your overall level of physical activity, including
            structured exercise. This means your TDEE estimate already includes
            an approximation of the calories you burn through workouts. We
            generally advise against adding extra calories for individual
            exercise sessions on top of your TDEE, as this often leads to
            overestimation. Fitness trackers and gym machines frequently
            overstate calories burned during exercise by 20 to 50 percent. If
            you do want to account for a particularly intense workout, adding
            back only half of the estimated calories burned is a safer approach.
          </p>

          <h2>12. Can I use Deficit Planner to gain weight or build muscle?</h2>

          <p>
            Deficit Planner is specifically designed for weight loss and calorie
            deficit calculation. However, the BMR and TDEE estimates it provides
            are equally useful if your goal is to gain weight. To gain weight,
            you would eat above your TDEE instead of below it. A surplus of 250
            to 500 calories per day, combined with resistance training, is the
            standard recommendation for lean muscle gain. While the tool does not
            currently include a dedicated surplus mode or muscle-building
            projections, you can still use the TDEE number it provides as a
            reliable baseline for planning a caloric surplus.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
