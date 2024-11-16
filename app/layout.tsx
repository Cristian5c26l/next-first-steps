import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {  Inter } from 'next/font/google';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const montserrat = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Cristian's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
