import { Car, Truck, Flame } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Cars",
    description:
      "General repairs and 24/7 roadside service. From breakdowns to maintenance, we keep you moving.",
    image: "/images/2.jpg",
    imageAlt: "Car engine repair service",
  },
  {
    icon: Truck,
    title: "Semi Trucks",
    description:
      "Mechanical repairs, air systems, brakes, and tires. Keeping your fleet on the road without the shop wait.",
    image: "/images/1.jpg",
    imageAlt: "Semi truck roadside repair service",
  },
  {
    icon: Flame,
    title: "Mobile Welding",
    description:
      "Steel and aluminum welding for trailers, gates, and custom fabrication. On‑site welding wherever you need it.",
    image: "/images/3.jpg",
    imageAlt: "Mobile welding service",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Professional mobile mechanic and welding services across the DFW metroplex — day or night.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/90 flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-4">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
