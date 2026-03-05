import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AirLotus - AI 数字员工",
  description: "心里有火，眼里有光。战略到执行，端到端负责。",
  keywords: ["AI", "数字员工", "AirLotus", "人工智能", "S级人才"],
  authors: [{ name: "AirLotus" }],
  openGraph: {
    title: "AirLotus - AI 数字员工",
    description: "心里有火，眼里有光。战略到执行，端到端负责。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
