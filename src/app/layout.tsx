import type { Metadata } from "next";
import {Rubik, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const textFont = Rubik({
  variable: "--font-text",
  subsets: ["latin"],

});

const styleFont = Poppins({
  variable: "--font-style",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]

});

export const metadata: Metadata = {
  title: "Koperasi Desa Merah Putih",
  description: "Koperasi Desa/Kelurahan Merah Putih adalah koperasi yang beranggotakan warga yang berdomisili di desa atau kelurahan yang sama dan dibuktikan dengan kartu tanda penduduk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${textFont.variable} ${styleFont.variable} font-text antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
