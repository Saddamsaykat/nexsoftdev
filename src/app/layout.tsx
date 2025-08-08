import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/redux/lib/providers";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Welcome to Next Software Development",
  description:
    "Next Software Development is your trusted partner for modern web solutions using Next.js, React, TypeScript, and scalable technologies. We build high-performance, SEO-optimized, and user-friendly applications tailored to your business needs.",
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
