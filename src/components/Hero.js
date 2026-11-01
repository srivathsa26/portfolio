import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { Magnetic } from './motion-primitives/magnetic';
import { Tilt } from './motion-primitives/tilt';
import { easeOut, stagger, fadeUp } from '../lib/motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 70]);
  const photoScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.05]);
  const blobY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0.4]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92dvh] lg:min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-canvas" />
        <motion.div
          style={{ y: blobY }}
          className="absolute -top-20 right-[-5%] h-[60vh] w-[60vw] rounded-full bg-accent/[0.08] blur-3xl anim-float"
        />
        <div className="absolute bottom-[-15%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-ink/[0.03] blur-3xl anim-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(12,12,14,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,12,14,0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black, transparent)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-24 md:py-28"
      >
        {/* Left Column: Intro, Headline, Subline, Action Buttons */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={stagger(0.08, 0.04)}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="mb-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/90 border border-ink/10 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-ink">Srivathsa SH</span>
              <span className="text-mute/40">/</span>
              <span className="font-mono text-xs text-mute">Full-Stack Engineer</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14] tracking-tight text-ink mb-5 max-w-2xl text-balance"
          >
            Full-stack engineer shipping production SaaS: Next.js, NestJS, PostgreSQL.
          </motion.h1>

          {/* Subline */}
          <motion.div variants={fadeUp} className="space-y-3 mb-8 max-w-xl">
            <p className="font-mono text-sm sm:text-base text-accent font-medium">
              Currently at Geekonomy Technology, Bengaluru.
            </p>
            <p className="text-mute text-base sm:text-lg leading-relaxed">
              I work across the stack. Next.js and TypeScript on the frontend, NestJS and PostgreSQL on the backend, shipped through CI/CD.
            </p>
          </motion.div>

          {/* Buttons: Download Resume (PDF), GitHub, LinkedIn, Email */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Magnetic intensity={0.25} range={90}>
              <a
                href="/Srivathsa_SH_Full_Stack_Developer_Resume_oct.pdf"
                download="Srivathsa_SH_Full_Stack_Developer_Resume_oct.pdf"
                className="btn-primary !px-5 !py-3 text-sm font-medium shadow-sm"
              >
                <FaFileDownload className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </Magnetic>

            <Magnetic intensity={0.2} range={80}>
              <a
                href="https://github.com/srivathsa26"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-4 !py-3 text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </Magnetic>

            <Magnetic intensity={0.2} range={80}>
              <a
                href="https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-4 !py-3 text-sm font-medium"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Magnetic>

            <Magnetic intensity={0.2} range={80}>
              <a
                href="mailto:Srivathsash26@gmail.com"
                className="btn-ghost !px-4 !py-3 text-sm font-medium"
              >
                <FaEnvelope className="w-4 h-4" />
                Email
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo Card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <Tilt
            rotationFactor={reduce ? 0 : 6}
            className="relative w-full max-w-[360px] sm:max-w-md aspect-[4/5]"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -inset-2.5 rounded-3xl border border-accent/25"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.3, ease: easeOut }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-ink/[0.08] shadow-soft bg-surface">
              <motion.img
                src="/srivathsa photo.jpg"
                alt="Srivathsa SH, Full-stack software developer based in Bengaluru"
                className="h-full w-full object-cover will-change-transform"
                loading="eager"
                width={400}
                height={500}
                fetchpriority="high"
                style={{ y: photoY, scale: photoScale }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
