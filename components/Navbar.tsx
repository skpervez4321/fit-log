"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { oswald } from "@/lib/fonts";
import { usePlan } from "@/lib/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[rgba(12,13,16,0.95)] backdrop-blur-[2px]">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="0" y="10" width="2" height="8" rx="1" fill="#c2f800" />
            <rect x="2" y="12" width="4" height="4" rx="1" fill="#c2f800" />
            <rect x="6" y="13" width="16" height="2" fill="#c2f800" />
            <rect x="22" y="12" width="4" height="4" rx="1" fill="#c2f800" />
            <rect x="26" y="10" width="2" height="8" rx="1" fill="#c2f800" />
          </svg>
          <span className={`${oswald.className} text-[18px] font-black uppercase tracking-[0.9px] text-white`}>
            FITLOG
          </span>
        </Link>

        <nav className="flex items-center">
          <Link
            href="/"
            className={
              isWorkouts
                ? "rounded-full bg-[#1a2312] px-4 py-1.5 text-[12px] font-semibold text-[#c2f800]"
                : "px-4 py-1.5 text-[12px] font-medium text-[#9ca3af] hover:text-white"
            }
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={
              isMyPlan
                ? "rounded-full bg-[#1a2312] px-4 py-1.5 text-[12px] font-semibold text-[#c2f800]"
                : "px-4 py-1.5 text-[12px] font-medium text-[#9ca3af] hover:text-white"
            }
          >
            My Plan
          </Link>
        </nav>

        <Link href="/my-plan" className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#d1d5db]">Plan</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#9ca3af]">Saved</span>
            <span className="flex size-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-[#d1d5db]">
              {saved.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}