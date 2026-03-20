import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/6.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0f1a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white mb-6">
          Egor's Mobile Repair{" "}
          <span className="text-accent">–</span>{" "}
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">
            24/7 Roadside Service in the DFW Area
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 font-medium">
          Save money on towing! <span className="text-accent font-semibold">We come to you.</span>
        </p>

        <a
          href="tel:8178073410"
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-black font-extrabold text-lg sm:text-xl px-8 py-4 rounded-full shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Phone className="w-6 h-6" strokeWidth={2.5} />
          Call Now: 817-807-3410
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}
