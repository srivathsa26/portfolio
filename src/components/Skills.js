import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { InView } from './motion-primitives/in-view';
import { fadeUp, stagger } from '../lib/motion';

const Skills = () => {
  const reduce = useReducedMotion();

  const skillCategories = [
    { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python'] },
    { title: 'Frontend', skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'Auth Workflows'] },
    { title: 'Databases', skills: ['MongoDB', 'PostgreSQL'] },
    { title: 'DevOps', skills: ['Docker', 'Docker Hub', 'CI/CD Basics', 'Vercel'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Linear'] },
    { title: 'Concepts', skills: ['OOP', 'DBMS', 'DSA', 'SDLC', 'Perf. Optimization', 'Sys Integration'] },
    { title: 'AI / ML', skills: ['Deep Learning', 'Model Training', 'Train/Test Split'] },
    { title: 'AI Coding Tools', skills: ['Antigravity', 'Cursor AI', 'Claude Code', 'OpenAI Codex'] },
  ];

  const ticker = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Python',
    'MongoDB',
    'Tailwind',
    'AI Agents',
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
