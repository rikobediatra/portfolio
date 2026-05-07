import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Senior Developer Portfolio",
  description:
    "Professional portfolio website showcasing profile, selected projects, and contact information.",
  openGraph: {
    title: "Your Name | Senior Developer Portfolio",
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
