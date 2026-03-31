import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Deficit Planner",
  description:
    "Get in touch with the Deficit Planner team. Send business inquiries, report bugs, share feedback, or ask questions about our free calorie deficit calculator.",
  keywords:
    "contact Deficit Planner, calorie calculator support, report a bug, feedback, business inquiries, health and fitness tool contact",
  openGraph: {
    title: "Contact Us | Deficit Planner",
    description:
      "Reach the Deficit Planner team for business inquiries, bug reports, feedback, or general questions about our free calorie deficit calculator.",
    url: "https://deficit-planner.vercel.app/contact",
    siteName: "Deficit Planner",
    type: "article",
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "40px 20px 60px",
        }}
      >
        <div className="prose">
          <h1>Contact Us</h1>

          <p>
            Thank you for using Deficit Planner. We appreciate every person who
            takes the time to reach out, whether you have a question about how
            the calculator works, a suggestion for improving the site, a bug to
            report, or a business proposal you would like to discuss. This page
            explains the best way to get in touch depending on the nature of
            your inquiry, what information to include, and what to expect in
            terms of response times.
          </p>

          {/* ── Business Inquiries ── */}
          <h2>Business Inquiries</h2>
          <p>
            For all business-related communications — including advertising
            opportunities, partnership proposals, media inquiries, sponsorship
            requests, affiliate collaborations, and content licensing — please
            contact us directly by email. We are open to working with brands,
            health and fitness organizations, digital publishers, content
            creators, and technology companies whose values align with our
            mission of providing free, accessible weight-management tools to
            everyone.
          </p>
          <div
            style={{
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: 8,
              padding: "20px 24px",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            <strong>Email us at:</strong>{" "}
            <a
              href="mailto:spinaiceo@gmail.com"
              style={{ color: "#4A90D9", fontWeight: 600 }}
            >
              spinaiceo@gmail.com
            </a>
          </div>
          <p>
            When sending a business inquiry, please include a brief description
            of your organization, the nature of the opportunity, and any
            relevant details that will help us evaluate the proposal quickly.
            Clear, concise emails receive the fastest responses. We review
            every business email carefully and will follow up if there is a
            good fit.
          </p>

          {/* ── Feedback and Suggestions ── */}
          <h2>Feedback and Suggestions</h2>
          <p>
            Your feedback drives the evolution of Deficit Planner. We built
            this tool with the goal of creating the most helpful, user-friendly
            calorie deficit calculator on the web, and we depend on real-world
            input from our users to keep improving. Whether you have a feature
            request, a usability observation, praise for something that works
            well, or constructive criticism, we genuinely want to hear it.
          </p>
          <p>
            The fastest way to share feedback is through our{" "}
            <strong>built-in feedback widget</strong>, which you will find on
            the{" "}
            <Link href="/" style={{ color: "#4A90D9" }}>
              homepage
            </Link>
            . Look for the feedback button in the bottom-right corner of the
            screen. The widget lets you submit your thoughts in seconds without
            composing a formal email. All submissions are reviewed by our team
            on a regular basis and directly influence our development roadmap.
          </p>
          <p>
            Examples of feedback we find especially valuable include
            suggestions for new calculator features (such as macro breakdowns,
            meal planning guidance, or progress tracking), reports about
            confusing interface elements, requests for additional unit systems
            or language support, and ideas for educational blog content. Every
            piece of feedback helps shape the future of Deficit Planner, and
            we read all of it.
          </p>

          {/* ── Bug Reports ── */}
          <h2>Bug Reports</h2>
          <p>
            If you encounter a bug, error, or unexpected behavior while using
            the calculator or browsing the site, we would greatly appreciate a
            detailed report so we can investigate and resolve the issue
            promptly. Bugs can range from calculation errors and broken links
            to display problems on specific devices or browsers.
          </p>
          <p>
            When reporting a bug, please include as much of the following
            information as possible to help us reproduce the problem:
          </p>
          <ul>
            <li>
              A clear description of what happened versus what you expected to
              happen.
            </li>
            <li>
              The device and browser you were using (for example, iPhone 15
              with Safari, or a Windows laptop with Chrome).
            </li>
            <li>
              The approximate date and time the issue occurred.
            </li>
            <li>
              Screenshots or screen recordings, if available.
            </li>
            <li>
              The specific inputs you entered into the calculator, if the bug
              relates to results or calculations.
            </li>
          </ul>
          <p>
            You can submit bug reports through the feedback widget on the
            homepage or by sending an email to{" "}
            <a href="mailto:spinaiceo@gmail.com" style={{ color: "#4A90D9" }}>
              spinaiceo@gmail.com
            </a>{" "}
            with the subject line &quot;Bug Report.&quot; We take every report
            seriously and aim to address confirmed bugs as quickly as our
            development schedule allows.
          </p>

          {/* ── General Questions ── */}
          <h2>General Questions</h2>
          <p>
            If you have general questions about how the calorie deficit
            calculator works, the formulas behind the numbers, or how to
            interpret your results, we recommend starting with our{" "}
            <Link href="/faq" style={{ color: "#4A90D9" }}>
              Frequently Asked Questions
            </Link>{" "}
            page. It provides detailed answers to the most common questions we
            receive, covering topics such as BMR, TDEE, the Mifflin-St Jeor
            equation, activity level selection, safe weight loss rates, and
            data privacy.
          </p>
          <p>
            You may also find helpful information in our{" "}
            <Link href="/how-it-works" style={{ color: "#4A90D9" }}>
              How It Works
            </Link>{" "}
            guide, which walks through the entire calculation methodology step
            by step, or in our blog articles such as the{" "}
            <Link
              href="/blog/calorie-deficit-guide"
              style={{ color: "#4A90D9" }}
            >
              Complete Guide to Calculating Your Calorie Deficit
            </Link>{" "}
            and our article on{" "}
            <Link
              href="/blog/safe-weight-loss-rate"
              style={{ color: "#4A90D9" }}
            >
              Safe Rates of Weight Loss
            </Link>
            .
          </p>
          <p>
            If your question is not covered by any of these resources, feel
            free to email us at{" "}
            <a href="mailto:spinaiceo@gmail.com" style={{ color: "#4A90D9" }}>
              spinaiceo@gmail.com
            </a>
            . Please include enough context for us to understand your question
            fully, and we will do our best to provide a clear and helpful
            response.
          </p>

          {/* ── Response Times ── */}
          <h2>Response Times</h2>
          <p>
            Deficit Planner is an independent project maintained by a small
            team, and while we are committed to being responsive, reply times
            may vary depending on the volume of messages and the complexity of
            your inquiry. Here is a general guide to what you can expect:
          </p>
          <ul>
            <li>
              <strong>Business inquiries:</strong> We aim to respond within two
              to three business days.
            </li>
            <li>
              <strong>Bug reports:</strong> Confirmed bugs are prioritized in
              our development queue. You may receive an acknowledgment within a
              few days, with a fix following as soon as possible.
            </li>
            <li>
              <strong>Feedback and feature requests:</strong> We review widget
              submissions and feedback emails regularly. While we may not reply
              individually to every message, rest assured that all feedback is
              read and considered as part of our ongoing development process.
            </li>
            <li>
              <strong>General questions:</strong> If your question is not
              covered by the{" "}
              <Link href="/faq" style={{ color: "#4A90D9" }}>
                FAQ
              </Link>
              , we typically respond within three to five business days.
            </li>
          </ul>

          {/* ── Stay Connected ── */}
          <h2>Stay Connected</h2>
          <p>
            We are continually working to improve Deficit Planner — adding new
            features, publishing educational content, and refining the
            calculator based on the feedback we receive from users like you.
            Bookmark the site and check back regularly to see what is new. We
            appreciate your support and your trust in Deficit Planner as a
            resource on your health and fitness journey.
          </p>
          <p>
            Ready to get started?{" "}
            <Link href="/" style={{ color: "#4A90D9", fontWeight: 600 }}>
              Try the free calorie deficit calculator now →
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
