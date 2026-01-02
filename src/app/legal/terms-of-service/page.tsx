import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Siru Design Co",
  robots: "noindex, follow",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 2, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Siru Design Co website 
        and our design services. By accessing our Service, you agree to be bound by these Terms.
      </p>

      <h2>1. Interpretation and Definitions</h2>
      <p>
        The following definitions apply to these Terms:
      </p>
      <ul>
        <li><strong>Company:</strong> Refers to Siru Design Co (referred to as &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;).</li>
        <li><strong>Service:</strong> Refers to the Website and the interior design consultancy packages provided.</li>
        <li><strong>You:</strong> Refers to the individual or legal entity accessing the Service.</li>
      </ul>

      <h2>2. Design Services & Consultancy</h2>
      <p>
        Siru Design Co provides various &quot;Journeys&quot; including Short Haul, Day Trip, Short Break, and Long Haul. 
        Each service is subject to its specific scope of work as outlined in your individual service agreement.
      </p>
      <ul>
        <li><strong>Reliance:</strong> Our advice is based on information provided by You. We are not liable for errors resulting from inaccurate measurements or site data provided by the client.</li>
        <li><strong>Implementation:</strong> Unless &quot;Long Haul&quot; management is contracted, You are responsible for the hiring and management of third-party contractors and the procurement of goods.</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All design concepts, drawings, mood boards, and digital assets created by Siru Design Co 
        remain the intellectual property of the Company. 
      </p>
      <ul>
        <li>You are granted a non-exclusive license to use the designs for their intended purpose for your specific project.</li>
        <li>Reproduction or redistribution of our design frameworks for commercial gain without written consent is strictly prohibited.</li>
      </ul>

      <h2>4. Payments and Cancellations</h2>
      <p>
        Payment terms vary by service. &quot;Day Trip&quot; and &quot;Short Haul&quot; sessions typically require 
        payment in full at the time of booking to secure your date.
      </p>
      <ul>
        <li><strong>Refunds:</strong> Cancellations made within 48 hours of a scheduled &quot;Day Trip&quot; may be subject to a cancellation fee.</li>
        <li><strong>Changes:</strong> We reserve the right to amend our pricing and service structures at any time.</li>
      </ul>

      <h2>5. Links to Other Websites</h2>
      <p>
        Our Service may contain links to third-party websites (such as furniture retailers or contractors) 
        that are not operated by Us. We have no control over and assume no responsibility for the 
        content or privacy policies of any third-party sites.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Siru Design Co shall not be liable for any indirect, 
        incidental, or consequential damages resulting from your use of the design advice provided 
        on this website or during consultancy sessions.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United Kingdom. Any disputes arising from 
        these Terms shall be resolved in the courts of England and Wales.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these Terms, you can contact us:
      </p>
      <p>
        <strong>Email:</strong> studio@sirudesign.co<br />
        <strong>Website:</strong> https://sirudesign.co/contact
      </p>
    </LegalLayout>
  );
}