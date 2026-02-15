import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6" id="hero">
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
        Voople.in is a diversed business solutions brand, crafted with a strong foundation in branding and strategies growth. Established in 2015, voople has evolved into a multi-domain organization delivering integrated services across branding,software develoment, digital marketing, manpower consulting ,business strategy. We partner with startups, SMES,colleges and enterprises to build strong brands , scalable digital products and efficient teams that drive long-term success.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-brand-primary px-8 py-4 rounded-lg font-semibold">
            Partner With Us
          </button>
          <Link to ="/hotjobs">
            <button className="border border-brand-steel px-8 py-4 rounded-lg">
              Start Your Career
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
