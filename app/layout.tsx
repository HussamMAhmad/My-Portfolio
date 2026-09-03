import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baseUrlString = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || "https://web-wizard-hussam.vercel.app";
const baseUrl = new URL(baseUrlString);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: { default: "Web Wizard", template: "%s | Web Wizard" },
  description:
    "Web and Portfolio for Web Wizard projects Specializing in building integrated and fast web applications using React , Next.js , Nodejs",
  keywords: [
    "Web Wizard",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "مطور ويب",
    "معرض اعمال",
  ],
  authors: [{ name: "Web Wizard", url: baseUrlString }],
  creator: "Hussam Ahmad",
  openGraph: {
    title: "Full-Stack Web Wizard",
    description: "build web application with modern features",
    url:baseUrlString,
    siteName: "Web Wizard Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hussam Ahmad Portfolio",
      },
    ],
  },
  twitter: {
    images: "/opengraph-image.jpg",
    card: "summary_large_image",
    title: "Full-Stack WebWizerd",
    description:
      "Web and Portfolio for WebWizerd projects Specializing in building integrated and fast web applications using React , Next.js , Nodejs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={` ${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
