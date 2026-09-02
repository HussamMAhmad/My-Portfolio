import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
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
  authors: [{ name: "Web Wizard", url: "https://your-domain.com" }],
  creator: "Hussam Ahmad",
  openGraph: {
    title: "Full-Stack Web Wizard",
    description: "build web application with modern features",
    url: "",
    siteName: "Web Wizard Portfolio",
    locale: "",
    type: "website",
  },
  twitter: {
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
