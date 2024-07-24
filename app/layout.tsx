import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"], 
  weight:["300","400","500","700"],
  variable:'--font-sans'
});

export const metadata: Metadata = {
  title: "Nabz",
  description: "A healthcare management system / یک سیستم مدیریت بهداشت و درمان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased',inter.variable)}>{children}</body>
    </html>
  );
}
