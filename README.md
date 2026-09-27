# FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, view detailed instructions for each lift, and build your daily training plan — all backed by a real API and persisted in your browser.

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Context API (global state for Plan/Saved)
- React Toastify (notifications)
- REST API (Programming Hero FitLog API)

## Features

1. **Workout Library** — Browse 12 workouts fetched live from the API, displayed in a responsive 3-column grid with category tags, equipment, and stats.
2. **Workout Details Page** — Dynamic route for each workout showing full instructions, equipment, difficulty, and specs, with "Add to Plan" and "Save for Later" actions.
3. **My Plan Dashboard** — Track today's planned workouts and saved workouts separately, with live metrics (total exercises, minutes, calories).
4. **Sort & Manage** — Sort your plan by Duration, Calories, or Rating; mark workouts as done or remove them, all with toast confirmations.
5. **Persistent State** — Your plan and saved list are stored in localStorage, so your progress survives a page reload. A 5-lift daily cap keeps today's plan focused.

   ## Live Demo
   [Live Site](https://fit-2zfarlyq8-khan-orbit.vercel.app)









