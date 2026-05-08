import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiVercel,
  SiLinux,
  SiTypescript,
  SiExpress,
  SiVisualstudiocode,
  SiLinear,
  SiNodedotjs
} from 'react-icons/si';
import { FaCode, FaBrain, FaCogs, FaTools, FaDatabase, FaChartLine, FaRocket } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "HTML5", icon: FaCode, color: "#E34F26" },
        { name: "CSS3", icon: FaCode, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "REST APIs", icon: FaCogs, color: "#8B5CF6" },
        { name: "API Integration", icon: FaCogs, color: "#7C3AED" },
        { name: "Auth Workflows", icon: FaCogs, color: "#6366F1" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Docker Hub", icon: SiDocker, color: "#0DB7ED" },
        { name: "CI/CD Basics", icon: FaCogs, color: "#10B981" },
        { name: "Vercel Deployment", icon: SiVercel, color: "#FFFFFF" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGithub, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
        { name: "Linear", icon: SiLinear, color: "#5E6AD2" },
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: "OOP", icon: FaBrain, color: "#8B5CF6" },
        { name: "DBMS", icon: FaDatabase, color: "#7C3AED" },
        { name: "DSA", icon: FaBrain, color: "#6366F1" },
        { name: "SDLC", icon: FaTools, color: "#4F46E5" },
        { name: "Perf. Optimization", icon: FaChartLine, color: "#10B981" },
        { name: "Sys Integration", icon: FaCogs, color: "#F59E0B" },
      ]
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Deep Learning", icon: FaBrain, color: "#8B5CF6" },
        { name: "Model Training", icon: FaBrain, color: "#6366F1" },
        { name: "Train/Test Split", icon: FaBrain, color: "#4F46E5" },
      ]
    },
    {
      title: "AI Coding Tools",
      skills: [
        { name: "Antigravity", icon: FaRocket, color: "#A855F7" },
        { name: "Cursor AI", icon: FaBrain, color: "#8B5CF6" },
        { name: "Claude Code", icon: FaBrain, color: "#7C3AED" },
        { name: "OpenAI Codex", icon: SiOpenai, color: "#FFFFFF" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm text-purple-400 text-sm font-medium"
          >
            My Abilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my tech stack and engineering foundations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group shadow-lg"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default"
                  >
                    <skill.icon className="text-lg" style={{ color: skill.color }} />
                    <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;