import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Magnetic } from './motion-primitives/magnetic';
import { TextEffect } from './motion-primitives/text-effect';
import { Tilt } from './motion-primitives/tilt';
import { TextShimmer } from './motion-primitives/text-shimmer';
import { easeOut, stagger, fadeUp } from '../lib/motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const photoScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.1]);
  const blobY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0.35]);

  const socials = [
    { icon: FaEnvelope, href: 'mailto:Srivathsash26@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/srivathsa26', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE', label: 'LinkedIn' },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-canvas" />
        <motion.div
          style={{ y: blobY }}
          className="absolute -top-24 right-[-10%] h-[70vh] w-[70vw] rounded-full bg-accent/[0.07] blur-3xl anim-float"
        />
        <div className="absolute bottom-[-20%] left-[-15%] h-[55vh] w-[55vw] rounded-full bg-ink/[0.04] blur-3xl anim-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(12,12,14,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,12,14,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-custom relative z-10 grid min-h-[100dvh] grid-cols-1 lg:grid-cols-12 gap-12 items-center py-28 md:py-32"
      >
        <motion.div
          className="lg:col-span-7"
          variants={stagger(0.1, 0.05)}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.div variants={fadeUp} className="mb-6">
            {reduce ? (
              <p className="eyebrow">Full stack developer, Bengaluru</p>
            ) : (
              <TextShimmer as="p" className="eyebrow" duration={2.4}>
                Full stack developer, Bengaluru
              </TextShimmer>
            )}
          </motion.div>

          {reduce ? (
            <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[1.05] pb-1 mb-7 max-w-[11ch]">
              Srivathsa SH
            </h1>
          ) : (
            <TextEffect
              as="h1"
              per="char"
              preset="fade-in-blur"
              className="display text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[1.05] pb-1 mb-7 max-w-[11ch]"
              speedReveal={1.15}
            >
              Srivathsa SH
            </TextEffect>
          )}

          <motion.p
            variants={fadeUp}
            className="text-mute text-lg md:text-xl leading-relaxed max-w-[38ch] mb-10"
          >
            Building scalable web apps and API-driven systems with React, Next.js, Node.js, and AI-assisted workflows.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
            <Magnetic intensity={0.35} range={120}>
              <a href="#projects" className="btn-primary">
                View selected work
              </a>
            </Magnetic>
            <Magnetic intensity={0.35} range={120}>
              <a
                href="/Srivathsa_resume_FSD__25_aug.pdf"
                download="Srivathsa_Resume.pdf"
                className="btn-ghost"
              >
                Download resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3">
            {socials.map((social, i) => (
              <Magnetic key={social.label} intensity={0.45} range={90}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.06, duration: 0.4, ease: easeOut }}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.96 }}
                  className="inline-flex p-3 rounded-xl border border-ink/10 bg-surface text-mute hover:text-accent hover:border-accent/40 shadow-soft transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: easeOut }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <Tilt
            rotationFactor={reduce ? 0 : 8}
            className="relative w-full max-w-md aspect-[4/5]"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl border border-accent/20"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-ink/[0.06] shadow-soft bg-surface">
              <motion.img
                src="/srivathsa photo.jpg"
                alt="Srivathsa SH"
                className="h-full w-full object-cover will-change-transform"
                loading="eager"
                style={{ y: photoY, scale: photoScale }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
