import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Deficit Planner",
  description:
    "Read the Deficit Planner privacy policy. Learn how we handle your data, what cookies and local storage we use, how third-party advertising works, and your rights under GDPR and CCPA.",
  keywords:
    "privacy policy, deficit planner privacy, data protection, GDPR, CCPA, cookies policy, calorie calculator privacy, Google AdSense privacy, Adsterra privacy",
  openGraph: {
    title: "Privacy Policy | Deficit Planner",
    description:
      "Comprehensive privacy policy for Deficit Planner. Learn how we protect your data, what information we collect, and your rights as a user.",
    url: "https://deficit-planner.vercel.app/privacy",
    siteName: "Deficit Planner",
    type: "website",
  },
};

export default function PrivacyPage() {
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
          <h1>Privacy Policy</h1>

          <p>
            <strong>Effective Date: March 30, 2026</strong>
          </p>

          {/* ── 1. Introduction ── */}
          <h2>1. Introduction</h2>

          <p>
            Deficit Planner (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website located at{" "}
            <a
              href="https://deficit-planner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://deficit-planner.vercel.app
            </a>{" "}
            (the &quot;Site&quot;). We are committed to safeguarding the privacy
            of every individual who visits and uses our Site. This Privacy Policy
            provides a comprehensive explanation of what information we collect,
            how we use and protect that information, what cookies and tracking
            technologies are employed, how third-party services interact with
            your data, and what rights and choices you have concerning your
            personal information.
          </p>

          <p>
            We believe transparency is essential to building trust. Deficit
            Planner is designed as a privacy-first tool: the core calculator
            functionality operates entirely within your web browser, and we do
            not require you to create an account, submit personal details, or
            provide any identifying information in order to use our service. We
            encourage you to read this Privacy Policy in its entirety so that you
            understand our data practices before using the Site.
          </p>

          <p>
            By accessing or using the Site, you acknowledge that you have read,
            understood, and agree to the collection and use of information as
            described in this Privacy Policy. If you do not agree with the
            practices outlined herein, please discontinue use of the Site
            immediately.
          </p>

          {/* ── 2. Information We Collect ── */}
          <h2>2. Information We Collect</h2>

          <p>
            Deficit Planner is intentionally designed to minimize the amount of
            data we collect. We collect only the information necessary to deliver
            our service, understand aggregate usage patterns, and display
            relevant advertisements. Below is a detailed breakdown of the
            categories of information associated with your use of the Site.
          </p>

          <h3>2.1 Calculator Inputs</h3>

          <p>
            When you use the Deficit Planner calculator, you may enter personal
            details such as your age, biological sex, height, weight, activity
            level, and desired weight-loss goals. It is important to understand
            that all calculations are performed entirely on the client side using
            JavaScript executed within your web browser. This means that the data
            you enter into the calculator is processed locally on your device. It
            is never transmitted to our servers, never stored in any database we
            operate, and is not accessible to us in any form. Once you close or
            refresh the browser tab, the calculator inputs are discarded
            entirely. We have zero access to the specific numbers, measurements,
            or health-related figures you enter.
          </p>

          <h3>2.2 No Account Creation or Personally Identifiable Information</h3>

          <p>
            Deficit Planner does not require or offer account creation. There is
            no registration process, no sign-in mechanism, no username or
            password system, and no user profiles. As a result, we do not
            maintain any database of user identities, email addresses, phone
            numbers, physical addresses, or any other personally identifiable
            information (PII) as part of our core service. You can use the
            calculator completely anonymously.
          </p>

          <h3>2.3 Automatically Collected Technical Information</h3>

          <p>
            Like most websites, our hosting infrastructure and third-party
            services may automatically collect certain non-personally
            identifiable technical information when you visit the Site. This may
            include your IP address (which may be truncated or anonymized), the
            type and version of your web browser, your operating system, the
            referring URL that led you to our Site, the pages you visit on our
            Site, the date and time of your visit, and general geographic
            location derived from your IP address. This information is used
            solely for aggregate analytics purposes and to ensure the security
            and proper functioning of the Site.
          </p>

          {/* ── 3. How We Use Information ── */}
          <h2>3. How We Use Information</h2>

          <p>
            Because our calculator operates entirely on the client side, we do
            not process any of your health-related inputs on our servers. The
            limited information we do collect or that is collected by our
            third-party partners is used exclusively for the following purposes:
          </p>

          <ul>
            <li>
              <strong>Aggregate Analytics:</strong> We analyze aggregate,
              anonymized usage data to understand how visitors interact with the
              Site, which features are most popular, and how we can improve the
              overall user experience. This data does not identify individual
              users.
            </li>
            <li>
              <strong>Advertising:</strong> Third-party advertising partners use
              cookies and similar technologies to serve relevant advertisements
              and measure ad performance, as described in Section 5 below.
            </li>
            <li>
              <strong>Site Maintenance and Security:</strong> Technical
              information may be used to diagnose server issues, prevent abuse,
              and ensure the Site remains secure and available.
            </li>
            <li>
              <strong>Service Improvement:</strong> Anonymized feedback and usage
              patterns help us prioritize new features, fix bugs, and refine the
              calculator&apos;s accuracy and usability.
            </li>
          </ul>

          <p>
            We do not sell, rent, or trade any personal information to third
            parties for marketing purposes. We do not build individual user
            profiles, and we do not track individual users across sessions using
            our own systems.
          </p>

          {/* ── 4. Cookies and Local Storage ── */}
          <h2>4. Cookies and Local Storage</h2>

          <p>
            Deficit Planner itself does not set any first-party cookies. However,
            we do use your browser&apos;s local storage feature for a limited set
            of preferences, and our third-party advertising and analytics
            partners may set cookies on your device. This section explains each
            in detail.
          </p>

          <h3>4.1 Local Storage: Unit Preference</h3>

          <p>
            When you toggle between metric (kilograms, centimeters) and imperial
            (pounds, feet and inches) units on the calculator, your selected
            preference is saved to your browser&apos;s local storage. Local
            storage is a web technology that allows small amounts of data to be
            stored directly on your device by your browser. This data never
            leaves your device, is not transmitted to our servers, and is not
            accessible to any third party. Its sole purpose is to remember your
            preferred unit system so that you do not have to re-select it each
            time you visit the Site. You can clear your local storage at any time
            through your browser&apos;s settings, typically found under
            &quot;Site Data,&quot; &quot;Storage,&quot; or &quot;Clear Browsing
            Data.&quot; Clearing local storage will reset your unit preference to
            the default setting.
          </p>

          <h3>4.2 Local Storage: Language Preference</h3>

          <p>
            If you change the display language of the Site, your language
            selection is also stored in your browser&apos;s local storage. Like
            the unit preference, this data resides entirely on your device and is
            used exclusively to remember your chosen language so the Site
            displays in the correct language on subsequent visits. This data is
            never sent to our servers or shared with any third party. You can
            remove it at any time by clearing your browser&apos;s local storage.
          </p>

          <h3>4.3 Third-Party Cookies</h3>

          <p>
            Our advertising and analytics partners may place cookies on your
            device when you visit the Site. Cookies are small text files stored
            by your browser that can be read by the website or third-party
            service that set them. These cookies are used to serve
            advertisements, measure ad effectiveness, and collect analytics data.
            For a full explanation of the third-party services that may set
            cookies, please see Section 5 below. You can manage cookie
            preferences through your browser settings, and you can opt out of
            personalized advertising through the mechanisms described in Section
            9 of this policy.
          </p>

          {/* ── 5. Third-Party Services ── */}
          <h2>5. Third-Party Services</h2>

          <p>
            Deficit Planner partners with the following third-party services,
            each of which has its own data collection practices governed by its
            own privacy policy. We encourage you to review the privacy policies
            of these services to understand how they handle your data.
          </p>

          <h3>5.1 Google AdSense</h3>

          <p>
            We use Google AdSense to display advertisements on the Site. Google
            AdSense uses cookies, web beacons, and similar tracking technologies
            to collect information about your visits to this Site and other
            websites across the internet. This information is used to provide
            advertisements about goods and services that may be of interest to
            you based on your browsing history and online activity. Google
            AdSense may collect data such as your IP address, browser type and
            version, device type and screen size, the pages you visit on our
            Site, your interactions with advertisements (clicks, impressions),
            and information derived from cookies previously placed on your
            device.
          </p>

          <p>
            Google may use this data to serve personalized advertisements
            tailored to your interests, or non-personalized advertisements based
            on contextual factors such as the content of the page you are
            viewing. Google&apos;s use of advertising cookies is governed by
            Google&apos;s Privacy Policy, which you can review at{" "}
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
            . Additionally, you can visit{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aboutads.info/choices
            </a>{" "}
            to opt out of interest-based advertising from participating
            companies.
          </p>

          <h3>5.2 Google Analytics</h3>

          <p>
            We may use Google Analytics to collect aggregate data about how
            visitors use the Site, including page views, session duration,
            bounce rate, geographic region, and device type. Google Analytics
            uses cookies to gather this information. The data collected by Google
            Analytics is processed in aggregate and does not identify individual
            users. We use this information to understand traffic patterns,
            improve the Site&apos;s content and functionality, and make informed
            decisions about future development. You can learn more about how
            Google Analytics collects and processes data at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s partner sites page
            </a>
            . You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3>5.3 Adsterra</h3>

          <p>
            We also use Adsterra as an advertising partner to display
            advertisements on the Site. Adsterra may use cookies, pixel tags,
            JavaScript tags, and similar tracking technologies to collect or
            receive information from your browser or device. This information may
            include your IP address, browser type and version, device
            information, operating system, the pages you view on the Site, your
            interaction with advertisements, and data derived from cookies.
            Adsterra uses this data to serve targeted advertisements, measure
            advertising performance, and perform fraud detection. Adsterra&apos;s
            collection and use of data is governed by their own privacy policy,
            which you can review on{" "}
            <a
              href="https://www.adsterra.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adsterra&apos;s website
            </a>
            . We do not share any personally identifiable information with
            Adsterra beyond what their technology collects automatically through
            cookies and similar mechanisms.
          </p>

          {/* ── 6. Data Collection via Google Sheets ── */}
          <h2>6. Data Collection via Google Sheets</h2>

          <p>
            Deficit Planner may collect anonymous, aggregate calculator usage
            data through a Google Sheets integration. This data is strictly
            limited to non-personally identifiable information such as which
            calculator features are used, the frequency of calculations, and
            general usage trends. No personally identifiable information is
            collected through this mechanism. The data does not include your
            name, email address, IP address, specific calculator inputs, or any
            other information that could be used to identify you as an
            individual. This anonymous data is stored in a private Google Sheet
            accessible only to authorized members of the Deficit Planner team
            and is used exclusively for the purpose of improving the calculator
            and understanding aggregate usage patterns.
          </p>

          <p>
            If you choose to submit feedback or contact us through any form on
            our Site, the information you voluntarily provide, such as your
            message and any name or email address you include, is sent to a
            Google Sheets webhook for our team to review. We use this data solely
            to read and respond to your feedback. We do not sell, share, or
            distribute feedback data to any third party. The information is
            stored in a private Google Sheet accessible only to authorized team
            members.
          </p>

          {/* ── 7. Children's Privacy ── */}
          <h2>7. Children&apos;s Privacy</h2>

          <p>
            Deficit Planner is not directed at, marketed to, or intended for use
            by children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you are a parent or
            guardian and believe that your child has provided us with personal
            information through a feedback form or any other mechanism, please
            contact us immediately at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a> and we
            will take prompt steps to delete that information from our records.
            In compliance with the Children&apos;s Online Privacy Protection Act
            (COPPA) and similar international regulations, we will delete any
            information we discover to have been collected from a child under 13
            as quickly as possible.
          </p>

          {/* ── 8. Data Security ── */}
          <h2>8. Data Security</h2>

          <p>
            We take reasonable and appropriate technical, administrative, and
            organizational measures to protect the limited data we do handle
            against unauthorized access, alteration, disclosure, or destruction.
            Our website is served exclusively over HTTPS (Hypertext Transfer
            Protocol Secure), ensuring that all communication between your web
            browser and our servers is encrypted using industry-standard TLS
            (Transport Layer Security) protocols. The Google Sheet used to store
            any feedback submissions or anonymous usage data is protected by
            access controls and is available only to authorized team members.
          </p>

          <p>
            While we strive to use commercially acceptable means to protect your
            information, no method of electronic transmission over the internet
            or method of electronic storage is one hundred percent secure. We
            cannot guarantee absolute security, but we are committed to
            continually reviewing and improving our security practices to
            minimize risk to the greatest extent possible.
          </p>

          {/* ── 9. Your Rights ── */}
          <h2>9. Your Rights</h2>

          <p>
            Depending on your jurisdiction, you may have certain rights
            regarding your personal information. We respect these rights and
            provide the following options to all users, regardless of location:
          </p>

          <h3>9.1 Right of Access</h3>

          <p>
            You have the right to request information about what personal data,
            if any, we hold about you. Because our calculator operates entirely
            on the client side and we do not maintain user accounts, we
            typically hold no personal data about you. If you have submitted
            feedback through our contact form, you may request a copy of the
            information you provided by contacting us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>.
          </p>

          <h3>9.2 Right of Deletion</h3>

          <p>
            You have the right to request deletion of any personal data we may
            hold about you. If you have submitted feedback or other information
            through our Site, you may request that we delete it by contacting us
            at the email address above. We will process your request within
            thirty (30) days.
          </p>

          <h3>9.3 Right to Opt Out of Cookies</h3>

          <p>
            You have the right to opt out of cookies set by third-party
            advertising and analytics services. You can do so by adjusting your
            browser settings to block third-party cookies, by using the opt-out
            mechanisms provided by our advertising partners (see Section 5), or
            by visiting the{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Network Advertising Initiative opt-out page
            </a>{" "}
            or the{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Advertising Alliance opt-out page
            </a>
            . Please note that blocking cookies may affect the appearance of
            advertisements displayed on the Site but will not affect the
            functionality of the calculator itself.
          </p>

          <h3>9.4 Do Not Track Signals</h3>

          <p>
            Some web browsers offer a &quot;Do Not Track&quot; (DNT) signal.
            While there is currently no universally accepted standard for how
            websites should respond to DNT signals, we respect your intent to
            limit tracking and minimize data collection wherever possible.
          </p>

          {/* ── 10. International Users ── */}
          <h2>10. International Users</h2>

          <p>
            Deficit Planner is accessible to users worldwide. If you are
            accessing the Site from outside the country in which our servers are
            located, please be aware that any data collected by third-party
            services (such as Google AdSense, Google Analytics, or Adsterra) may
            be transferred to and processed in countries other than your own.
            These countries may have data protection laws that differ from those
            of your jurisdiction.
          </p>

          <h3>10.1 European Economic Area (EEA) Users and GDPR</h3>

          <p>
            If you are located in the European Economic Area, you are entitled to
            certain rights under the General Data Protection Regulation (GDPR),
            including the right to access, rectify, port, and erase your
            personal data, as well as the right to restrict or object to certain
            processing activities. Because Deficit Planner does not collect or
            store personally identifiable information as part of its core
            service, the applicability of these rights is limited. However, with
            respect to any data collected through feedback forms or by
            third-party services, we are committed to honoring your GDPR rights.
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>. Our
            lawful basis for any processing that does occur is legitimate
            interest (for analytics and site improvement) and consent (for
            cookies placed by third-party advertising partners).
          </p>

          <h3>10.2 California Users and CCPA</h3>

          <p>
            If you are a California resident, you have certain rights under the
            California Consumer Privacy Act (CCPA), including the right to know
            what personal information is collected about you, the right to
            request deletion of your personal information, and the right to opt
            out of the sale of your personal information. Deficit Planner does
            not sell personal information. Because our core service does not
            collect PII, the scope of CCPA rights applicable to your use of the
            calculator is limited. However, for any data that may be collected
            through feedback forms or third-party services, we are committed to
            complying with CCPA requirements. California residents may exercise
            their rights by contacting us at{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>.
          </p>

          {/* ── 11. Changes to This Policy ── */}
          <h2>11. Changes to This Privacy Policy</h2>

          <p>
            We reserve the right to update, modify, or replace this Privacy
            Policy at any time to reflect changes in our data practices,
            third-party service providers, advertising partners, or applicable
            laws and regulations. When we make changes to this policy, we will
            revise the &quot;Effective Date&quot; at the top of this page. We
            encourage you to review this Privacy Policy periodically to stay
            informed about how we collect, use, and protect your information. For
            material changes that significantly affect how we handle personal
            data, we may provide additional notice through a prominent
            announcement on the Site. Your continued use of the Site following
            any changes to this Privacy Policy constitutes your acceptance of the
            updated policy.
          </p>

          {/* ── 12. Contact Information ── */}
          <h2>12. Contact Information</h2>

          <p>
            If you have any questions, concerns, complaints, or requests related
            to this Privacy Policy, our data practices, or your rights as a
            user, please do not hesitate to contact us:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:spinaiceo@gmail.com">spinaiceo@gmail.com</a>
          </p>

          <p>
            We are committed to addressing your inquiries promptly and will make
            every reasonable effort to respond within thirty (30) days of
            receiving your message. Your privacy matters to us, and we welcome
            any feedback that helps us improve our practices and maintain your
            trust. If you are not satisfied with our response, you may have the
            right to lodge a complaint with your local data protection authority.
          </p>

          <p>
            <em>
              This Privacy Policy was last updated on March 30, 2026. Thank you
              for taking the time to read and understand how Deficit Planner
              handles your data.
            </em>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
