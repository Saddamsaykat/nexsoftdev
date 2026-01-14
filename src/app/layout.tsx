import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/redux/lib/providers";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title:
    "Next Software Development | Expert Next.js & React Development Services",
  description:
    "Leading Next.js and React development company specializing in custom web applications, enterprise solutions, and scalable software. Expert TypeScript developers delivering high-performance, SEO-optimized applications for startups and businesses worldwide.",
  keywords: [
    "Next.js development company",
    "React development services",
    "TypeScript developers",
    "custom web application development",
    "enterprise software solutions",
    "Next Software Development",
    "scalable web applications",
    "SEO-optimized websites",
    "modern web development",
    "full-stack development services",
    "JavaScript consulting",
    "web app development agency",
  ],
  authors: [{ name: "Next Software Development" }],
  creator: "Next Software Development",
  publisher: "Next Software Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.nextsoftwaredevelopment.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Next Software Development | Expert Next.js & React Development Services",
    description:
      "Leading Next.js and React development company specializing in custom web applications, enterprise solutions, and scalable software. Expert TypeScript developers delivering high-performance, SEO-optimized applications.",
    url: "https://www.web.nexsoftdev.com",
    siteName: "Next Software Development",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Next Software Development - Modern Web Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next Software Development | Expert Next.js & React Development Services",
    description:
      "Leading Next.js and React development company. Custom web applications, enterprise solutions, and scalable software with expert TypeScript developers.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@nextsoftwaredev", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header theme="light" />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
