import Link from "next/link";
import { oswald } from "@/lib/fonts";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[2px] text-[#c2f800]">404</p>
      <h1 className={`${oswald.className} mt-4 text-[36px] font-black uppercase text-white`}>
        Page Not Found
      </h1>
      <p className="mt-3 max-w-[420px] text-[14px] text-[#9ca3af]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-[#c2f800] px-6 py-2.5 text-[13px] font-semibold text-black"
      >
        Go to Workouts
      </Link>
    </section>
  );
}