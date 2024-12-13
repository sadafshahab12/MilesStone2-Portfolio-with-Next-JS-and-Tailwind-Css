import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components//Footer";

const poppin = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadaf Shahab | Portfolio",
  description: "Explore my professional portfolio built with Next.js and styled using Tailwind CSS. Discover my skills, past projects, and learn more about me in the About section. Connect with me through the Contact page for potential opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
