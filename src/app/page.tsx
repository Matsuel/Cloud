import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button variant="secondary">Click Me!</Button>
        <Image
          className="invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button variant="primary">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Button>
          <Button variant="secondary">
            Read our docs
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <CustomLink href="https://github.com/Matsuel/Cloud" target="_blank">
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub logo"
            width={16}
            height={16}
          />
          GitHub
        </CustomLink>
        <CustomLink href="https://matsuel.vercel.app" target="_blank">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Personal website"
            width={16}
            height={16}
          />
          Portfolio
        </CustomLink>

        <CustomLink href="https://www.linkedin.com/in/matheo-lang" target="_blank">
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn logo"
            width={16}
            height={16}
          />
          LinkedIn
        </CustomLink>

      </footer>
    </div>
  );
}
