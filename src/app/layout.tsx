import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Jamal's Portfolio",
  description: "Hello from Calgary, I am a Full-Stack Developer with nearly 5 years of professional experience. I have worked with startups like HigherGround, FreshGrade and FreshTracks. Come explore my portfolio and learn more about what I love to do",
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
        <meta name="description" content="Hello from Calgary, I am a Full-Stack Developer with nearly 5 years of professional experience. I have worked with startups like HigherGround, FreshGrade and FreshTracks. Come explore my portfolio and learn more about what I love to do" />
        <meta name="keywords" content="Ahmad Jamal, Full-Stack Developer, Web Developer, Software Engineer, Portfolio, Calgary, Alberta, Canada, HigherGround, FreshGrade, Fresh Tracks Canada, Next.js, Tailwind CSS, Three.js, Blender, CI/CD, SEO, Core Web Vitals, Google Analytics, Search Console, A/B Testing, Personalization, Solution Architect, CMS Management, Galaxy Generator, Canadian Developer, Front-End Developer, Back-End Developer, JavaScript, React.js, Node.js, TypeScript, Agile Development, Remote Work, Freelancer, Development Agency, Web Development, Coding, Programming, Tech Industry" />
        <meta name="author" content="Ahmad Raza Jamal" />
        <meta property="og:title" content="Ahmad Jamal's Portfolio" />
        <meta property="og:description" content="Hello from Calgary, I am a Full-Stack Developer with nearly 5 years of professional experience. I have worked with startups like HigherGround, FreshGrade and FreshTracks. Come explore my portfolio and learn more about what I love to do" />
        <meta property="og:image" content="/media/og-image.png" />
        <meta property="og:url" content="https://ahmadrjamal.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmad Jamal's Portfolio" />
        <meta name="twitter:description" content="Hello from Calgary, I am a Full-Stack Developer with nearly 5 years of professional experience. I have worked with startups like HigherGround, FreshGrade and FreshTracks. Come explore my portfolio and learn more about what I love to do" />
        <meta name="twitter:image" content="/media/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ahmad R. Jamal Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
