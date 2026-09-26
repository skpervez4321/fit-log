import { oswald } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1d24] bg-[#090a0d] py-10">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <rect x="0" y="10" width="2" height="8" rx="1" fill="#c2f800" />
            <rect x="2" y="12" width="4" height="4" rx="1" fill="#c2f800" />
            <rect x="6" y="13" width="16" height="2" fill="#c2f800" />
            <rect x="22" y="12" width="4" height="4" rx="1" fill="#c2f800" />
            <rect x="26" y="10" width="2" height="8" rx="1" fill="#c2f800" />
          </svg>
          <span className={`${oswald.className} text-[14px] font-bold uppercase tracking-[0.7px] text-white`}>
            FITLOG
          </span>
        </div>
        <p className="text-[12px] text-[#6b7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}