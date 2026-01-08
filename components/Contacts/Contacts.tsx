"use client";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Contacts() {
  return (
    <section
      className="relative py-10 md:py-20 bg-linear-to-b from-(--color-bg-card) to-(--color-bg-soft) overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="relative mb-16 flex justify-center">
          {/* Background stripe */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-60" />

          <h2 className="relative z-10 px-8 py-2 text-3xl font-heading bg-(--color-bg-card) rounded-3xl">
            Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="https://www.instagram.com/the_nail_touch?igsh=d3hmbHk1MG0yNTc="
                target="_blank"
                className="flex items-center gap-4 p-6 bg-(--color-bg-hero) 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
    hover:shadow-[0_0_20px_rgba(143,175,155,0.5)]
    transition 
    hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                  <FaInstagram className="text-(--color-accent) w-6 h-6" />
                </div>
                <span className="text-(--color-text-main) text-lg">
                  @the_nail_touch
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="https://wa.me/447465474727"
                target="_blank"
                className="flex items-center gap-4 p-6 bg-(--color-bg-hero) 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
    hover:shadow-[0_0_20px_rgba(143,175,155,0.5)]
    transition 
    hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                  <FaWhatsapp className="text-(--color-accent) w-6 h-6" />
                </div>
                <span className="text-(--color-text-main) text-lg">
                  WhatsApp
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="mailto:the_nail_touch@gmail.com"
                className="flex items-center gap-4 p-6 bg-(--color-bg-hero) 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
    hover:shadow-[0_0_20px_rgba(143,175,155,0.5)]
    transition 
    hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                  <FaEnvelope className="text-(--color-accent) w-6 h-6" />
                </div>
                <span className="text-(--color-text-main) text-lg">
                  the_nail_touch@gmail.com
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-(--color-bg-hero) 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
    
    transition 
    "
            >
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                <FaMapMarkerAlt className="text-(--color-accent) w-6 h-6" />
              </div>
              <span className="text-(--color-text-main) text-lg">
                S8, Sheffield
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
p-8 bg-(--color-bg-hero) 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
  "
          >
            <h3 className="text-xl mb-6 font-semibold text-center">
              Opening Hours
            </h3>

            <ul className="text-(--color-text-main) space-y-2">
              {[
                { day: "Monday", hours: "10am – 3pm" },
                { day: "Tuesday", hours: "10am – 3pm" },
                { day: "Wednesday", hours: "10am – 3pm" },
                { day: "Thursday", hours: "10am – 3pm" },
                { day: "Friday", hours: "10am – 3pm" },
                { day: "Saturday", hours: "Closed" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <li
                  key={item.day}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-(--color-accent-soft) transition "
                >
                  <AiOutlineClockCircle className="text-(--color-accent) w-5 h-5" />
                  <span className="flex-1">{item.day}</span>
                  <span className="font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
