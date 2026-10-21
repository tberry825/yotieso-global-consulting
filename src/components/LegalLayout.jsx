import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-[#EAF3FB]">
      <Header />
      <main
        id="main-content"
        className="mx-auto max-w-4xl px-6 pt-72 pb-24 md:px-12 md:pt-56 lg:pt-48"
      >
        <h1 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-[#0F2D57] sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 h-1 w-20 bg-[#4F86C6]" />
        {lastUpdated && (
          <p className="mt-4 text-sm text-[#4a4a4a]">
            Last updated: {lastUpdated}
          </p>
        )}
        <div className="prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-[#333333]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}