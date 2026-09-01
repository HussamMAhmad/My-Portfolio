import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack WebWizerd",
  description:
    "Web and Portfolio for WebWizerd projects Specializing in building integrated and fast web applications using React , Next.js , Nodejs",
  keywords: [
    "Web Wizerd",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "مطور ويب",
    "معرض اعمال",
  ],
  authors: [{ name: "WebWizerd", url: "https://your-domain.com" }],
  creator: "WebWizerd",
  openGraph: {
    title: "Full-Stack WebWizerd",
    description: "build web application with modern features",
    url: "",
    siteName: "WebWizerd Portfolio",
    locale: "",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "WebWizerd Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack WebWizerd",
    description:
      "Web and Portfolio for WebWizerd projects Specializing in building integrated and fast web applications using React , Next.js , Nodejs",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
