import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamal's Portfolio",
  description: "Explore the portfolio of Ahmad Jamal, a Full-Stack Developer from Calgary. With nearly 20 years in tech and 4 years of professional experience, Ahmad has worked with startups like HigherGround and FreshGrade. Discover his projects using modern tools like Next.js, Tailwind, Three.js, and Blender.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="floralwhite" />
        <meta name="description" content="Explore the portfolio of Ahmad Jamal, a Full-Stack Developer from Calgary. With nearly 20 years in tech and 4 years of professional experience, Ahmad has worked with startups like HigherGround and FreshGrade. Discover his projects using modern tools like Next.js, Tailwind, Three.js, and Blender." />
        <meta name="keywords" content="Ahmad Jamal, Full-Stack Developer, Web Developer, Portfolio, Calgary, HigherGround, FreshGrade, Fresh Tracks Canada, Next.js, Tailwind, Three.js, Blender, CI/CD, SEO, Core Web Vitals, Google Analytics, Search Console, A/B Testing, Personalization, Solution Architect, CMS Management, Galaxy Generator, Canadian, Canada, Alberta" />
        <meta name="author" content="Ahmad R. Jamal" />
        <meta property="og:title" content="Ahmad R. Jamal's Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Ahmad Jamal, a Full-Stack Developer from Calgary. With nearly 20 years in tech and 4 years of professional experience, Ahmad has worked with startups like HigherGround and FreshGrade. Discover his projects using modern tools like Next.js, Tailwind, Three.js, and Blender." />
        <meta property="og:image" content="/media/og-image.png" />
        <meta property="og:url" content="https://ahmadrjamal.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmad R. Jamal's Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Ahmad Jamal, a Full-Stack Developer from Calgary. With nearly 20 years in tech and 4 years of professional experience, Ahmad has worked with startups like HigherGround and FreshGrade. Discover his projects using modern tools like Next.js, Tailwind, Three.js, and Blender." />
        <meta name="twitter:image" content="/media/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ahmad R. Jamal's Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
