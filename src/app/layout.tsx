import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const league_gothic = League_Gothic({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integrity Lad Labs",
  description: "Integrity Lad Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body className={league_gothic.className}>{children}</body>
    </html>
  );
}
