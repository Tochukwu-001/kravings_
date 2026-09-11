import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
});

const SansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Kravings - Africa's Touch",
  description: "A place to discover and enjoy authentic African cuisines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${slabo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <footer/>
        </body>
    </html>
  );
}
