"use client";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Gallery", href: "#gallery" },
    { name: "Prices", href: "#prices" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-(--color-accent-dark) border-t border-t-(--color-text-hero) pt-6">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/img/logo.png" alt="Logo" width={120} height={120} />
        </Link>

        <nav className="flex flex-col md:flex-row text-center justify-center gap-6 text-(--color-accent-soft) font-medium">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="link-underline">
              {item.name}
            </Link>
          ))}
        </nav>
        <SocialMediaLinks />
        <ThemeToggler />
      </div>

      <div className="mt-6 mx-auto h-px w-full bg-white opacity-50"></div>

      <div className="flex justify-center items-center gap-6 p-4">
        <p className="flex items-center justify-center gap-2 text-(--color-accent-soft) text-sm">
          <AiOutlineSafetyCertificate className="w-5 h-5" />
          <span>STGX00LI01 – Salon Gold (Public Liability)</span>
        </p>
        <p className=" text-center text-sm text-(--color-accent-soft)">
          &copy; {currentYear} The Nail Touch. Website created by{" "}
          <Link
            href="https://www.linkedin.com/in/kateryna-pryhoda"
            target="_blank"
            aria-label="Developer's Linkedin link"
            className="hover:text-white transition-colors duration-200"
          >
            Kateryna Pryhoda
          </Link>{" "}
          &{" "}
          <Link
            href="https://www.linkedin.com/in/viktorliulchyk"
            target="_blank"
            aria-label="Developer's Linkedin link"
            className="hover:text-white transition-colors duration-200"
          >
            Viktor Liulchyk
          </Link>
        </p>
      </div>
    </footer>
  );
}
