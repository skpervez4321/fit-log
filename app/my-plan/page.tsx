"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { usePlan, PlanItem } from "@/lib/PlanContext";
import { toast } from "react-toastify";

type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlanPage() {
  const { plan, saved, loaded, removeFromPlan, removeFromSaved, markDone } = usePlan();
  const [tab, setTab] = useState<"today" | "saved">("today");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const list = tab === "today" ? plan : saved;
  const sortedList = [...list].sort((a, b) => b[sortKey] - a[sortKey]);

  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  function handleRemove(item: PlanItem) {
    if (tab === "today") {
      removeFromPlan(item.id);
    } else {
      removeFromSaved(item.id);
    }
    toast.info("Removed");
  }

  function handleMarkDone(item: PlanItem) {
    markDone(item.id);
    toast.success(item.done ? "Marked as not done" : "Marked as done");
  }

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-10">
      <h1 className={`${oswald.className} text-[30px] font-bold uppercase tracking-[-0.75px] text-white`}>
        My Plan
      </h1>
      <p className="mt-1 text-[14px] text-[#8a92a0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6 flex w-full items-start justify-center rounded-2xl border border-[#232732] bg-[#13161d] px-6 py-8">
        <div className="flex-1 pr-6">
          <p className="text-[12px] text-[#8a92a0]">Exercises</p>
          <p className={`${oswald.className} mt-1 text-[36px] font-bold text-[#ccff00]`}>{plan.length}</p>
        </div>
        <div className="flex-1 border-l border-[#232732]/60 px-8">
          <p className="text-[12px] text-[#8a92a0]">Minutes</p>
          <p className={`${oswald.className} mt-1 text-[36px] font-bold text-white`}>{totalMinutes}</p>
        </div>
        <div className="flex-1 border-l border-[#232732]/60 px-8">
          <p className="text-[12px] text-[#8a92a0]">Calories</p>
          <p className={`${oswald.className} mt-1 text-[36px] font-bold text-white`}>{totalCalories}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-[5px]">
          <button
            onClick={() => setTab("today")}
            className={
              tab === "today"
                ? "rounded-lg border border-[#2b303d] bg-[#1f242d] px-4 py-1.5 text-[12px] font-bold text-white"
                : "px-4 py-1.5 text-[12px] text-[#8a92a0]"
            }
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={
              tab === "saved"
                ? "rounded-lg border border-[#2b303d] bg-[#1f242d] px-4 py-1.5 text-[12px] font-bold text-white"
                : "px-4 py-1.5 text-[12px] text-[#8a92a0]"
            }
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[12px] text-[#8a92a0]">Sort By</span>
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="rounded-lg border border-[#232732] bg-[#13161d] px-3 py-2 text-[12px] text-white"
          >
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {!loaded ? (
          <p className="py-10 text-center text-[14px] text-[#8a92a0]">Loading workouts...</p>
        ) : sortedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#232732] bg-[#13161d] py-16">
            <h2 className={`${oswald.className} text-[20px] font-bold uppercase text-white`}>
              Nothing here yet
            </h2>
            <p className="mt-2 text-[14px] text-[#8a92a0]">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-4 rounded-full bg-[#c2f800] px-6 py-2 text-[13px] font-semibold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-[#232732] bg-[#14171e] p-[17px]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-[80px] w-[144px] overflow-hidden rounded-xl bg-[#1f2937]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-[16px] font-bold uppercase tracking-[0.4px] text-white`}>
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-semibold text-[#8a92a0]">{item.equipment}</p>
                  <div className="mt-1.5 flex items-center gap-3 text-[12px] text-[#d1d5db]">
                    <span>{item.duration} min</span>
                    <span>{item.caloriesBurned} kcal</span>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/workouts/${item.id}`}
                  className="rounded-full border border-[#374151] px-4 py-2 text-[12px] text-white"
                >
                  View Details
                </Link>
                {tab === "today" && (
                  <button
                    onClick={() => handleMarkDone(item)}
                    className="rounded-full bg-[#c2f800] px-4 py-2 text-[12px] font-semibold text-black"
                  >
                    {item.done ? "✓ Done" : "Mark as Done"}
                  </button>
                )}
                <button onClick={() => handleRemove(item)} className="p-1.5 text-[#8a92a0]">
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}