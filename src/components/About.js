import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCode, FaTools } from 'react-icons/fa';

const skills = [
  'Python',
  'Java',
  'C',
  'SQL',
  'Machine Learning (foundational)',
  'Deep Learning',
  'NLP (basic)',
  'Faster R-CNN',
  'Model Evaluation',
  'Generative AI (basic)',
  'LLM Workflows',
  'Prompt Engineering',
  'Data Analysis',
  'Data Processing',
  'Trend & Sentiment Analysis (basic)',
  'Data Visualization (Power BI – basic)',
  'Reporting',
  'Automation Workflows (N8N)',
  'ML Pipelines (basic)',
  'Backend Development (foundational)',
  'Debugging & Troubleshooting',
  'SDLC & Agile Fundamentals',
  'Docker (basic)',
  'CI/CD Concepts',
  'Vertex AI (basic)',
  'Azure Basics',
  'Git & GitHub',
  'Jupyter Notebook',
  'Google Colab',
  'Power BI',
  'Figma',
  'Linux/Unix Fundamentals',
  'Computer Networks (TCP/IP, DNS, HTTP – basics)',
  'Technical Documentation',
  'Research & Experimentation',
  'Cross-functional Collaboration',
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn more about my background, education, and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100">Global Academy of Technology</h4>
                    <p className="text-gray-200">Bachelor of Engineering - Computer Science & Engineering</p>
                    <p className="text-gray-200">Expected Graduation – July 2025</p>
                    <p className="text-gray-200 font-medium">CGPA: 7.9/10</p>
                  </div>
                  <div className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-4">
                    <p className="text-gray-200 text-sm">
                      Relevant Coursework: Data Structures & Algorithms, Database Management System, Operating Systems, 
                      Object Oriented Programming, Software Engineering, Cryptography, Artificial Intelligence and Machine 
                      Learning, Deep Learning
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-400/50 pl-4 hover:border-purple-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-gray-100">Full Stack Developer Intern</h4>
                    <p className="text-gray-300">GEEKONOMY TECHNOLOGY Bengaluru, India</p>
                    <p className="text-gray-400 text-sm">Present</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-300">• Developed and optimized React.js (Next.js) consumer-facing web features, focusing on performance, reusable components, and scalable UI architecture.</li>
                      <li className="text-gray-300">• Implemented CRUD workflows and built reusable UI components, improving maintainability and frontend scalability.</li>
                      <li className="text-gray-300">• Collaborated with cross-functional teams to deliver scalable, high-performance solutions aligned with business requirements.</li>
                      <li className="text-gray-300">• Followed SDLC best practices (Git, pull requests, code reviews) and optimized frontend logic to reduce UI defects and improve performance.</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-400/50 pl-4 hover:border-purple-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-gray-100">Deep Learning Research Intern</h4>
                    <p className="text-gray-300">CENTRE FOR AIRBORNE SYSTEMS (CABS) – DRDO</p>
                    <p className="text-gray-400 text-sm">Oct 2024 – Nov 2024</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-300">• Engineered custom dataset development via wide set of imagery collection (3000 images)</li>
                      <li className="text-gray-300">• Optimised aircraft detection accuracy through Faster RCNN model achieving {'>'}97% accuracy</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-400/50 pl-4 hover:border-purple-400 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-gray-100">ML & Data Science Intern</h4>
                    <p className="text-gray-300">FEYNN LABS</p>
                    <p className="text-gray-400 text-sm">Sept 2024 – Nov 2024</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-300">• Explored AI technologies like GPT-3 and REST API architecture</li>
                      <li className="text-gray-300">• Developed AI-based resume parser application for small-scale organizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <FaCode className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="text-gray-200 font-medium bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Additional Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <FaTools className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Additional Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Programming Languages</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Data Structures & Algorithms</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Database Management</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Git & GitHub</p>
                    </motion.div>
                  </div>
                  <div className="space-y-3">
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Microsoft Excel</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Power BI</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Jupyter Notebook</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                      <p className="text-gray-200 font-medium">• Google Colab</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 