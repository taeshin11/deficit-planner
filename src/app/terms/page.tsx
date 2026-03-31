import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Deficit Planner",
  description:
    "Read the Terms of Service for Deficit Planner, the free calorie deficit calculator. Understand your rights, limitations, and our policies.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>Terms of Service</h1>
          <p>
            <strong>Last Updated: March 30, 2026</strong>
          </p>
          <p>
            Welcome to Deficit Planner. These Terms of Service (&quot;Terms&quot;) govern your
            access to and use of the Deficit Planner website, located at
            deficit-planner.vercel.app (the &quot;Site&quot;), including all content,
            features, tools, and services offered through the Site. By accessing or
            using Deficit Planner, you agree to be bound by these Terms. If you do
            not agree with any part of these Terms, you must stop using the Site
            immediately.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By visiting, browsing, or using Deficit Planner in any capacity, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms of Service, as well as our Privacy Policy. These Terms
            constitute a legally binding agreement between you (&quot;User,&quot;
            &quot;you,&quot; or &quot;your&quot;) and Deficit Planner (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). We reserve the right to update or
            modify these Terms at any time without prior notice. Your continued use
            of the Site following any changes constitutes acceptance of those
            changes. We encourage you to review this page periodically to stay
            informed about our terms and conditions.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Deficit Planner is a free online calorie deficit calculator that allows
            users to estimate their Basal Metabolic Rate (BMR), Total Daily Energy
            Expenditure (TDEE), and the daily calorie intake needed to achieve a
            specific weight-loss goal within a chosen timeframe. The calculator
            provides projected weight-loss charts and personalized calorie targets
            based on the data you enter. The tool is designed to be educational and
            informational, offering general guidance to support healthy
            weight-management decisions.
          </p>

          <h2>3. Educational Purpose Only — Not Medical Advice</h2>
          <p>
            The information and results provided by Deficit Planner are for
            educational and informational purposes only. Nothing on this Site should
            be interpreted as medical advice, dietary prescription, or a substitute
            for professional healthcare guidance. The calorie estimates and
            projections are based on widely used formulas, including the Mifflin-St
            Jeor equation, and represent general approximations that may not account
            for your individual health conditions, medications, metabolic variations,
            or other personal factors.
          </p>
          <p>
            You should always consult a qualified healthcare provider, registered
            dietitian, or medical professional before starting any new diet,
            exercise program, or weight-loss plan, especially if you have
            pre-existing health conditions, are pregnant or nursing, are under 18
            years of age, or take medications that affect your metabolism. Deficit
            Planner disclaims all liability for any decisions you make based on the
            information provided through the calculator or any content on this Site.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            When using Deficit Planner, you agree to provide accurate and truthful
            information in the calculator inputs. You acknowledge that inaccurate
            inputs will produce inaccurate results. You agree to use the Site and
            its tools responsibly and in accordance with these Terms. You must not
            use the Site for any unlawful purpose, attempt to reverse-engineer or
            extract source code from the Site, or interfere with or disrupt the
            functionality of the Site or its servers. You are responsible for
            ensuring that your use of the Site complies with all applicable local,
            national, and international laws and regulations.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on Deficit Planner, including but not limited to text,
            graphics, logos, icons, images, software code, calculator algorithms,
            blog articles, page designs, and the overall look and feel of the Site,
            is the property of Deficit Planner and its creator, SPINAI, and is
            protected by applicable copyright, trademark, and intellectual property
            laws. You may not reproduce, distribute, modify, create derivative works
            from, publicly display, or otherwise exploit any content from this Site
            without our express written permission. Limited use is permitted for
            personal, non-commercial purposes such as sharing a link to the Site or
            referencing our content with proper attribution.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Deficit Planner, its
            owner, developers, and affiliates shall not be liable for any direct,
            indirect, incidental, special, consequential, or punitive damages
            arising out of or related to your use of, or inability to use, the Site.
            This includes, without limitation, damages for loss of data, health
            complications, personal injury, lost profits, or other intangible
            losses, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            The Site and all content, tools, and services are provided on an
            &quot;as is&quot; and &quot;as available&quot; basis without warranties of
            any kind, whether express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose,
            and non-infringement. We do not warrant that the Site will be
            uninterrupted, error-free, secure, or free of viruses or other harmful
            components.
          </p>

          <h2>7. Third-Party Advertisements</h2>
          <p>
            Deficit Planner may display advertisements from third-party advertising
            networks, including but not limited to Google AdSense. These
            advertisements may use cookies and similar tracking technologies to
            serve ads based on your browsing behavior. We do not control the content
            of third-party advertisements, and the presence of such ads does not
            constitute an endorsement of the advertised products or services. Your
            interactions with third-party advertisers are solely between you and the
            advertiser. We encourage you to review the privacy policies and terms of
            any third-party services you interact with through advertisements on our
            Site. For more information about how advertising cookies are used,
            please refer to our Privacy Policy.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            The Site may contain links to external websites or resources that are not
            owned or controlled by Deficit Planner. We are not responsible for the
            content, privacy policies, or practices of any third-party websites. You
            acknowledge and agree that we are not liable for any damage or loss
            caused by your use of or reliance on any content, goods, or services
            available through third-party sites.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to revise, amend, or replace these Terms of Service
            at any time at our sole discretion. When we make material changes, we
            will update the &quot;Last Updated&quot; date at the top of this page. It
            is your responsibility to check this page periodically for changes. Your
            continued use of the Site after any modifications to the Terms
            constitutes your acceptance of the revised Terms. If you do not agree
            with the updated Terms, you should discontinue use of the Site.
          </p>

          <h2>10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Site at
            any time, for any reason, without notice or liability. Upon termination,
            all provisions of these Terms that by their nature should survive
            termination will continue to apply, including but not limited to
            intellectual property provisions, disclaimers, and limitations of
            liability.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles. Any
            disputes arising from or relating to these Terms or your use of the Site
            shall be resolved through good-faith negotiation. If negotiation fails,
            disputes may be submitted to a competent court of jurisdiction.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding these Terms
            of Service, please contact us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>. We will
            make a reasonable effort to respond to your inquiry in a timely manner.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
