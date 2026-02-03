import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <motion.div
  animate={{
    scale: [1, 1.2, 1],
    x: [0, 30, 0],
    y: [0, -20, 0],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]"
/>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif">
          Building{" "}
          <span className="text-brand-primary">
            Technology, Talent
          </span>{" "}
          & Careers
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-brand-muted">
          Enterprise IT solutions, business consulting, and job-oriented training
          programs backed by real-world placements since 2004.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-brand-primary px-8 py-4 rounded-lg font-semibold">
            Partner With Us
          </button>
          <button className="border border-brand-steel px-8 py-4 rounded-lg">
            Start Your Career
          </button>
        </div>
      </div>
    </section>
  );
}
