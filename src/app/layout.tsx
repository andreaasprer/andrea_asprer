import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrea Asprer | Software Engineer Portfolio",
  description:
    "Andrea Asprer is a software engineer and Computer Science student at UCLA, based in Los Angeles, CA, building full-stack web applications and AI-powered projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
