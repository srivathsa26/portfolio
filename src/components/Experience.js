import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <FaBriefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/SRIVATHSA_SH resume.pdf"
            download="Srivathsa_SH_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 group"
          >
            <FaBriefcase className="w-5 h-5" />
            Download Resume
            <div className="absolute inset-0 rounded-lg bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 