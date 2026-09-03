import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Spotlight } from './motion-primitives/spotlight';
import { InView } from './motion-primitives/in-view';
import { easeOut, fadeUp, stagger } from '../lib/motion';

const ProjectRow = ({ project, index }) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.04, 0.2), ease: easeOut }}
      className="group relative grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-12 border-t border-ink/[0.07] overflow-hidden rounded-2xl"
    >
      {!reduce && <Spotlight size={420} className="from-accent/20 via-accent/8 to-transparent" />}

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
          {project.link ? (
            <a
              href={project.link}
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
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-mute border border-ink/10 rounded-md px-2 py-1 bg-canvas/80 transition-colors duration-300 group-hover:border-accent/25 group-hover:text-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack ERP For Father's Business",
      subtitle: 'End-to-end business platform',
      description:
        "Replaced paper workflows for my father's electrical services business with a unified ERP. Covers CRM, job scheduling, inventory, purchase orders, payroll, and invoicing in one app.",
      features: [
        'Worker Portal with real-time sync via Server-Sent Events. Field technicians update jobs, log hours, and record materials on-site.',
        'Automated payroll from attendance records, three-tier role access (admin/office/field), PDF invoices, and an onboarding wizard.',
        'Live on Render + Supabase (PostgreSQL) with SSL, connection pooling, and health checks.',
      ],
      stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Vite', 'Supabase', 'Render'],
      link: 'https://sridevielectricals.com',
    },
    {
      title: 'Hermes',
      subtitle: 'Scheduled task automation',
      description:
        'Runs 8 scheduled jobs on cron with MCP integrations and Telegram/Discord messaging. No manual triggering needed.',
      features: [
        '8-job cron pipeline with independent workers routing messages across Telegram and Discord',
        "Each agent's behavior defined in a skill file for flexible, autonomous execution",
      ],
      stack: ['Cron', 'MCP', 'Telegram', 'Discord'],
      link: null,
    },
    {
      title: 'Client Websites',
      subtitle: 'Responsive client sites',
      description:
        'Built and shipped responsive websites for clients from scratch. Requirements, design, build, test, deploy on Vercel, and ongoing updates.',
      features: [
        'Frontend components in JS/TS, HTML5, CSS3, and Tailwind, adapted to each client\'s brand',
        'End-to-end delivery: responsive testing, deployment, post-launch updates',
        'Live: sridevielectricals.in (electrical, Bangalore) and ddkinfracon.in (construction, Bhubaneswar)',
      ],
      stack: ['React.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vercel'],
      link: 'https://sridevielectricals.in',
    },
    {
      title: 'Military Aircraft Detection',
      subtitle: 'Computer vision research',
      description:
        'DRDO-CABS research project. Built the full detection pipeline for identifying aircraft in aerial satellite images.',
      features: [
        'Annotated ~3,000 aerial images with bounding box labels for the training set',
        'CNN and Faster R-CNN pipeline: preprocessing, augmentation, training, evaluation',
        '95%+ validation accuracy on held-out test images',
      ],
      stack: ['Python', 'CNN', 'Faster R-CNN', 'Deep Learning'],
      link: null,
    },
    {
      title: 'YouTube Video Automation',
      subtitle: 'n8n + AI pipelines',
      description:
        'n8n automation platform for video content workflows. Chains AI APIs together for content generation, processing, and publishing.',
      features: [
        'Multi-step n8n workflows with API calls, data transforms, and publish triggers',
        'AI content generation via external APIs for scripts and metadata',
        'Automated video upload and scheduling pipelines',
        'Reusable templates that cut manual work significantly',
      ],
      stack: ['n8n', 'AI APIs', 'JavaScript'],
      link: null,
    },
    {
      title: 'AI Resume Parser',
      subtitle: 'NLP / LLM extraction',
      description:
        'Takes unstructured resumes and pulls out structured data (skills, experience, education) using NLP and LLMs. Outputs clean JSON.',
      features: [
        'Extracts skills, work history, education, and contact info from varied formats',
        'Section detection and entity recognition via NLP',
        'JSON output for ATS and database integration',
        'Handles common resume layouts with configurable rules',
      ],
      stack: ['Python', 'NLP', 'LLMs'],
      link: null,
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
      link: null,
    },
    {
      title: 'Online Book Store',
      subtitle: 'MERN application',
      description:
        'Full-stack bookstore with the MERN stack. Auth, book catalog with CRUD, and a responsive React frontend.',
      features: [
        'Signup, login, and session management',
        'CRUD for browsing, adding, editing, and removing books',
        'Responsive React UI for desktop and mobile',
        'Express.js REST API with MongoDB',
      ],
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: null,
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
              Product builds, automation, client sites, and research with measurable outcomes.
            </motion.p>
          </motion.div>
        </InView>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
