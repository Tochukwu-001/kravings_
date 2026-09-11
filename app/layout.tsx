import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Brought in the Footer component

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-slabo",
});

// Configure secondary font (Sansita Swashed) for headings/accents
const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sansita",
});

export const metadata: Metadata = {
  title: "Kravings - Africa's Touch",
  description: "A place to discover and enjoy authentic African cuisines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Added both font variables so you can use them in Tailwind classes later
      className={`${slabo.variable} ${sansitaSwashed.variable} h-full antialiased`}>
      {/* Set Slabo as the default font for the body */}
      <body className={`${slabo.className} min-h-dvh flex flex-col`}>
        <Navbar />
        
        
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}