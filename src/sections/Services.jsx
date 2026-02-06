// import { motion } from "framer-motion";

// const services = [
//   { title: 'Software Development', desc: 'Secure, scalable software and cloud solutions tailored to business needs.' },
//   { title: 'Business & IT Consulting', desc: 'Strategic guidance for digital transformation and sustainable growth.' },
//   { title: 'Training & Placements', desc: 'Industry-aligned training with real-time projects and high-demand placements.' }
// ];

// // 1. Define the Container (The Parent)
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // This creates the 1-by-1 effect
//     },
//   },
// };

// // 2. Define the Individual Card (The Child)
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   },
// };

// export default function Services() {
//   return (
//     <section className="py-24 px-6 max-w-6xl mx-auto">
//       <motion.h2 
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-serif mb-12"
//       >
//         Our Core Services
//       </motion.h2>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible
//         className="grid md:grid-cols-3 gap-8"
//       >
//         {services.map((s) => (
//           <motion.div 
//             key={s.title} 
//             variants={cardVariants}
//             whileHover={{ y: -10, borderColor: '#C1121F' }} // Bonus: Lift effect on hover
//             className="bg-brand-surface p-8 rounded-xl border border-brand-steel transition-colors"
//           >
//             <h3 className="text-xl text-brand-primary font-semibold">{s.title}</h3>
//             <p className="mt-4 text-brand-muted">{s.desc}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

const services = [
  { title: 'Software Development', desc: 'Custom web & application development, enterprise software solutions, product designs & system architechture , scalable , secure and future-ready development.' },
  { title: 'Branding and creative solutions', desc: 'Brand identity and positioning , corporate branding & visual design , brand communication & story telling , rebranding & brand transformation' },
  { title: 'Digital Marketing', desc: 'Performance marketing & lead generation SEO,SEM & social media marketing content strategy & brand campaigns analytics-driven growth optimization.' },
  {title:'Man Power Consulting',desc : 'IT & NON-IT staffing solutions contract , permanent & project-based hiring talent evaluation & workforce planning industry-ready resource development.s'},
  {title:'Strategy & Consulting',desc:'Business growth & market entry strategies digital transformation consulting process optimization & operqational strategy , brand and technology roadmaps.'}
];

// 1. Parent Animation Logic
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card (0.2 seconds)
    }
  }
};

// 2. Child Card Animation Logic
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="services">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-serif mb-12 text-brand-text"
      >
        Our Core Services
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {services.map((s) => (
          <motion.div 
            key={s.title} 
            variants={cardVariants}
            // THE "LIFT" EFFECT
            whileHover={{ 
              y: -10, 
              borderColor: '#C1121F',
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" 
            }}
            className="bg-brand-surface p-8 rounded-xl border border-brand-steel cursor-pointer transition-colors duration-300"
          >
            <h3 className="text-xl text-brand-primary font-semibold">{s.title}</h3>
            <p className="mt-4 text-brand-muted">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}