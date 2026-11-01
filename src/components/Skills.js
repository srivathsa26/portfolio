import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { InView } from './motion-primitives/in-view';
import { fadeUp, stagger } from '../lib/motion';

const Skills = () => {
  const reduce = useReducedMotion();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'type ORM'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['CI/CD', 'Render', 'Vercel', 'deployments with SSL.'],
    },
    {
      title: 'AI/ML',
      skills: ['Python', 'CNN', 'Faster R-CNN', 'Deep Learning', 'NLP', 'LLMs', 'Google Vertex AI', 'Gemini'],
    },
    {
      title: 'Automation',
      skills: ['n8n', 'cron jobs', 'MCP integrations', 'Telegram/Discord bots'],
    },
    {
      title: 'Practices',
      skills: ['Agile', 'role-based access control', 'Git'],
    },
  ];

  const ticker = [
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'Tailwind CSS',
    'CI/CD',
    'Python',
    'n8n',
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
            Languages, frameworks, databases, and tools grouped by domain.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-ink/[0.07] bg-surface/70 shadow-sm"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -2, borderColor: 'rgba(26,95,255,0.4)', color: '#0C0C0E' }
                    }
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="inline-flex items-center font-mono text-xs text-mute bg-canvas border border-ink/[0.08] rounded-lg px-3 py-1.5 transition-colors cursor-default"
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
