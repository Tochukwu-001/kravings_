import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
   <main className="min-h-dvh">
    <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="min-h-dvh bg-black/60 text-white">
        <h1>Africa's Finest Dishes</h1>
        <p>Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.</p>
        <Link href={"#"}>
          <p>See Our Dishes</p>
          <button>
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
   </main>
  );
}
