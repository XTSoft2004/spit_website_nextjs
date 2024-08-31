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
  title: "SPIT",
  description: "Website CLB SPIT",
};

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
        <Footer />
      </body>
    </html>
  );
}
