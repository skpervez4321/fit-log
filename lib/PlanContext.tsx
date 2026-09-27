"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Workout } from "@/lib/types";

export interface PlanItem extends Workout {
  done?: boolean;
}

interface PlanContextType {
  plan: PlanItem[];
  saved: PlanItem[];
  loaded: boolean;
  addToPlan: (workout: Workout) => boolean;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);
const PLAN_LIMIT = 5;

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    if (storedPlan) setPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, loaded]);

  function isInPlan(id: number) {
    return plan.some((w) => w.id === id);
  }
  function isInSaved(id: number) {
    return saved.some((w) => w.id === id);
  }
  function addToPlan(workout: Workout) {
    if (isInPlan(workout.id)) return false;
    if (plan.length >= PLAN_LIMIT) return false;
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    return true;
  }
  function addToSaved(workout: Workout) {
    if (isInSaved(workout.id)) return;
    setSaved((prev) => [...prev, workout]);
  }
  function removeFromPlan(id: number) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  }
  function removeFromSaved(id: number) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  }
  function markDone(id: number) {
    setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w)));
  }

  return (
    <PlanContext.Provider
      value={{ plan, saved, loaded, addToPlan, addToSaved, removeFromPlan, removeFromSaved, markDone, isInPlan, isInSaved }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used inside PlanProvider");
  return context;
}