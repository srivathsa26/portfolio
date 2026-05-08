import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Geekonomy Technology",
      location: "Bengaluru",
      duration: "Apr 2026 – Present",
      points: [
        "Developed CRM and workflow management applications using React.js, Next.js, JavaScript, and REST APIs",
        "Integrated frontend systems with backend services handling structured workflows and customer operations",
        "Built reusable UI components and scalable frontend modules",
        "Worked on monolithic CRM architecture integrated with PostgreSQL-backed services",
        "Debugged API failures, payload validation issues, and frontend-backend synchronization problems",
        "Improved application responsiveness by approximately 15–20%",
        "Worked with Docker-based deployment workflows and Vercel hosting",
        "Collaborated using Git workflows, pull requests, and code reviews",
        "Contributed to systems managing 1000+ records across workflow modules"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Geekonomy Technology",
      location: "Bengaluru",
      duration: "Oct 2025 – Mar 2026",
      points: [
        "Assisted in frontend development and API integration for internal business applications",
        "Built reusable React.js components connected to backend services",
        "Debugged UI issues and request-response handling problems",
        "Improved frontend consistency and application stability",
        "Worked in Agile development workflows with Git-based collaboration"
      ]
    },
    {
      title: "Deep Learning Research Intern",
      company: "DRDO (CABS)",
      location: "Bengaluru",
      duration: "Oct 2024 – Nov 2024",
      points: [
        "Developed aircraft detection pipelines involving preprocessing, model training, and validation",
        "Trained deep learning models on approximately 3000 images achieving around 95% validation accuracy",
        "Built reproducible experimentation workflows for evaluation and testing",
        "Worked with deep learning and computer vision pipelines"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
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
            My Journey
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on experience in full-stack development and research internships.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400">
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="w-4 h-4 text-purple-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4 text-pink-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm font-medium border border-gray-600/50">
                  <FaCalendarAlt className="w-4 h-4 text-purple-400" />
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    className="text-gray-300 flex items-start gap-3 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;