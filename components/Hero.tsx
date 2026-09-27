import Link from "next/link";
import Image from "next/image";
import { oswald } from "@/lib/fonts";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[2px] text-[#c2f800]">
            Workout Library
          </p>
          <h1
            className={`${oswald.className} mt-4 text-[40px] font-black uppercase leading-[1.05] text-white sm:text-[52px]`}
          >
            Train With Intent. Log Every Set.
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[#9ca3af]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link
            href="#library"
            className={`${oswald.className} mt-8 inline-flex items-center gap-2 rounded-full bg-[#c2f800] px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.5px] text-black hover:scale-105 transition-transform duration-200`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v10M8 12l-4-4M8 12l4-4"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Browse Workouts
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={400}
            height={400}
            className="h-auto w-full max-w-[334px] rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}