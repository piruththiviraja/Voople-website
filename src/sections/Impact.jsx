import Reveal from "../components/animation/Reveal";
import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    { number: "2000+", label: "Successful Placements" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "30%", label: "Productivity Increase" },
  ];

  return (
    <section className="py-24 px-6 bg-brand-dark"> 
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <Reveal key={index}>
            <div className="p-6">
              <h3 className="text-5xl text-brand-primary font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-brand-text text-lg italic">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}