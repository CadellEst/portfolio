import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadell Estephane | Frontend Engineer",
  description:
    "Luxury-grade portfolio for Cadell Estephane - frontend engineer crafting performant, SEO-first experiences with Next.js, TypeScript, and Tailwind.",
  keywords: [
    "Cadell Estephane",
    "frontend engineer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "web developer",
    "SEO",
    "performance",
    "React",
  ],
  openGraph: {
    title: "Cadell Estephane | Frontend Engineer",
    description:
      "Frontend engineer specializing in Next.js, TypeScript, and Tailwind to ship fast, luxurious, and SEO-strong web experiences.",
    images: [
      {
        url: "/assets/logo.svg",
        width: 512,
        height: 512,
        alt: "Cadell Estephane monogram",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Cadell Estephane | Frontend Engineer",
    description:
      "Next.js + TypeScript specialist crafting performant, premium web products with SEO and polish.",
    images: ["/assets/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-obsidian text-champagne antialiased">{children}</body>
    </html>
  );
}
