import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJava,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiGooglecloud,
  SiMicrosoftazure,
  SiPowerbi,
  SiJupyter,
  SiTensorflow,
  SiPytorch
} from 'react-icons/si';
import { FaCode, FaDatabase, FaBrain, FaChartLine, FaCogs, FaCloud, FaFileAlt } from 'react-icons/fa';

// Generic icon component for skills without specific icons
const GenericIcon = ({ color = "#8B5CF6" }) => (
  <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center flex-shrink-0">
    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
  </div>
);

const Skills = () => {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: SiJava, color: "#ED8B00" },
        { name: "C", icon: FaCode, color: "#A8B9CC" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning (foundational)", icon: FaBrain, color: "#8B5CF6" },
        { name: "Deep Learning", icon: FaBrain, color: "#7C3AED" },
        { name: "NLP (basic)", icon: GenericIcon, color: "#6366F1" },
        { name: "Faster R-CNN", icon: GenericIcon, color: "#4F46E5" },
        { name: "Model Evaluation", icon: GenericIcon, color: "#4338CA" },
        { name: "Generative AI (basic)", icon: GenericIcon, color: "#8B5CF6" },
        { name: "LLM Workflows", icon: GenericIcon, color: "#7C3AED" },
        { name: "Prompt Engineering", icon: GenericIcon, color: "#6366F1" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      ]
    },
    {
      title: "Data Analysis & Processing",
      skills: [
        { name: "Data Analysis", icon: FaChartLine, color: "#10B981" },
        { name: "Data Processing", icon: FaChartLine, color: "#059669" },
        { name: "Trend & Sentiment Analysis (basic)", icon: GenericIcon, color: "#047857" },
        { name: "Data Visualization (Power BI – basic)", icon: SiPowerbi, color: "#F2C811" },
        { name: "Reporting", icon: FaFileAlt, color: "#6B7280" },
      ]
    },
    {
      title: "Development & DevOps",
      skills: [
        { name: "Backend Development (foundational)", icon: FaCode, color: "#3B82F6" },
        { name: "Debugging & Troubleshooting", icon: FaCogs, color: "#EF4444" },
        { name: "SDLC & Agile Fundamentals", icon: GenericIcon, color: "#8B5CF6" },
        { name: "Docker (basic)", icon: SiDocker, color: "#2496ED" },
        { name: "CI/CD Concepts", icon: GenericIcon, color: "#10B981" },
        { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "Vertex AI (basic)", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Azure Basics", icon: SiMicrosoftazure, color: "#0078D4" },
        { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
        { name: "Google Colab", icon: GenericIcon, color: "#F9AB00" },
        { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Linux/Unix Fundamentals", icon: GenericIcon, color: "#FCC624" },
        { name: "Computer Networks (TCP/IP, DNS, HTTP – basics)", icon: GenericIcon, color: "#4B5563" },
      ]
    },
    {
      title: "Automation & Workflows",
      skills: [
        { name: "Automation Workflows (N8N)", icon: GenericIcon, color: "#8B5CF6" },
        { name: "ML Pipelines (basic)", icon: GenericIcon, color: "#7C3AED" },
        { name: "Technical Documentation", icon: FaFileAlt, color: "#6B7280" },
        { name: "Research & Experimentation", icon: GenericIcon, color: "#6366F1" },
        { name: "Cross-functional Collaboration", icon: GenericIcon, color: "#4F46E5" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/95 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
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
            <span className="text-purple-400 text-sm font-medium">My Expertise</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-purple-400">
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    const isGenericIcon = IconComponent === GenericIcon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        {isGenericIcon ? (
                          <GenericIcon color={skill.color} />
                        ) : (
                          <IconComponent
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: skill.color }}
                          />
                        )}
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 