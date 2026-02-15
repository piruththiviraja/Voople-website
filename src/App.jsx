import { motion, useScroll } from "framer-motion";
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
import Navbar from "./components/navbar";
import Aboutus from "./sections/Aboutus";
import HotJobsPage from "./pages/hotjobsvoople"
import "./App.css";
import { Routes ,Route} from "react-router-dom";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-brand-dark text-brand-text">

      <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-0">
        <img
          src="/logo.jpeg"
          alt="Company logo"
          className="w-72 h-72 opacity-10 logo-float"
        />

      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-float top-20 left-10" />
        <div className="absolute w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-float-slow bottom-20 right-10" />
      </div>


      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

        
      <main className="relative z-10 w-full">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <WhoWeAre />
              <VisionMission />
              <Services />
              <Technology />
              <Training />
              <Expertise />
              <Impact />
              <Aboutus />
              <Contact />
            </>
          }/>
          <Route path='/hotjobs' element={<HotJobsPage/>}/>

        </Routes>
        <Footer />

      </main>

    </div>
  );
}
