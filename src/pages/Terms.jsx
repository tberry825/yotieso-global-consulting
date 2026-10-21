import LegalLayout from "@/components/LegalLayout";

const SECTIONS = [
  {
    h: "1. Acceptance of Terms",
    p: [
      "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    h: "2. Services",
    p: [
      "Yotieso Global Consulting LLC provides operations and business support consulting services. The information and materials on this website are for general informational purposes and do not constitute professional advice tailored to your specific circumstances.",
      "Engagement of any consulting service is subject to a separate written agreement between you and Yotieso Global Consulting LLC.",
    ],
  },
  {
    h: "3. Intellectual Property",
    p: [
      "All content on this website, including text, graphics, logos, and images, is the property of Yotieso Global Consulting LLC or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.",
    ],
  },
  {
    h: "4. Use of the Website",
    p: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You must not attempt to gain unauthorized access to any part of the website or its systems.",
    ],
  },
  {
    h: "5. Disclaimer of Warranties",
    p: [
      "This website is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    h: "6. Limitation of Liability",
    p: [
      "To the fullest extent permitted by law, Yotieso Global Consulting LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website or its content.",
    ],
  },
  {
    h: "7. Third-Party Links",
    p: [
      "Our website may contain links to third-party websites. We are not responsible for the content or practices of those sites and encourage you to review their terms and privacy policies.",
    ],
  },
  {
    h: "8. User Submissions",
    p: [
      "Any information you submit through our contact forms is provided voluntarily. By submitting, you consent to our use of that information as described in our Privacy Policy.",
    ],
  },
  {
    h: "9. Governing Law",
    p: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of Texas, USA, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Houston, Texas.",
    ],
  },
  {
    h: "10. Changes to Terms",
    p: [
      "We reserve the right to modify these Terms at any time. Updates will be posted on this page with a revised date. Continued use of the website constitutes acceptance of the updated Terms.",
    ],
  },
  {
    h: "11. Contact",
    p: [
      "Questions regarding these Terms may be directed to yotiesoglobalconsulting@gmail.com or Yotieso Global Consulting LLC, Houston, Texas, USA.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="September 1, 2026">
      <p className="text-[15px] text-[#4a4a4a]">
        Please read these Terms of Service carefully before using the Yotieso
        Global Consulting LLC website. These terms govern your access to and use
        of the site.
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