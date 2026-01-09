"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const menuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  }),
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#prices", label: "Price" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contacts" },
  ];

  return (
    <header className="bg-(--color-accent-dark) w-full h-25 py-2.5 border-b border-b-(--color-text-hero) fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/img/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl link-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger icon */}
        <button
          className="md:hidden text-xl text-white ml-auto"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="fixed top-0 right-0 w-full h-full bg-(--color-bg-soft) z-70 flex flex-col md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="bg-(--color-accent-dark) h-25 py-2.5 border-b border-b-emerald-950 flex justify-between px-4">
            <Link href="/">
              <Image src="/img/logo.png" alt="Logo" width={80} height={80} />
            </Link>
            <button
              className="text-xl text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-12 flex flex-col justify-between h-full">
            <nav className="flex flex-col gap-6 ">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div>
              <SocialMediaLinks />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
