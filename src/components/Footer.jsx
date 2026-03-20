import { Phone, MapPin, Star, Instagram } from "lucide-react";

const socials = [
  {
    label: "Google Maps",
    href: "https://maps.app.goo.gl/YmyvxZwxDFxxcFvF8",
    icon: MapPin,
    color: "hover:text-red-400",
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/egors-mobile-repair-fort-worth",
    icon: Star,
    color: "hover:text-red-500",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/egorsmobilerepair/",
    icon: Instagram,
    color: "hover:text-pink-400",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 py-14 text-center">
        {/* Phone */}
        <a
          href="tel:8178073410"
          className="inline-flex items-center gap-3 text-accent hover:text-accent-hover text-2xl sm:text-3xl font-extrabold transition-colors mb-8"
        >
          <Phone className="w-7 h-7" strokeWidth={2.5} />
          817-807-3410
        </a>

        <p className="text-gray-400 mb-8 text-sm">
          Serving the entire Dallas–Fort Worth metroplex, 24 hours a day, 7 days a week.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-200 ${s.color} hover:bg-white/10 hover:scale-110`}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Egor's Mobile Repair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
