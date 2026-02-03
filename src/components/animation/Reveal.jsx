//  import { motion } from 'framer-motion'


// // export default function Reveal({ children }) {
// // return (
// // <motion.div
// // initial={{ opacity: 0, y: 40 }}
// // whileInView={{ opacity: 1, y: 0 }}
// // viewport={{ once: true }}
// // transition={{ duration: 0.7, ease: 'easeOut' }}
// // >
// // {children}
// // </motion.div>
// // )
// // }
// export default function Reveal({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       // 'amount' ensures it triggers when 20% of the element is visible
//       // 'margin' triggers it 100px before it enters the viewport
//       viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }} 
//       transition={{ duration: 0.7, ease: 'easeOut' }}
//     >
//       {children}
//     </motion.div>
//   )
// }
//import { motion } from "framer-motion"; // Make sure this is exactly at the top

// export default function Reveal({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }
import { motion } from 'framer-motion'

export default function Reveal({ children }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "fit-content" }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.215, 0.61, 0.355, 1] // "Cubic Bezier" for a smoother, snappy finish
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}