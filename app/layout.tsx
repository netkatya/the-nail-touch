import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Nail Touch | Sheffield",
  description:
    "TheNailTouch by Nora Stewart offers professional beauty services in Sheffield. Manicure, Pedicure, Massage, Waxing, Eyebrows, Eyelashes. Safe, gentle, and relaxing treatments.",
  keywords: [
    "TheNailTouch",
    "Nora Stewart",
    "beauty salon Sheffield",
    "manicure Sheffield",
    "pedicure Sheffield",
    "massage Sheffield",
    "waxing Sheffield",
    "eyebrows Sheffield",
    "eyelashes Sheffield",
    "nail care Sheffield",
    "spa Sheffield",
    "professional beauty services",
    "personal care Sheffield",
    "cosmetic treatments Sheffield",
  ].join(", "),
  authors: [{ name: "Nora Stewart", url: "https://the-nail-touch.vercel.app" }],
  openGraph: {
    title: "The Nail Touch | Sheffield",
    description:
      "Professional beauty services in Sheffield by Nora Stewart. Manicure, Pedicure, Massage, Waxing, Eyebrows, Eyelashes. Safe and relaxing treatments.",
    url: "https://the-nail-touch.vercel.app/",
    siteName: "TheNailTouch",
    images: [
      {
        url: "https://the-nail-touch.vercel.app/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheNailTouch Beauty Salon Sheffield",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nail Touch | Sheffield",
    description:
      "Professional beauty services in Sheffield. Manicure, Pedicure, Massage, Waxing, Eyebrows, Eyelashes by Nora Stewart.",
    images: [
      {
        url: "https://the-nail-touch.vercel.app/img/og-image.jpg",
        alt: "TheNailTouch Beauty Salon Sheffield",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
