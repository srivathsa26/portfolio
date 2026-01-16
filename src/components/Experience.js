import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "GEEKONOMY TECHNOLOGY, Bengaluru, India",
      duration: "Present",
      points: [
        "Developed and optimized React.js (Next.js) consumer-facing web features, focusing on performance, reusable components, and scalable UI architecture.",
        "Implemented CRUD workflows and built reusable UI components, improving maintainability and frontend scalability.",
        "Collaborated with cross-functional teams to deliver scalable, high-performance solutions aligned with business requirements.",
        "Followed SDLC best practices (Git, pull requests, code reviews) and optimized frontend logic to reduce UI defects and improve performance."
      ]
    },
    {
      title: "Deep Learning Research Intern",
      company: "Centre for Airborne Systems (CABS) - Defence Research and Development Organisation (DRDO)",
      duration: "October 2024 - November 2024",
      points: [
        "Developed and implemented machine learning algorithms for aircraft detection and classification",
        "Worked with computer vision techniques and deep learning models",
        "Collaborated with research scientists on defense-related projects"
      ]
    },
    {
      title: "ML & Data Science Intern",
      company: "Feyn Labs",
      duration: "September 2024 - November 2024",
      points: [
        "Developed AI product/service prototyping and business & financial modeling solutions",
        "Conducted market segmentation using machine learning and data analysis techniques",
        "Built an AI-based resume parser using GPT-3 and REST API architecture",
        "Created a cost-efficient and scalable solution for small-scale organizations",
        "Automated the conversion of unstructured resume PDF inputs into structured JSON data",
        "Streamlined recruitment workflow by reducing manual processing time"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/95 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
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
            <span className="text-purple-400 text-sm font-medium">My Journey</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl"
                >
                  <FaBriefcase className="w-6 h-6 text-purple-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-purple-400 mt-1.5 font-bold">•</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 