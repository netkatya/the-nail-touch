"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/const/services";
import { useEffect, useState } from "react";

export default function Treatments() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
            const CardContent = (
              <>
                <Image
                  src={service.image}
                  alt={service.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-center text-sm text-(--color-text-main)">
                  {service.description}
                </p>
              </>
            );

            // mobile
            if (isMobile) {
              return (
                <div
                  key={service.name}
                  className="flex flex-col items-center gap-4 p-6 bg-(--color-bg-hero) rounded-2xl shadow-[0_0_10px_rgba(143,175,155,0.25)]"
                >
                  {CardContent}
                </div>
              );
            }

            // tablet + desktop
            return (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col items-center gap-4 p-6 bg-(--color-bg-hero) rounded-2xl shadow-[0_0_10px_rgba(143,175,155,0.25)] hover:shadow-[0_0_20px_rgba(143,175,155,0.5)] transition"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
