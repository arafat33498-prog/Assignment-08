import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat - আপনার কোরবানির বিশ্বস্ত সঙ্গী",
  description: "সঠিক নিয়মে পশু নির্বাচন এবং যত্নের মাধ্যমে আপনার কোরবানিকে করুন আরও আনন্দময়।",
  
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "QurbaniHat - অনলাইন পশু হাট",
    description: "সেরা মানের কোরবানি পশু এবং প্রয়োজনীয় টিপস পেতে আমাদের ভিজিট করুন।",
    url: "https://qurbanice-hat.vercel.app", 
    siteName: "QurbaniHat",
    images: [
      {
        url: "https://qurbanice-hat.vercel.app/logo.png", 
        width: 1200,
        height: 630,
        alt: "QurbaniHat Preview Image",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <Toaster position="top-center" />
        <main className="flex-grow">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}