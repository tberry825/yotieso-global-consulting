import LegalLayout from "@/components/LegalLayout";

const SECTIONS = [
  {
    h: "1. What Are Cookies",
    p: [
      "Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time, making your experience more efficient.",
    ],
  },
  {
    h: "2. How We Use Cookies",
    p: [
      "We use cookies to understand how visitors use our website, to remember your preferences, and to improve site performance. The cookies we use do not identify you personally.",
    ],
  },
  {
    h: "3. Types of Cookies We Use",
    p: [
      "Essential cookies: These are necessary for the website to function and cannot be switched off.",
      "Analytical cookies: These help us analyze how visitors interact with the website so we can improve its performance.",
      "Functional cookies: These enable enhanced functionality, such as remembering your consent preferences.",
    ],
  },
  {
    h: "4. Managing Cookies",
    p: [
      "You can control or delete cookies through your browser settings. Our cookie consent banner also allows you to accept or decline non-essential cookies. Note that disabling cookies may affect website functionality.",
      "For more information on managing cookies in your browser, visit the help section of your browser.",
    ],
  },
  {
    h: "5. Updates",
    p: [
      "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    h: "6. Contact",
    p: [
      "For questions about our use of cookies, contact us at yotiesoglobalconsulting@gmail.com.",
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="September 1, 2026">
      <p className="text-[15px] text-[#4a4a4a]">
        This Cookie Policy explains how Yotieso Global Consulting LLC uses cookies
        and similar technologies on this website.
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