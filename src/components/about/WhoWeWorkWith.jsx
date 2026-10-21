import { Check } from "lucide-react";
import { Image } from "@/components/ui/image";

const CLIENTS = [
  "Small Businesses",
  "Independent Professionals",
  "Restaurants / Food Trucks / Caterers / Bakeries",
  "Nonprofits",
  "Churches / Community Organizations",
  "Entrepreneurs & Startups",
];

const HANDSHAKE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80";

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white px-6 py-24 md:px-24 lg:px-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-extrabold uppercase text-[#0a1a36] sm:text-4xl">
            Who We Work With
          </h2>
          <div className="mt-4 h-1 w-20 bg-[#0056b3]" />
          <ul className="mt-8 space-y-4">
            {CLIENTS.map((c) => (
              <li key={c} className="flex items-center gap-3 text-[#4a4a4a]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={HANDSHAKE}
          alt="Business professionals"
          fittingType="fill"
          className="h-[420px] w-full rounded-2xl"
        />
      </div>
    </section>
  );
}