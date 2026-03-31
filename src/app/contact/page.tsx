import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Deficit Planner",
  description:
    "Get in touch with the Deficit Planner team. Send business inquiries, report bugs, share feedback, or ask questions about our free calorie deficit calculator.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>Contact Us</h1>
          <p>
            Thank you for using Deficit Planner. We value every person who takes the
            time to reach out, whether you have a question about how the calculator
            works, a suggestion for improving the site, or a business proposal you
            would like to discuss. This page outlines all the ways you can get in
            touch with our team and what to expect when you do.
          </p>

          <h2>Business Inquiries</h2>
          <p>
            For business-related communications, including advertising
            opportunities, partnership proposals, media inquiries, sponsorship
            requests, and collaboration ideas, please reach out directly via email.
            We are open to working with brands, health and fitness organizations,
            content creators, and technology companies whose values align with our
            mission of making weight management tools accessible and free for
            everyone.
          </p>
          <p
            style={{
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: 8,
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <strong>Email us at:</strong>{" "}
            <a
              href="mailto:spinaiceo@gmail.com"
              style={{ color: "#4A90D9", fontWeight: 600 }}
            >
              spinaiceo@gmail.com
            </a>
          </p>
          <p>
            When sending a business inquiry, please include a brief description of
            your organization, the nature of the opportunity, and any relevant
            details that will help us understand your proposal. We strive to respond
            to all business emails within two to three business days. Please note
            that due to the volume of messages we receive, we may not be able to
            reply to every inquiry, but we read each one carefully and will follow up
            if there is a good fit.
          </p>

          <h2>Feedback and Suggestions</h2>
          <p>
            Your feedback is incredibly important to us. Deficit Planner was built
            with the goal of creating the most helpful, user-friendly calorie
            deficit calculator on the web, and we rely on input from real users to
            continue improving. Whether you have a feature request, a usability
            suggestion, or general thoughts about your experience, we want to hear
            from you.
          </p>
          <p>
            The easiest and fastest way to share feedback is through our{" "}
            <strong>built-in feedback widget</strong>. You will find it on the
            homepage of Deficit Planner — look for the feedback button in the
            bottom-right corner of the screen. The widget allows you to submit your
            thoughts quickly without needing to compose an email. You can share what
            you liked, what could be better, or any ideas for new features. All
            feedback submitted through the widget is reviewed by our team on a
            regular basis.
          </p>
          <p>
            Some examples of feedback we find especially helpful include suggestions
            for new calculator features (such as macro breakdowns, meal planning
            integration, or progress tracking), reports on confusing user interface
            elements, requests for additional unit systems or languages, and ideas
            for new blog topics or educational content. Every piece of feedback
            helps shape the future direction of Deficit Planner.
          </p>

          <h2>Bug Reports</h2>
          <p>
            If you encounter a bug, error, or unexpected behavior while using the
            calculator or browsing the site, we would greatly appreciate a report so
            we can investigate and fix the issue. Bugs can range from calculation
            errors and broken links to display problems on certain devices or
            browsers.
          </p>
          <p>
            When reporting a bug, please include as much detail as possible to help
            us reproduce and diagnose the problem. The following information is
            particularly useful:
          </p>
          <ul>
            <li>A description of what happened versus what you expected to happen</li>
            <li>The device and browser you were using (e.g., iPhone 15 with Safari, Windows laptop with Chrome)</li>
            <li>The approximate time the issue occurred</li>
            <li>Screenshots or screen recordings, if possible</li>
            <li>The inputs you entered into the calculator, if the bug is related to results</li>
          </ul>
          <p>
            You can report bugs through the feedback widget on the homepage or by
            sending an email to{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a> with the
            subject line &quot;Bug Report.&quot; We take every report seriously and
            aim to address confirmed bugs as quickly as our development schedule
            allows.
          </p>

          <h2>General Questions</h2>
          <p>
            If you have general questions about how the calorie deficit calculator
            works, the formulas we use, or how to interpret your results, we
            recommend starting with our{" "}
            <Link href="/faq" style={{ color: "#4A90D9" }}>
              Frequently Asked Questions (FAQ)
            </Link>{" "}
            page. It covers the most common questions we receive, including how BMR
            and TDEE are calculated, what the Mifflin-St Jeor equation is, how to
            choose the right activity level, and what a safe rate of weight loss
            looks like.
          </p>
          <p>
            You may also find helpful information in our blog articles. Our{" "}
            <Link href="/blog/calorie-deficit-guide" style={{ color: "#4A90D9" }}>
              Complete Guide to Calculating Your Calorie Deficit
            </Link>{" "}
            walks through the entire process step by step, while our article on{" "}
            <Link href="/blog/safe-weight-loss-rate" style={{ color: "#4A90D9" }}>
              Safe Rates of Weight Loss
            </Link>{" "}
            explains what the research says about how fast you should aim to lose
            weight.
          </p>
          <p>
            If your question is not covered by the FAQ or blog, feel free to email us
            at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>. Please
            include enough context for us to understand your question fully, and we
            will do our best to provide a clear and helpful response.
          </p>

          <h2>Response Times</h2>
          <p>
            Deficit Planner is a small, independent project, and while we are
            committed to being responsive, please understand that reply times may
            vary. For business inquiries, you can generally expect a response within
            two to three business days. For bug reports and feature requests
            submitted through the feedback widget, we review submissions regularly
            but may not reply individually to each one. Rest assured that all
            feedback is read and considered as part of our ongoing development
            process.
          </p>

          <h2>Stay Connected</h2>
          <p>
            We are continually working to improve Deficit Planner, adding new
            features, publishing educational content, and refining the calculator
            based on user feedback. Bookmark the site and check back often to see
            what is new. We appreciate your support and your trust in Deficit
            Planner as a tool to help you on your health and fitness journey.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
