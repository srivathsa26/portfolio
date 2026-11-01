import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FaArrowUpRightFromSquare, FaGithub, FaChevronDown } from 'react-icons/fa6';
import { Spotlight } from './motion-primitives/spotlight';
import { InView } from './motion-primitives/in-view';
import { easeOut, fadeUp, stagger } from '../lib/motion';

const ProjectCard = ({ project, index }) => {
  const reduce = useReducedMotion();

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.startsWith('http'));
  const hasLive = Boolean(project.liveUrl && project.liveUrl.startsWith('http'));

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.04, 0.2), ease: easeOut }}
      className="group relative py-10 md:py-12 border-t border-ink/[0.07] overflow-hidden rounded-2xl"
    >
      {!reduce && <Spotlight size={420} className="from-accent/20 via-accent/8 to-transparent" />}

      {project.isCaseStudy ? (
        /* Full-Stack ERP Case Study Card */
        <div className="space-y-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-1 pt-1 px-1">
              <span className="font-mono text-xs text-mute tabular-nums inline-block">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
                  Featured Case Study
                </span>
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-wider">
                  Production ERP
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-4 transition-colors duration-300 group-hover:text-accent">
                {hasLive ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {project.title}
                    <FaArrowUpRightFromSquare className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <div className="space-y-3 text-mute text-[15px] leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Problem
                  </h4>
                  <p>{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Key Decisions & Engineering
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-sm">
                    {project.keyDecisions.map((decision) => (
                      <li key={decision} className="text-mute">
                        <span className="text-ink font-medium">{decision.split(':')[0]}:</span>
                        {decision.substring(decision.indexOf(':') + 1)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              {/* Architecture Diagram */}
              <div className="rounded-xl border border-ink/10 bg-canvas/90 p-5 shadow-sm mb-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold mb-3">
                  Architecture Overview
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-ink/10 text-ink">
                    <span>Field Workers & Admin Portal</span>
                    <span className="text-[10px] text-accent">React + TypeScript</span>
                  </div>
                  <div className="flex justify-center text-mute text-xs">
                    <span>↓ SSE Real-Time Sync & REST ↓</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-ink/10 text-ink">
                    <span>Backend API (Render + SSL)</span>
                    <span className="text-[10px] text-accent">Express.js API</span>
                  </div>
                  <div className="flex justify-center text-mute text-xs">
                    <span>↓ Connection Pooling (Supabase) ↓</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-ink/10 text-ink">
                    <span>Database Cluster</span>
                    <span className="text-[10px] text-accent">PostgreSQL + Drizzle</span>
                  </div>
                </div>
              </div>

              {/* Stack & Action Buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-mute border border-ink/10 rounded-md px-2 py-0.5 bg-canvas/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(hasGithub || hasLive) && (
                  <div className="flex flex-wrap gap-2">
                    {hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-mute hover:text-accent border border-ink/10 hover:border-accent/40 rounded-lg px-3.5 py-2 transition-colors duration-200 bg-surface shadow-sm"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-surface bg-ink hover:bg-accent rounded-lg px-3.5 py-2 transition-colors duration-200 shadow-sm"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <FaArrowUpRightFromSquare className="w-3 h-3" />
                        Live ERP
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Standard Project Card */
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="relative lg:col-span-1 pt-1 px-1">
            <span className="font-mono text-xs text-mute tabular-nums inline-block">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="relative lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-2">
              {project.subtitle}
            </p>
            <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-ink mb-3 transition-colors duration-300 group-hover:text-accent">
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {project.title}
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-mute text-[15px] leading-relaxed max-w-[40ch]">
              {project.description}
            </p>

            {/* Custom live links for client websites */}
            {project.clientLinks && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
                {project.clientLinks.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    <span>{client.name}</span>
                    <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative lg:col-span-4">
            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="text-mute text-sm leading-relaxed pl-3 border-l border-ink/10 transition-colors duration-300 group-hover:border-accent/35"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-3 lg:pt-1">
            <div className="flex flex-wrap gap-2 lg:justify-end mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-mute border border-ink/10 rounded-md px-2 py-1 bg-canvas/80 transition-colors duration-300 group-hover:border-accent/25 group-hover:text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(hasGithub || hasLive) && (
              <div className="flex gap-2 lg:justify-end">
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-mute hover:text-accent border border-ink/10 hover:border-accent/30 rounded-lg px-3 py-1.5 transition-colors duration-200"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}

                {hasLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-mute hover:text-accent border border-ink/10 hover:border-accent/30 rounded-lg px-3 py-1.5 transition-colors duration-200"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                    Live
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      title: "Full-Stack ERP For Father's Business",
      subtitle: 'End-to-end business platform',
      isCaseStudy: true,
      problem:
        "Paper workflows caused lost job slips, unbilled inventory, and conflicting overtime claims. Field technicians recorded materials and hours on paper, leading to manual data entry delays and billing errors.",
      keyDecisions: [
        'Server-Sent Events (SSE): Implemented SSE for low-overhead, real-time sync so dispatch and field technicians receive instant job updates without the complexity and resource overhead of full WebSockets.',
        'Connection Pooling: Configured Supabase PostgreSQL connection pooling to ensure fast, stable throughput under concurrent technician check-ins without hitting database connection limits.',
        'Three-Tier RBAC: Enforced role-based access for Admin, Office, and Field Technicians to secure customer records, purchase orders, and payroll data.',
      ],
      stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Vite', 'Supabase', 'Render'],
      githubUrl: null,
      liveUrl: 'https://sridevielectricals.com',
    },
    {
      title: 'Military Aircraft Detection',
      subtitle: 'DRDO (CABS) research project',
      description:
        'Built an aircraft detection pipeline for aerial imagery during a research internship at DRDO (CABS), Bengaluru.',
      features: [
        'Annotated ~3,000 aerial images from scratch with bounding box labels for the training set',
        'CNN and Faster R-CNN pipeline: preprocessing, augmentation, training, and evaluation',
        'Achieved 95%+ validation accuracy on test imagery',
      ],
      stack: ['Python', 'CNN', 'Faster R-CNN', 'Deep Learning'],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: 'Client Websites',
      subtitle: 'Responsive production sites',
      description:
        'Built and shipped responsive websites for business clients from scratch, deployed on Vercel with ongoing updates.',
      features: [
        'Frontend components in JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS tailored to client branding',
        'End-to-end delivery: responsive device testing, deployment, and post-launch updates',
        'Live production deployments active for electrical engineering and construction clients',
      ],
      clientLinks: [
        { name: 'sridevielectricals.in', url: 'https://sridevielectricals.in' },
        { name: 'ddkinfracon.in', url: 'https://ddkinfracon.in' },
      ],
      stack: ['React.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vercel'],
      githubUrl: null,
      liveUrl: 'https://sridevielectricals.in',
    },
    {
      title: 'Hermes',
      subtitle: 'Automated notification pipelines',
      description:
        'Delivers automated, scheduled multi-channel alerts and daily intelligence digests directly to Telegram and Discord without manual intervention.',
      features: [
        '8-job automated cron pipeline with independent workers routing alerts across Telegram and Discord',
        "Each agent's behavior defined in modular skill files for autonomous scheduled execution",
      ],
      stack: ['cron jobs', 'MCP integrations', 'Telegram bots', 'Discord bots'],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: 'AI Resume Parser',
      subtitle: 'NLP and LLM extraction',
      description:
        'Converts unstructured resumes into structured candidate records (skills, work history, education) into clean JSON for ATS and database integration.',
      features: [
        'Extracts skills, work history, education, and contact details from varied PDF and text formats',
        'Section detection and entity recognition powered by NLP and LLMs',
        'Structured JSON output formatted for database ingestion',
        'Handles common resume layouts with configurable parsing rules',
      ],
      stack: ['Python', 'NLP', 'LLMs'],
      githubUrl: null,
      liveUrl: null,
    },
  ];

  const moreProjects = [
    {
      title: 'YouTube Video Automation',
      subtitle: 'n8n and AI pipelines',
      description:
        'n8n automation platform for video content workflows. Chains AI APIs together for content generation, processing, and publishing.',
      features: [
        'Multi-step n8n workflows with API calls, data transforms, and publish triggers',
        'AI content generation via external APIs for scripts and metadata',
        'Automated video upload and scheduling pipelines',
        'Reusable templates that cut manual work significantly',
      ],
      stack: ['n8n', 'AI APIs', 'JavaScript'],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: 'YouTube Comment Analyzer',
      subtitle: 'NLP insights',
      description:
        'Python tool that pulls YouTube comments and runs sentiment and topic analysis to generate structured insights.',
      features: [
        'Text preprocessing: tokenization, stopword removal, normalization',
        'Classifies comments into feedback, questions, and spam',
        'Aggregated sentiment and topic reports',
        'Keyword-driven categorization and scoring',
      ],
      stack: ['Python', 'NLP', 'ML'],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: 'Online Book Store',
      subtitle: 'Full-stack application',
      description:
        'Full-stack bookstore application with user authentication, book catalog with CRUD, and a responsive frontend.',
      features: [
        'Signup, login, and session management',
        'CRUD for browsing, adding, editing, and removing books',
        'Responsive UI for desktop and mobile',
        'Express.js REST API with MongoDB',
      ],
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: null,
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="section-pad border-t border-ink/[0.06] bg-surface/50">
      <div className="container-custom">
        <InView
          once
          viewOptions={{ amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mb-16 max-w-xl"
        >
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="eyebrow mb-5">
              Selected work
            </motion.p>
            <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl mb-4 leading-[1.05]">
              Projects
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mute text-lg leading-relaxed">
              Production builds, case studies, client sites, and research with verifiable live links.
            </motion.p>
          </motion.div>
        </InView>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More Projects toggle */}
        <div className="mt-8 border-t border-ink/[0.07] pt-8">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 font-mono text-sm text-mute hover:text-accent transition-colors duration-200"
          >
            <FaChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
            />
            {showMore ? 'Show fewer projects' : 'More projects'}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                {moreProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={featuredProjects.length + index}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
