import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#EAF3FB]">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}