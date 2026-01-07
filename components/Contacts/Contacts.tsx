import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

export default function Contacts() {
  return (
    <section
      className="relative py-20 bg-linear-to-b from-white to-(--color-bg-soft) overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-(--color-accent-soft) opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-(--color-accent-soft) opacity-20 blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-(--color-accent-soft) opacity-10 blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl mb-12 text-center font-heading">Contacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <Link
              href="https://www.instagram.com/the_nail_touch?igsh=d3hmbHk1MG0yNTc="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-(--color-bg-soft) shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                <FaInstagram className="text-(--color-accent-dark) w-6 h-6" />
              </div>
              <span className="text-(--color-text-main) text-lg">
                @the_nail_touch
              </span>
            </Link>

            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-(--color-bg-soft) shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                <FaWhatsapp className="text-(--color-accent-dark) w-6 h-6" />
              </div>
              <span className="text-(--color-text-main) text-lg">
                +44 746 547 4727
              </span>
            </Link>

            <Link
              href="mailto:example@email.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-(--color-bg-soft) shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                <FaEnvelope className="text-(--color-accent-dark) w-6 h-6" />
              </div>
              <span className="text-(--color-text-main) text-lg">
                the_nail_touch@gmail.com
              </span>
            </Link>

            <div className="flex items-center gap-2 p-6 rounded-2xl bg-(--color-bg-soft) shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-accent-soft) rounded-full drop-shadow-md">
                <FaMapMarkerAlt className="text-(--color-accent-dark) w-6 h-6" />
              </div>
              <span className="text-(--color-text-main) text-lg">
                S8, Sheffield
              </span>
            </div>
          </div>

          <div className="bg-(--color-bg-soft) p-6 rounded-2xl shadow-lg relative">
            <h3 className="text-xl mb-6 font-semibold text-center">
              Opening Hours
            </h3>
            <ul className="text-(--color-text-main) space-y-3">
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
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-(--color-accent-soft) transition"
                >
                  <AiOutlineClockCircle className="text-(--color-accent-dark) w-5 h-5" />
                  <span className="flex-1">{item.day}:</span>
                  <span className="font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
