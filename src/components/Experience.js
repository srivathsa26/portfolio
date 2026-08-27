import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { easeOut, fadeUp, stagger } from '../lib/motion';

const Experience = () => {
  const reduce = useReducedMotion();

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Geekonomy Technology',
      location: 'Bengaluru',
      duration: 'Apr 2026 - Present',
      points: [
        'Developed CRM and workflow management applications using React.js, Next.js, JavaScript, and REST APIs',
        'Integrated frontend systems with backend services handling structured workflows and customer operations',
        'Built reusable UI components and scalable frontend modules',
        'Worked on monolithic CRM architecture integrated with PostgreSQL-backed services',
        'Debugged API failures, payload validation issues, and frontend-backend synchronization problems',
        'Improved application responsiveness by approximately 15-20%',
        'Worked with Docker-based deployment workflows and Vercel hosting',
        'Collaborated using Git workflows, pull requests, and code reviews',
        'Contributed to systems managing 1000+ records across workflow modules',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Geekonomy Technology',
      location: 'Bengaluru',
      duration: 'Oct 2025 - Mar 2026',
      points: [
        'Assisted in frontend development and API integration for internal business applications',
        'Built reusable React.js components connected to backend services',
        'Debugged UI issues and request-response handling problems',
        'Improved frontend consistency and application stability',
        'Worked in Agile development workflows with Git-based collaboration',
      ],
    },
    {
      title: 'Deep Learning Research Intern',
      company: 'DRDO (CABS)',
      location: 'Bengaluru',
      duration: 'Oct 2024 - Nov 2024',
      points: [
        'Developed aircraft detection pipelines involving preprocessing, model training, and validation',
        'Trained deep learning models on approximately 3000 images achieving around 95% validation accuracy',
        'Built reproducible experimentation workflows for evaluation and testing',
        'Worked with deep learning and computer vision pipelines',
      ],
    },
  ];

  return (
    <section id="experience" className="section-pad border-t border-ink/[0.06]">
      <div className="container-custom">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 max-w-xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl mb-4 leading-[1.05]">
            Experience
          </motion.h2>
          <motion.p variants={fadeUp} className="text-mute text-lg leading-relaxed">
            Full-stack product work and research internships.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-ink/[0.08] hidden lg:block"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: easeOut }}
              className="relative grid lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-ink/[0.07] first:border-t-0 first:pt-0 lg:pl-10"
            >
              <motion.span
                className="hidden lg:block absolute left-0 top-14 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-canvas"
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.1 }}
                aria-hidden="true"
              />

              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-accent mb-3">{exp.duration}</p>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink mb-1">
                  {exp.title}
                </h3>
                <p className="text-mute text-sm">
                  {exp.company}, {exp.location}
                </p>
              </div>

              <motion.ul
                variants={stagger(0.04, 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="lg:col-span-8 space-y-4"
              >
                {exp.points.map((point) => (
                  <motion.li
                    key={point}
                    variants={{
                      hidden: { opacity: 0, x: 10 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, ease: easeOut },
                      },
                    }}
                    className="text-mute text-[15px] leading-relaxed pl-4 border-l-2 border-accent/40"
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
