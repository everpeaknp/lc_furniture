import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furtinuer - Quality Furniture for Real Homes",
  description: "Timeless furniture for considered homes. Designed with purpose, made to last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
