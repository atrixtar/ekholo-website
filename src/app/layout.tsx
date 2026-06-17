import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ekholo — The Content Climb System",
    template: "%s | Ekholo",
  },
  description:
    "Stop paying for clicks that vanish. Ekholo builds the complete path from ad click to sale — proof, warm-up, sales page, checkout, and follow-up — so your ad spend turns into actual revenue. No vanity metrics. No black box.",
  keywords: [
    "paid ads agency",
    "post-click path",
    "ad spend optimization",
    "content climb system",
    "DTC marketing",
    "landing page optimization",
    "warm-up article",
    "sales video",
    "conversion rate agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
