import LegalLayout from "@/components/LegalLayout";

const SECTIONS = [
  {
    h: "1. Information We Collect",
    p: [
      "We collect information that you voluntarily provide when you interact with our website. This includes your name, email address, and any message details you submit through our contact or consultation request forms.",
      "We also automatically collect limited technical information, such as your browser type, device information, and pages visited, through cookies and similar technologies. See our Cookie Policy for details.",
    ],
  },
  {
    h: "2. How We Use Your Information",
    p: [
      "We use the information we collect to respond to your inquiries, schedule and deliver consultations, provide our services, and communicate with you about relevant offerings.",
      "We may also use aggregated, non-identifiable data to analyze website usage and improve our services and user experience.",
    ],
  },
  {
    h: "3. Legal Basis for Processing (GDPR)",
    p: [
      "Where applicable under the General Data Protection Regulation (GDPR), we process your personal data based on your consent, our legitimate interests in operating our business, and the necessity of processing to respond to your requests.",
      "You may withdraw your consent at any time by contacting us using the details below.",
    ],
  },
  {
    h: "4. Sharing Your Information",
    p: [
      "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting business, provided they agree to keep it confidential.",
      "We may disclose information when required by law or to protect our legal rights.",
    ],
  },
  {
    h: "5. Data Retention",
    p: [
      "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.",
    ],
  },
  {
    h: "6. Your Rights",
    p: [
      "Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data, as well as the right to data portability and to object to processing.",
      "To exercise any of these rights, please contact us at yotiesoglobalconsulting@gmail.com. We will respond in accordance with applicable law.",
    ],
  },
  {
    h: "7. Cookies",
    p: [
      "Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings and via our cookie consent banner. See our Cookie Policy for more information.",
    ],
  },
  {
    h: "8. Security",
    p: [
      "We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    h: "9. Children's Privacy",
    p: [
      "Our services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    h: "10. Changes to This Policy",
    p: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.",
    ],
  },
  {
    h: "11. Contact Us",
    p: [
      "If you have questions about this Privacy Policy or our data practices, please contact us at yotiesoglobalconsulting@gmail.com or write to Yotieso Global Consulting LLC, Houston, Texas, USA.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="September 1, 2026">
      <p className="text-[15px] text-[#4a4a4a]">
        This Privacy Policy describes how Yotieso Global Consulting LLC (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information
        you provide when using our website. By using this site, you agree to the
        practices described here.
      </p>
      {SECTIONS.map((s) => (
        <section key={s.h}>
          <h2 className="font-heading text-lg font-bold text-[#0F2D57]">{s.h}</h2>
          {s.p.map((para, i) => (
            <p key={i} className="mt-2">
              {para}
            </p>
          ))}
        </section>
      ))}
    </LegalLayout>
  );
}