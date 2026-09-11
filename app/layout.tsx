import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"]
});
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kravings-Africas touch",
  description: "A place to discover and enjoy African cuisine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
