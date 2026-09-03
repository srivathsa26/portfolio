import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { easeOut, fadeUp, stagger } from '../lib/motion';

const Experience = () => {
  const reduce = useReducedMotion();

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Geekonomy Technology Pvt. Ltd.',
      location: 'Bengaluru',
      duration: 'Apr 2026 - Present',
      points: [
        'Shipped 50+ UI screens across multiple web and SaaS projects in Next.js and TypeScript.',
        'Built REST APIs across 20+ backend modules in NestJS with DTO validation and Swagger docs.',
        'Set up JWT auth and role-based access control with protected routes and scoped permissions.',
        'Handle features end-to-end: requirements, code, test, debug, ship. Average 3\u20135 per week.',
        'Run GitHub Actions CI/CD pipelines for builds, validation, and deployments. 6-7 person Agile team.',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Geekonomy Technology Pvt. Ltd.',
      location: 'Bengaluru',
      duration: 'Oct 2025 - Mar 2026',
      points: [
        'Worked on Bragi, a multi-tenant SaaS CRM used by 20+ internal users. Schema had 54 tables; I built 3\u20135 of them.',
        'Connected database entities to backend logic, wired up REST APIs between frontend and backend, and tracked down data-flow bugs during QA.',
        'Used Linear for task tracking and Jam for visual bug reports. Worked in Agile sprints alongside QA engineers.',
      ],
    },
    {
      title: 'Deep Learning Research Intern',
      company: 'DRDO (CABS)',
      location: 'Bengaluru',
      duration: 'Oct 2024 - Nov 2024',
      points: [
        'Built an aircraft detection pipeline for aerial imagery: annotation, preprocessing, training, and evaluation with CNN and Faster R-CNN.',
        'Annotated ~3,000 aerial images from scratch and hit 95%+ validation accuracy.',
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
