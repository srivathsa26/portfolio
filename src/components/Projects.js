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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300"
                      >
                        <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 