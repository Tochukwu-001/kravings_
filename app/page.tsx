import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
   <main className="min-h-dvh">
    <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="min-h-dvh bg-black/60 text-white">
        <blockquote className="lg:w-1/2 mx-auto md:pt-30 pt-10 space-y-4 max-md:p-3">
          <h1 className="md:text-6xl text-4xl font-bold text-center">Africa's Finest Dishes</h1>
          <p className="tracking-wider md:text-lg text-center">Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.</p>
          <Link href={"#"} className="bg-white text-black flex items-center mx-auto md:mt-20 w-fit p-2 rounded-full gap-1">
            See Our Dishes
            <button className="text-white w-7 h-7 rounded-full flex items-center justify-center" style={{backgroundColor: Theme.primaryColor}}>
              <FaArrowRightLong />
            </button>
          </Link>
        </blockquote>
      </div>
    </section>
   </main>
  );
}
