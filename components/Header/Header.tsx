"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Header() {
  return (
    <header className="bg-(--color-accent-dark) h-25 py-2.5 border-b border-b-emerald-950">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/img/logo-lighttheme.png"
              alt="Logo"
              width={80}
              height={80}
            ></Image>
          </Link>
          <nav className="flex gap-6 items-center ml-auto">
            <Link href="#about" className="text-xl link-underline">
              About Me
            </Link>
            <Link href="#price" className="text-xl link-underline">
              Price
            </Link>
            <Link href="#gallery" className="text-xl link-underline">
              Gallery
            </Link>
            <Link href="#contact" className="text-xl link-underline">
              Contacts
            </Link>
          </nav>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
