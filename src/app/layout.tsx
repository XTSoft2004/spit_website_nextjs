import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "CLB Hỗ trợ Lập trình - SPIT",
  description: "Website do team bốn cục tạ làm ra",
};

import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
