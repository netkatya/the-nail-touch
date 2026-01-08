"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  if (typeof window !== "undefined") {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light"
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-10 w-6 h-6 rounded-full grid place-items-center bg-(--color-bg-soft) shadow-md hover:shadow-lg transition-colors duration-300"
    >
      <FaMoon className="text-gray-400 text-md transition-colors duration-300 hover:text-gray-500" />
    </button>
  );
}
