import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaTools } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatIBring = [
    "Strong debugging and problem-solving skills",
    "Practical experience with API integrations and workflow systems",
    "Ability to work across frontend and backend stacks",
    "AI-assisted development",
    "Experience building maintainable and reusable component systems",
    "Understanding of performance optimization and structured development workflows"
  ];

  const certifications = [
    "Deep Learning & Applications",
    "Intro to Generative AI",
    "Prompt Design using Google Vertex AI"
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/95 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
            >
              <span className="text-purple-400 text-sm font-medium">Get to Know Me</span>
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="text-gray-400 text-lg max-w-4xl mx-auto space-y-4">
              <p>
                I'm a Software Engineer from Bengaluru with hands-on experience in full-stack development and AI-assisted systems.
              </p>
              <p>
                Currently, I'm working at <span className="text-purple-400 font-semibold">Geekonomy Technology</span>, where I contribute to API integrations and frontend engineering. I enjoy solving real engineering problems involving integrations, debugging, and performance optimization.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* What I Do Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <FaCode className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">What I Do</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Building React.js & Next.js apps",
                  "Integrating REST APIs & services",
                  "Debugging request-response issues",
                  "Developing scalable systems",
                  "Database work (Mongo, Postgres)"
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2 text-sm">
                    <span className="text-purple-400 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why Work With Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <FaTools className="w-6 h-6 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold text-white">What I Bring</h3>
              </div>
              <ul className="space-y-3">
                {whatIBring.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2 text-sm">
                    <span className="text-pink-400 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education & Certs Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <FaGraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Education & Certs</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-bold text-purple-400 uppercase mb-2">B.E. Computer Science</h4>
                <p className="text-gray-300 text-sm">Visvesvaraya Technological University</p>
                <p className="text-gray-400 text-xs">Graduated July 2025 | CGPA: 7.93</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-pink-400 uppercase mb-3">Certifications</h4>
                <ul className="space-y-3">
                  {certifications.map((cert, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm">
                      <span className="text-pink-400 font-bold">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;