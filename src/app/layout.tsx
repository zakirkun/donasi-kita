import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "@/components/Footer";
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DonasiKita - Platform Donasi Online Terpercaya",
  description: "Platform donasi online untuk membantu mereka yang membutuhkan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if current path is auth page
  const isAuthPage = typeof window !== 'undefined' ? 
    window.location.pathname.startsWith('/auth') : false;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-1">
          {children}
        </div>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
