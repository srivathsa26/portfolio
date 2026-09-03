import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { fadeUp, stagger } from '../lib/motion';

const About = () => {
  const reduce = useReducedMotion();

  const whatIDo = [
    'React & Next.js frontends in TypeScript',
    'REST APIs with NestJS, Swagger, and DTO validation',
    'Full-stack debugging and testing',
    'CI/CD pipelines with GitHub Actions',
    'PostgreSQL, TypeORM, and Drizzle ORM',
    'Auth with JWT and role-based access control',
  ];

  const whatIBring = [
    'Trace bugs from UI to API to database',
    'Own features from requirements to shipping',
    'Switch between frontend and backend daily',
    'AI-assisted dev with Claude Code and Cursor',
    'Reusable components and shared UI patterns',
    'Agile sprints, Linear, Jam, code reviews',
  ];

  const certifications = [
    'Prompt Design in Vertex AI, Google Cloud',
    'Gemini for Application Developers, Google',
    'Gemini for end-to-end SDLC, Google',
    'Java Basic, HackerRank',
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
              <p>I build web and SaaS products end-to-end. Frontend screens, backend APIs, database schemas, deployments.</p>
              <p>
                Right now I'm at{' '}
                <span className="text-ink font-medium">Geekonomy Technology</span> in Bengaluru,
                working on Next.js frontends, NestJS APIs, and CI/CD deployments in a 6-7 person Agile team.
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
                  B.E. in Computer Science & Engineering
                </p>
                <p className="text-mute text-sm mt-1">Global Academy of Technology, Bengaluru</p>
                <p className="font-mono text-xs text-mute mt-3">Dec 2021 – Jul 2025 | CGPA 7.93</p>
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
