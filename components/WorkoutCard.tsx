import Link from "next/link";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { Workout } from "@/lib/types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]"
    >
      <div className="relative h-[192px] w-full">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#c2f800] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.5px] text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`${oswald.className} mt-2 text-[18px] font-bold uppercase tracking-[0.45px] text-white`}>
          {workout.name}
        </h3>
        <p className="mt-1 text-[12px] text-[#9ca3af]">{workout.equipment}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-[#20242e] pt-3">
          <span className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <path d="M12 2c2 3 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3 2-5 0 2 1 3 2 2-1-3 0-5 1-7z" />
            </svg>
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
            </svg>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}