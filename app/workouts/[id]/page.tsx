import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { Workout } from "@/lib/types";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/WorkoutActions";

async function getWorkout(id: string): Promise<Workout | null> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21]">
          <Image src={workout.image} alt={workout.name} fill className="object-cover" />
        </div>

        <div>
          <h1 className={`${oswald.className} text-[36px] font-bold uppercase leading-[40px] tracking-[-0.9px] text-white`}>
            {workout.name}
          </h1>
          <p className="mt-3 max-w-[576px] text-[16px] leading-[24px] text-[#9ca3af]">
            {workout.description}
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#c2f800] px-3.5 py-1 text-[12px] font-semibold text-[#0f1115]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {[
              ["EQUIPMENT", workout.equipment],
              ["DIFFICULTY", workout.difficulty],
              ["SETS", workout.sets],
              ["REPS", workout.reps],
              ["DURATION", `${workout.duration} min`],
              ["CALORIES", `${workout.caloriesBurned} kcal`],
              ["RATING", workout.rating],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-6 py-3.5 ${i > 0 ? "border-t border-[#1e2330]" : ""}`}
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.6px] text-[#9ca3af]">
                  {label}
                </span>
                <span className="text-[14px] font-medium text-[#e5e7eb]">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <h2 className="text-[16px] font-extrabold uppercase tracking-[0.8px] text-white">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex gap-2 text-[14px] leading-[22.75px] text-[#d1d5db]">
                  <span className="text-[#9ca3af]">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </section>
  );
}