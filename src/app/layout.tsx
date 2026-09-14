import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udit Singh — Software Engineer",
  description: "Portfolio of Udit Singh, a software engineer working across Python, full-stack web apps, and applied AI/ML.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
