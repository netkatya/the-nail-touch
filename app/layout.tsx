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
  authors: [{ name: "Nora Stewart", url: "https://www.the_nail_touch.com" }],
  openGraph: {
    title: "The Nail Touch | Sheffield",
    description:
      "Professional beauty services in Sheffield by Nora Stewart. Manicure, Pedicure, Massage, Waxing, Eyebrows, Eyelashes. Safe and relaxing treatments.",
    url: "https://www.the_nail_touch.com",
    siteName: "TheNailTouch",
    images: [
      {
        url: "/img/og-image.png",
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
    creator: "@nora_stewart",
    images: ["/img/og-image.png"],
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
