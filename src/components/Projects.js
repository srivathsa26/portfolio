import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCogs, FaCheckCircle } from 'react-icons/fa';
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiOpenai
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Video Automation System",
      description: "Automation platform that leverages n8n to orchestrate complex video workflows, connecting multiple AI services via REST APIs for seamless content generation and automated publishing.",
      image: "/YouTube Video Automation.jpeg",
      features: [
        "Multi-step workflow automation using n8n",
        "AI-driven content generation via API integrations",
        "Automated publishing pipelines for video workflows",
        "Orchestration of multiple AI services for tasks",
        "Structured data flow and task automation",
        "Reduced manual overhead through intelligent workflows"
      ],
      technologies: [
        { name: "n8n", icon: FaCogs, color: "#FF6C5F" },
        { name: "AI Integration", icon: SiOpenai, color: "#FFFFFF" },
        { name: "REST APIs", icon: FaCogs, color: "#3776AB" },
        { name: "JavaScript", icon: SiPython, color: "#F7DF1E" }
      ]
    },
    {
      title: "YouTube Comment Analyzer",
      description: "Python-based NLP system for analyzing and categorizing YouTube comments using text processing techniques. Generated structured insights from text data through classification workflows.",
      image: "/YouTube Comment Analyzer.jpeg",
      features: [
        "Text preprocessing and analysis",
        "Comment classification workflows",
        "Structured insight generation",
        "NLP-based sentiment logic",
        "Categorization logic"
      ],
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "NLP", icon: FaRocket, color: "#8B5CF6" },
        { name: "Machine Learning", icon: FaRocket, color: "#10B981" }
      ]
    },
    {
      title: "Online Book Store",
      description: "Full-stack MERN application with authentication, CRUD operations, and database-driven workflows. Built responsive frontend interfaces integrated with backend APIs.",
      image: "/Online Book Store.jpeg",
      features: [
        "User authentication",
        "CRUD operations",
        "Responsive frontend UI",
        "REST API integration",
        "Database-driven workflows"
      ],
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ]
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-900/95 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm text-purple-400 text-sm font-medium"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent engineering work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-purple-400 uppercase mb-3 tracking-widest">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                        <FaCheckCircle className="text-purple-500 w-3 h-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-pink-400 uppercase mb-3 tracking-widest">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-700/50 rounded-lg text-[10px] font-bold text-gray-200 border border-white/5">
                        <tech.icon style={{ color: tech.color }} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;