"use client";

import { FaHandSparkles } from "react-icons/fa";
import { GiEyelashes, GiFemaleLegs, GiFootprint } from "react-icons/gi";
import { MdOutlineSpa } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    name: "Manicure",
    description:
      "Gentle care for your nails, shaping, polishing, and long-lasting results.",
    icon: FaHandSparkles,
  },
  {
    name: "Pedicure",
    description:
      "Relaxing foot care, softening, nail shaping, and smooth skin.",
    icon: GiFootprint,
  },
  {
    name: "Massage",
    description:
      "Relaxing massage to release tension and restore comfort and well-being.",
    icon: MdOutlineSpa,
  },
  {
    name: "Depilation",
    description: "Gentle and safe hair removal, leaving skin smooth and soft.",
    icon: GiFemaleLegs,
  },
  {
    name: "Eyelashes",
    description: "Professional eyelash tinting for a natural, beautiful look.",
    icon: GiEyelashes,
  },
  {
    name: "Eyebrows",
    description:
      "Shaping, tinting, and grooming for perfect brows that suit you.",
    icon: GiEyelashes,
  },
];

const fadeUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Services() {
  return (
    <section
      className="py-12 bg-linear-to-t from-(--color-bg-card) to-(--color-bg-soft)"
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="relative mb-16 flex justify-center">
          <h2 className="relative z-10 px-8 py-2 text-4xl font-heading bg-(--color-bg-soft) rounded-3xl">
            Treatments
          </h2>
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col items-center gap-4 p-6 bg-(--color-bg-hero) rounded-2xl shadow-[0_0_10px_rgba(143,175,155,0.25)] 
                hover:shadow-[0_0_20px_rgba(143,175,155,0.5)] transition hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-(--color-accent)" />
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-center text-sm leading-[150%] text-(--color-text-main)">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
