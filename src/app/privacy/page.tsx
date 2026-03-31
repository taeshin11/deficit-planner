import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Deficit Planner",
  description:
    "Read the Deficit Planner privacy policy. Learn how we handle your data, what cookies we use, and how third-party advertising works on our site.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="prose">
          <h1>Privacy Policy</h1>

          <p>
            <strong>Last updated: March 30, 2026</strong>
          </p>

          <p>
            Deficit Planner (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            is committed to protecting your privacy. This Privacy Policy explains
            what information we collect, how we use it, and what choices you have
            regarding your data when you visit and use our website at
            deficitplanner.com (the &quot;Site&quot;). By using the Site, you
            agree to the practices described in this policy.
          </p>

          <h2>Information We Collect</h2>

          <p>
            Deficit Planner is designed with privacy in mind. We minimize data
            collection to only what is necessary to provide our service and
            improve the user experience. Here is a complete breakdown of the
            information we collect:
          </p>

          <h3>Calculator Inputs</h3>

          <p>
            When you use the Deficit Planner calculator, you enter personal
            details such as your age, sex, height, weight, and activity level.
            All of these calculations are performed entirely within your web
            browser using client-side JavaScript. This data is never transmitted
            to our servers, never stored in any database, and is discarded the
            moment you close or refresh the page. We have no access to the
            numbers you enter into the calculator.
          </p>

          <h3>Local Storage (Unit Preference)</h3>

          <p>
            When you toggle between metric and imperial units on the calculator,
            your preference is saved using your browser&apos;s local storage. Local
            storage is a small amount of data stored directly on your device by
            your browser. This data never leaves your device and is not
            transmitted to us or any third party. You can clear your local
            storage at any time through your browser settings, which will reset
            your unit preference to the default.
          </p>

          <h3>Contact Form and Feedback (Google Sheets Webhook)</h3>

          <p>
            If you choose to submit feedback or contact us through the form on
            our Site, the information you provide — such as your message and any
            name or email address you voluntarily include — is sent to a Google
            Sheets webhook for our team to review. This is the only mechanism
            through which any user-submitted data leaves your browser and reaches
            us. We use this data solely to read and respond to your feedback. We
            do not sell, share, or distribute feedback data to any third party.
            The information is stored in a private Google Sheet accessible only
            to authorized members of the SPINAI team.
          </p>

          <h3>No Account Creation</h3>

          <p>
            Deficit Planner does not require you to create an account, sign in,
            or provide any personal information to use the calculator. There is
            no registration process, no username or password system, and no user
            profiles. This means we have no database of user identities or
            personal health information.
          </p>

          <h2>Cookies and Tracking Technologies</h2>

          <p>
            Deficit Planner itself does not set any first-party cookies. However,
            our third-party advertising partners may place cookies on your device
            in order to serve advertisements and measure their performance. The
            following sections describe the third-party services we use.
          </p>

          <h3>Google AdSense</h3>

          <p>
            We use Google AdSense to display advertisements on the Site. Google
            AdSense may use cookies and web beacons to collect information about
            your visits to this and other websites in order to provide
            advertisements about goods and services that may be of interest to
            you. Google&apos;s use of advertising cookies is governed by
            Google&apos;s own privacy policy, which you can review at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            . You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . Google AdSense may collect information such as your IP address,
            browser type, device type, pages visited, and interactions with ads.
            This data is processed by Google and is subject to Google&apos;s
            privacy practices, not ours.
          </p>

          <h3>Adsterra</h3>

          <p>
            We also use Adsterra as an advertising partner. Adsterra may use
            cookies, pixel tags, and similar technologies to collect or receive
            information from your browser or device in order to serve targeted
            advertisements and measure ad performance. The data Adsterra collects
            may include your IP address, browser and device information, pages
            viewed, and ad interaction data. Adsterra&apos;s use of this data is
            governed by their own privacy policy, which you can review on
            Adsterra&apos;s website. We do not share any personally identifiable
            information with Adsterra beyond what their technology collects
            automatically through cookies and similar mechanisms.
          </p>

          <h2>No Personally Identifiable Information Stored</h2>

          <p>
            To be clear: Deficit Planner does not collect, store, or process any
            personally identifiable information (PII) as part of its core
            functionality. We do not collect your name, email address, phone
            number, physical address, or any health data through the calculator.
            The only scenario in which we receive any personal information is if
            you voluntarily submit it through our contact or feedback form, and
            even then, we only use it to respond to your message. We do not build
            user profiles, we do not track individual users across sessions, and
            we do not sell or share any personal information with third parties
            for marketing purposes.
          </p>

          <h2>Data Security</h2>

          <p>
            We take reasonable measures to protect the limited data we do handle.
            Our website is served over HTTPS, ensuring that all communication
            between your browser and our servers is encrypted. The Google Sheet
            used to store feedback submissions is protected by access controls
            and is only available to authorized team members. While no method of
            electronic transmission or storage is 100 percent secure, we strive
            to use commercially acceptable means to protect any information
            entrusted to us.
          </p>

          <h2>Third-Party Links</h2>

          <p>
            Our Site may contain links to third-party websites or services. We
            are not responsible for the privacy practices of these external sites.
            We encourage you to read the privacy policies of any third-party
            site you visit. Our inclusion of a link does not imply endorsement of
            the linked site&apos;s privacy practices or content.
          </p>

          <h2>Children&apos;s Privacy</h2>

          <p>
            Deficit Planner is not intended for use by individuals under the age
            of 13. We do not knowingly collect any information from children
            under 13. If you are a parent or guardian and believe your child has
            provided us with personal information through the feedback form,
            please contact us at the email address below and we will promptly
            delete that information.
          </p>

          <h2>Your Choices</h2>

          <p>
            You have several options for controlling your data when using Deficit
            Planner:
          </p>

          <ul>
            <li>
              <strong>Clear local storage:</strong> You can clear your
              browser&apos;s local storage at any time to remove your saved unit
              preference. This can typically be done through your browser&apos;s
              settings under &quot;Site Data&quot; or &quot;Storage.&quot;
            </li>
            <li>
              <strong>Block cookies:</strong> You can configure your browser to
              block third-party cookies, which will prevent our advertising
              partners from placing tracking cookies on your device. Note that
              blocking cookies may affect the appearance of advertisements but
              will not affect the functionality of the calculator.
            </li>
            <li>
              <strong>Opt out of personalized ads:</strong> You can opt out of
              personalized advertising from Google by visiting Google Ads
              Settings. You can also visit the{" "}
              <a
                href="https://optout.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Advertising Initiative opt-out page
              </a>{" "}
              to manage preferences for other advertising networks.
            </li>
            <li>
              <strong>Do Not Track:</strong> Some browsers offer a &quot;Do Not
              Track&quot; signal. While there is currently no industry standard
              for how websites should respond to this signal, we respect your
              intent and minimize tracking wherever possible.
            </li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, our advertising partners, or applicable
            laws. When we make changes, we will update the &quot;Last
            updated&quot; date at the top of this page. We encourage you to
            review this policy periodically to stay informed about how we are
            protecting your information. Your continued use of the Site after any
            changes constitutes your acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions, concerns, or requests related to this
            Privacy Policy or our data practices, please contact us at:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>
          </p>

          <p>
            We will do our best to respond to all inquiries within a reasonable
            timeframe. Your privacy matters to us, and we welcome any feedback
            that helps us improve our practices and maintain your trust.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
