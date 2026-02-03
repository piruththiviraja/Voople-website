// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// export default App
// import Hero from './sections/Hero'
// import WhoWeAre from './sections/WhoWeAre'
// import VisionMission from './sections/VisionMission'
// import Services from './sections/Services'
// import Technology from './sections/Technology'
// import Training from './sections/Training'
// import Expertise from './sections/Expertise'
// import Impact from './sections/Impact'
// import Contact from './sections/Contact'
// import Footer from "./components/layout/Footer";


// export default function App() {
// return (
//   <>
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
//         style={{ scaleX: scrollYProgress }}
//       />
//       <Hero />
// <WhoWeAre />
// <VisionMission />
// <Services />
// <Technology />
// <Training />
// <Expertise />
// <Impact />
// <Contact />
// <Footer />
//     </>
// )
// }
import { motion, useScroll } from "framer-motion"; // 1. Added imports
import Hero from './sections/Hero'
import WhoWeAre from './sections/WhoWeAre'
import VisionMission from './sections/VisionMission'
import Services from './sections/Services'
import Technology from './sections/Technology'
import Training from './sections/Training'
import Expertise from './sections/Expertise'
import Impact from './sections/Impact'
import Contact from './sections/Contact'
import Footer from "./components/layout/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    // 'w-screen' ensures we take the full browser width
    <div className="min-h-screen w-screen overflow-x-hidden bg-brand-dark text-brand-text">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <main className="w-full">
        <Hero />
        <WhoWeAre />
        <VisionMission />
        <Services />
        <Technology />
        <Training />
        <Expertise />
        <Impact />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}