"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/lib/PlanContext";
import { Workout } from "@/lib/types";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved } = usePlan();

  function handleAddToPlan() {
    const added = addToPlan(workout);
    if (added) {
      toast.success("Added to today's plan");
    } else if (isInPlan(workout.id)) {
      return;
    } else {
      toast.error("Today's plan is full (5 lifts max)");
    }
  }

  function handleSave() {
    if (isInSaved(workout.id)) return;
    addToSaved(workout);
    toast.success("Saved for later");
  }

  return (
    <div className="mt-9 flex items-center gap-4">
      <button
        onClick={handleAddToPlan}
        disabled={isInPlan(workout.id)}
        className="flex items-center gap-2 rounded-xl bg-[#c2f800] px-6 py-3 text-[14px] font-semibold text-[#0f1115] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f1115" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18M8 2v4M16 2v4" />
        </svg>
        {isInPlan(workout.id) ? "Added to plan" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        disabled={isInSaved(workout.id)}
        className="flex items-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-[14px] font-medium text-[#e5e7eb] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        {isInSaved(workout.id) ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}


