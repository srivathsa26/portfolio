import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div className="min-h-screen bg-gray-900">
      <CustomCursor />
      <Navbar />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} SRIVATHSA SH. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default App;
