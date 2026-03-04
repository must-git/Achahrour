import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/arabic_logo.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            src="/violin.png"
            alt="Next.js logo"
            width={1000}
            height={50}
            priority
          />
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-7xl">
            Achahrour&apos;s Personal Website
          </h1>
          <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Welcome to my personal website! Here you can find information about me,
            my projects, and how to contact me. Feel free to explore and learn
            more about what I do.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="mailto:mustaphaachahrour@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://must-folio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Portfolio
          </a>
        </div>
      </main>
    </div>
  );
}
