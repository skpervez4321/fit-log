"use client";

import { useEffect, useState } from "react";
import { oswald } from "@/lib/fonts";
import { Workout } from "@/lib/types";
import WorkoutCard from "@/components/WorkoutCard";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data: Workout[]) => {
        setWorkouts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section id="library" className="mx-auto max-w-[1280px] px-6 py-12">
      <h2 className={`${oswald.className} text-[30px] font-bold uppercase tracking-[-0.75px] text-white`}>
        The Library
      </h2>
      <p className="mt-1 text-[14px] text-[#9ca3af]">
        Twelve lifts covering every major muscle group.
      </p>

      {loading ? (
        <p className="mt-10 text-center text-[14px] text-[#9ca3af]">Loading workouts...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}