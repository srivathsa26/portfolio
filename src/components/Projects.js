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
      title: 'Hermes',
      subtitle: 'Scheduled task automation',
      description:
        'Scheduled task automation service using Cron, MCPs, and Telegram/Discord APIs.',
      features: [
        'Modular multi-worker service around an 8-job Cron pipeline of AI agents',
        'Processes and routes messages across Telegram and Discord',
        "Each agent's behavior defined in a dedicated skill file",
        'Scheduled autonomous execution without manual triggering',
      ],
      stack: ['Cron', 'MCP', 'Telegram', 'Discord', 'AI Agents'],
      link: null,
    },
    {
      title: 'Sridevi Electricals',
      subtitle: 'Local business website',
      description:
        'Marketing website for a Bangalore field-service business with service pages, areas, gallery, and contact CTAs.',
      features: [
        'Service, areas, gallery, about, and contact pages',
        'Local SEO structure for West Bangalore service areas',
        'Call and WhatsApp CTAs for leads',
        'Built with Next.js, TypeScript, and Tailwind CSS',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://sridevielectricals.in',
    },
    {
      title: 'DDK Infracon',
      subtitle: 'Business website',
      description:
        'Marketing website for DDK Infracon, a construction company in Bhubaneswar, covering about, services, projects, process, and enquiry flows.',
      features: [
        'About, services, projects, process, and contact sections',
        'Project gallery and lead enquiry form',
        'Phone, WhatsApp, and email CTAs',
        'Responsive layout for desktop and mobile',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://www.ddkinfracon.in/',
    },
    {
      title: 'YouTube Video Automation',
      subtitle: 'n8n + AI pipelines',
      description:
        'Automation platform using n8n to orchestrate video workflows and connect AI services via REST APIs.',
      features: [
        'Multi-step workflow automation using n8n',
        'AI-driven content generation via API integrations',
        'Automated publishing pipelines for video workflows',
        'Reduced manual overhead through structured automation',
      ],
      stack: ['n8n', 'AI APIs', 'JavaScript'],
      link: null,
    },
    {
      title: 'AI Resume Parser',
      subtitle: 'NLP / LLM extraction',
      description:
        'Resume parsing system that extracts structured candidate data using NLP and AI models.',
      features: [
        'Automated extraction of skills, experience, and education',
        'NLP-based section detection and entity recognition',
        'Structured JSON output for downstream systems',
        'Support for common resume formats',
      ],
      stack: ['Python', 'NLP', 'LLMs'],
      link: null,
    },
    {
      title: 'Military Aircraft Detection',
      subtitle: 'Computer vision research',
      description:
        'Deep learning pipeline for detecting aircraft in imagery: preprocessing, training, and validation.',
      features: [
        'Trained on approximately 3000 annotated images',
        'Around 95% validation accuracy',
        'Preprocess → train → evaluate pipeline',
        'Reproducible experimentation workflows',
      ],
      stack: ['Python', 'Deep Learning', 'CV'],
      link: null,
    },
    {
      title: 'YouTube Comment Analyzer',
      subtitle: 'NLP insights',
      description:
        'Python NLP system for analyzing and categorizing YouTube comments into structured insights.',
      features: [
        'Text preprocessing and analysis',
        'Comment classification workflows',
        'Structured insight generation',
        'NLP-based sentiment and categorization logic',
      ],
      stack: ['Python', 'NLP', 'ML'],
      link: null,
    },
    {
      title: 'Online Book Store',
      subtitle: 'MERN application',
      description:
        'Full-stack MERN bookstore with authentication, CRUD operations, and API-driven workflows.',
      features: [
        'User authentication',
        'CRUD operations',
        'Responsive frontend UI',
        'REST API integration with MongoDB',
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
