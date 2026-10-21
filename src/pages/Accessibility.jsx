import LegalLayout from "@/components/LegalLayout";

const SECTIONS = [
  {
    h: "1. Our Commitment",
    p: [
      "Yotieso Global Consulting LLC is committed to ensuring that our website is accessible to everyone, including individuals with disabilities. We believe that every visitor should be able to experience and engage with our services with dignity, ease, and confidence.",
      "We aim to conform, where feasible, to the recognized accessibility guidelines that apply to our business, and we continually work to improve the usability and inclusivity of our digital presence.",
    ],
  },
  {
    h: "2. Steps We Have Taken",
    p: [
      "To support an accessible experience, we have implemented measures across this website, including:",
      "A visible 'Skip to content' link that allows keyboard and screen-reader users to bypass navigation and jump directly to page content.",
      "Semantic page landmarks and labeled navigation so assistive technologies can move through the page predictably.",
      "Keyboard-accessible menus, forms, and interactive controls, with a visible focus indicator on all focusable elements.",
      "Descriptive text alternatives for meaningful images, and decorative imagery hidden from screen readers where it does not convey information.",
      "Sufficient color contrast between text and background colors across the site to aid readability for users with low vision.",
    ],
  },
  {
    h: "3. Conformance Status",
    p: [
      "We continually review our website against recognized accessibility standards and remediate issues we become aware of. Because our website is updated regularly, you may occasionally encounter content that has not yet been fully adapted to the latest standards.",
      "We treat accessibility as an ongoing effort, and we welcome your input to help us identify areas for improvement.",
    ],
  },
  {
    h: "4. Feedback and Assistance",
    p: [
      "If you experience any difficulty accessing or using any part of this website, or if you believe content is not fully accessible to people with disabilities, please contact us. We welcome your feedback and will work with you to provide the information, item, or transaction you are seeking through an accessible alternative where possible.",
      "Please include a brief description of the issue you encountered, the page or feature involved, and your preferred method of contact so we can follow up.",
    ],
  },
  {
    h: "5. Third-Party Content",
    p: [
      "Our website may link to, or embed, content from third-party platforms that we do not control. While we select these resources with care, we cannot guarantee the accessibility of third-party content. We encourage you to contact those providers directly if you encounter an accessibility barrier on their pages.",
    ],
  },
  {
    h: "6. Updates to This Statement",
    p: [
      "We may update this Accessibility Statement from time to time to reflect changes to our website or to our accessibility practices. Changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    h: "7. Contact Us",
    p: [
      "If you have questions about this Accessibility Statement or need assistance accessing any part of our website, please contact us at yotiesoglobalconsulting@gmail.com or write to Yotieso Global Consulting LLC, Houston, Texas, USA.",
    ],
  },
];

export default function Accessibility() {
  return (
    <LegalLayout title="Accessibility Statement" lastUpdated="October 1, 2026">
      <p className="text-[15px] text-[#4a4a4a]">
        Yotieso Global Consulting LLC is committed to making our website
        accessible and usable for everyone. This Accessibility Statement
        explains the steps we have taken, our conformance goals, and how to
        reach us with feedback or accommodation requests.
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