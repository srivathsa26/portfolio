import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiSelenium,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn
} from 'react-icons/si';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Aircraft Detection System",
      description: "A deep learning-based system for detecting and classifying military aircraft in satellite imagery using computer vision techniques.",
      image: "/military aircraft detection.jpeg",
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" }
      ],
      github: "https://github.com/satyam-2003/aircraft-detection"
    },
    {
      title: "AI Resume Parser",
      description: "An intelligent system that automatically extracts and categorizes information from resumes using natural language processing and machine learning.",
      image: "/ai resume parser.jpeg",
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" }
      ],
      github: "https://github.com/satyam-2003/resume-parser"
    },
    {
      title: "YouTube Comment Analyzer",
      description: "A sentiment analysis tool that processes and analyzes YouTube comments to provide insights about viewer engagement and feedback.",
      image: "/YouTube Comment Analyzer.jpeg",
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "NLTK", icon: SiPython, color: "#3776AB" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" }
      ],
      github: "https://github.com/satyam-2003/youtube-analyzer"
    },
    {
      title: "Online Book Store",
      description: "A full-stack e-commerce platform for buying and selling books with user authentication and payment integration.",
      image: "/Online Book Store.jpeg",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      github: "https://github.com/satyam-2003/bookstore"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-900/95 overflow-hidden">
      {/* Background decoration */}
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-purple-400 text-sm font-medium">My Work</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech.name}
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <tech.icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-purple-600 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-300 border border-gray-600/50 hover:border-purple-500"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 