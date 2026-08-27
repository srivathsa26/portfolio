import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { fadeUp, stagger } from '../lib/motion';

const About = () => {
  const reduce = useReducedMotion();

  const whatIDo = [
    'Building React.js & Next.js apps',
    'Integrating REST APIs & services',
    'Debugging request-response issues',
    'Developing scalable systems',
    'Database work (Mongo, Postgres)',
  ];

  const whatIBring = [
    'Strong debugging and problem-solving',
    'API integrations and workflow systems',
    'Cross-stack frontend and backend work',
    'AI-assisted development',
    'Reusable component systems',
    'Performance-minded workflows',
  ];

  const certifications = [
    'Deep Learning & Applications',
    'Intro to Generative AI',
    'Prompt Design using Google Vertex AI',
  ];

  const listItem = {
    hidden: { opacity: 0, x: -12 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="section-pad border-t border-ink/[0.06]">
      <div className="container-custom">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-14 lg:gap-20"
        >
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} className="eyebrow mb-5">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="display text-4xl md:text-5xl mb-6 leading-[1.05]"
            >
              Software engineer from Bengaluru
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-4 text-mute leading-relaxed max-w-[40ch] text-[17px]"
            >
              <p>Hands-on experience in full-stack development and AI-assisted systems.</p>
              <p>
                Currently at{' '}
                <span className="text-ink font-medium">Geekonomy Technology</span>, contributing to
                API integrations and frontend engineering: integrations, debugging, and performance.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="grid sm:grid-cols-2 gap-10">
              <motion.div variants={fadeUp}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
                  What I do
                </h3>
                <motion.ul
                  variants={stagger(0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3.5"
                >
                  {whatIDo.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="text-mute text-[15px] leading-relaxed border-l-2 border-ink/10 pl-4 hover:border-accent/50 transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
                  What I bring
                </h3>
                <motion.ul
                  variants={stagger(0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3.5"
                >
                  {whatIBring.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="text-mute text-[15px] leading-relaxed border-l-2 border-ink/10 pl-4 hover:border-accent/50 transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="panel p-8 grid sm:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                  Education
                </h3>
                <p className="font-display text-lg font-semibold tracking-tight">
                  B.E. Computer Science
                </p>
                <p className="text-mute text-sm mt-1">Visvesvaraya Technological University</p>
                <p className="font-mono text-xs text-mute mt-3">Graduated July 2025 | CGPA 7.93</p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-mute text-sm">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
