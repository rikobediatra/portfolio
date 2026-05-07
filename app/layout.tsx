import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riko Bediatra | Fullstack Developer",
  description:
    "Professional portfolio website showcasing profile, selected projects, and contact information.",
  openGraph: {
    title: "Riko Bediatra | Fullstack Developer",
    description:
      "Professional portfolio website showcasing profile, selected projects, and contact information.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
