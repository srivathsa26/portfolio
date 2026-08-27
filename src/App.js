import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ScrollProgress } from './components/motion-primitives/scroll-progress';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[100dvh] bg-canvas"
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-surface focus:px-4 focus:py-2 focus:rounded-xl"
      >
        Skip to content
      </a>
      <ScrollProgress className="fixed z-[60] h-[2px] bg-accent" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-ink/[0.06] py-12"
      >
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-display text-lg tracking-tight text-ink">Srivathsa</p>
          <p className="font-mono text-xs text-mute tracking-wide">
            © {new Date().getFullYear()}, Bengaluru
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default App;
