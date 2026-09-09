import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="min-h-dvh">
        <section className="min-h-dvh bg-[url('/bg.jpg')] bg-cover bg-center">
          <div className=" min-h-dvh bg-black/50 text-white flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl font-bold">Welcome to Kravings</h1>
            <p className="text-lg">Discover and share your favorite recipes with the world.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
