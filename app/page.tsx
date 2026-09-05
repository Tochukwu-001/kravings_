import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-dvh">
    <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="min-h-dvh bg-black/60"></div>
    </section>
   </main>
  );
}
