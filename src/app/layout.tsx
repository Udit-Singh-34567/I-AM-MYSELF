/* eslint-disable @next/next/no-page-custom-font -- Shared font stylesheet belongs to the App Router root layout. */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udit Singh — Software Engineer",
  description: "Portfolio of Udit Singh, a software engineer working across Python, full-stack web apps, and applied AI/ML.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>;
}
