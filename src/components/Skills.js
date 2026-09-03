import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { InView } from './motion-primitives/in-view';
import { fadeUp, stagger } from '../lib/motion';

const Skills = () => {
  const reduce = useReducedMotion();

  const skillCategories = [
    { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'] },
    { title: 'Frontend', skills: ['React.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
    { title: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Auth & RBAC', 'Swagger'] },
    { title: 'Databases', skills: ['PostgreSQL', 'TypeORM', 'MongoDB (basic)'] },
    { title: 'DevOps & Cloud', skills: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'AWS EC2 (Basics)'] },
    { title: 'Testing & Quality', skills: ['API Testing', 'Responsive Testing', 'UI Testing', 'Integration Testing'] },
    { title: 'Tools & Practices', skills: ['Figma', 'Linear', 'Claude Code', 'Cursor', 'Agile'] },
    { title: 'Concepts', skills: ['OOP', 'DBMS', 'DSA', 'SDLC', 'Perf. Optimization', 'Sys Integration'], note: true },
    { title: 'AI / ML', skills: ['Deep Learning', 'Model Training', 'Train/Test Split'], note: true },
    { title: 'AI Coding Tools', skills: ['Antigravity', 'Cursor AI', 'Claude Code', 'OpenAI Codex'], note: true },
  ];

  const ticker = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'NestJS',
    'Angular',
    'Tailwind',
    'AWS EC2',
  ];

  return (
    <section id="skills" className="section-pad border-t border-ink/[0.06] bg-surface/40 overflow-hidden">
      <div className="container-custom">
        <InView
          once
          viewOptions={{ amount: 0.35 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-xl"
        >
          <p className="eyebrow mb-5">Skills</p>
          <h2 className="display text-4xl md:text-5xl mb-4 leading-[1.05]">Technical stack</h2>
          <p className="text-mute text-lg leading-relaxed">
            Languages, frameworks, and tooling I use day to day.
          </p>
        </InView>
      </div>

      {!reduce && (
        <div
          className="relative mb-16 border-y border-ink/[0.06] bg-canvas/60 py-5"
          aria-hidden="true"
        >
          <InfiniteSlider gap={40} speed={60} speedOnHover={20}>
            {ticker.map((item) => (
              <span
                key={item}
                className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink/25"
              >
                {item}
                <span className="text-accent/40 ml-10">/</span>
              </span>
            ))}
          </InfiniteSlider>
        </div>
      )}

      <div className="container-custom">
        <motion.div
          variants={stagger(0.06, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeUp}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
                {category.title}
                {category.note && (
                  <span className="ml-2 text-[10px] italic text-mute/40 normal-case tracking-normal">
                    (beyond resume)
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -3, borderColor: 'rgba(26,95,255,0.35)', color: '#0C0C0E' }
                    }
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="font-mono text-xs text-mute bg-canvas border border-ink/[0.07] rounded-lg px-3 py-1.5 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
