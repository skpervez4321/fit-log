import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/lib/PlanContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion to plan and track your workouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0c0d10] antialiased`}>
        <PlanProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer theme="dark" position="bottom-right" />
        </PlanProvider>
      </body>
    </html>
  );
}