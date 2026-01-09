import Link from "next/link";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-6">
      <Link
        href="https://www.instagram.com/the_nail_touch?igsh=d3hmbHk1MG0yNTc="
        target="_blank"
        className="text-[#4f8055] hover:text-(--color-accent-soft) transition-colors duration-200"
      >
        <FaInstagram className="w-7 h-7 " />
      </Link>
      <Link
        href="https://wa.me/447465474727"
        target="_blank"
        className="text-[#4f8055] hover:text-(--color-accent-soft) transition-colors duration-200"
      >
        <FaWhatsapp className="w-7 h-7 " />
      </Link>
      <Link
        href="mailto:the_nail_touch@gmail.com"
        className="text-[#4f8055] hover:text-(--color-accent-soft) transition-colors duration-200"
      >
        <FaEnvelope className="w-7 h-7" />
      </Link>
    </div>
  );
}
