import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-500 to-blue-300 text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Добро пожаловать в CarShop!
        </h1>
        <p className="text-lg text-center sm:text-left">
          Ваш надежный партнер в мире автомобилей.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link href="/main">
            <p className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-700 text-white gap-2 hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Каталог автомобилей
            </p>
          </Link>
          <a
            className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-blue-400 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
          >
            About
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contacts"
        >
          Contacts
        </a>
      </footer>
    </div>
  );
}