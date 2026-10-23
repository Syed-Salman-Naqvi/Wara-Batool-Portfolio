import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WARA BATOOL | Biotechnology & Banking",
  description: "The professional portfolio of WARA BATOOL — biotechnology graduate, laboratory intern, and Science & Engineering Associate at UBL in Karachi, Pakistan.",
  keywords: ["WARA BATOOL", "Biotechnology", "Laboratory", "Banking", "Science and Engineering Associate", "Karachi"],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "WARA BATOOL | Science, Service & Continuous Growth",
    description: "A multidisciplinary professional portfolio connecting biotechnology, laboratory experience and banking.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
