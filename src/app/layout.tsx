import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "O/S | Luis Orlando Solis",

  description:
    "Platform Engineering portfolio focused on infrastructure automation, hybrid cloud architecture, site reliability engineering, observability, and recovery platforms.",

  openGraph: {
    title: "O/S | Luis Orlando Solis",

    description:
      "Infrastructure Automation • Hybrid Cloud Architecture • Site Reliability Engineering",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luis Orlando Solis Platform Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O/S | Luis Orlando Solis",
    description:
      "Infrastructure Automation • Hybrid Cloud Architecture • Site Reliability Engineering",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
