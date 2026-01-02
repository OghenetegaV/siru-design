import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Siru Design Co",
  robots: "noindex, follow", // Legal pages usually don't need to compete in SEO
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 2, 2026">
      <p>
        At Siru Design Co, we are committed to protecting and respecting your privacy. 
        This policy explains when and why we collect personal information about people who 
        visit our website, how we use it, and how we keep it secure.
      </p>

      <h2>1. The Principles</h2>
      <p>
        In accordance with the UK General Data Protection Regulation (UK GDPR), we ensure 
        that your data is: processed lawfully and transparently; collected for specific, 
        explicit purposes; and kept accurate and up to date.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect and process the following data about you:</p>
      <ul>
        <li><strong>Identity Data:</strong> Name, title.</li>
        <li><strong>Contact Data:</strong> Email address, telephone number, and postal address.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, and time zone settings collected automatically via cookies.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide our interior design services and fulfill contracts.</li>
        <li>Respond to inquiries made via our contact forms.</li>
        <li>Send newsletters or marketing materials (only if you have opted in).</li>
        <li>Improve our website functionality and user experience.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We will only retain your personal data for as long as necessary to fulfill the 
        purposes we collected it for, including for the purposes of satisfying any 
        legal, accounting, or reporting requirements.
      </p>

      <h2>5. Your Legal Rights</h2>
      <p>Under GDPR, you have the right to:</p>
      <ul>
        <li>Request access to your personal data.</li>
        <li>Request correction or erasure of your personal data.</li>
        <li>Object to the processing of your data.</li>
        <li>Request the transfer of your data to another party.</li>
      </ul>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions regarding this Privacy Policy or our privacy practices, 
        please contact our Data Protection Officer at:
      </p>
      <p>
        <strong>Email:</strong> studio@sirudesign.co<br />
        <strong>Address:</strong> London, United Kingdom
      </p>
    </LegalLayout>
  );
}