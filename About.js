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
    <section id="about" className="section-padding bg-gray-900/95">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary mb-12 text-white">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/80 rounded-xl p-6 shadow-xl"
            >
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
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-gray-200 text-sm">
                    Relevant Coursework: Data Structures & Algorithms, Database Management System, Operating Systems, 
                    Object Oriented Programming, Software Engineering, Cryptography, Artificial Intelligence and Machine 
                    Learning, Deep Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/80 rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-gray-100"> UI/UX Intern</h4>
                  <p className="text-gray-200">GEEKONOMY TECHNOLOGY Bengaluru, India</p>
                  <p className="text-gray-200">Present</p>
                  <ul className="mt-2 space-y-2">
                    <li className="text-gray-200">• Designed React-based UI components improving user interaction and interface consistency.</li>
                    <li className="text-gray-200">• Supported iterative improvements using feedback and basic user observation insights.</li>
                    <li className="text-gray-200">• Contributed to design-to-development transition and documentation of interface decisions.</li>
                  </ul>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-gray-100">Deep Learning Research Intern</h4>
                  <p className="text-gray-200">CENTRE FOR AIRBORNE SYSTEMS (CABS) – DRDO</p>
                  <p className="text-gray-200">Oct 2024 – Nov 2024</p>
                  <ul className="mt-2 space-y-2">
                    <li className="text-gray-200">• Engineered custom dataset development via wide set of imagery collection (3000 images)</li>
                    <li className="text-gray-200">• Optimised aircraft detection accuracy through Faster RCNN model achieving {'>'}97% accuracy</li>
                  </ul>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-gray-100">ML & Data Science Intern</h4>
                  <p className="text-gray-200">FEYNN LABS</p>
                  <p className="text-gray-200">Sept 2024 – Nov 2024</p>
                  <ul className="mt-2 space-y-2">
                    <li className="text-gray-200">• Explored AI technologies like GPT-3 and REST API architecture</li>
                    <li className="text-gray-200">• Developed AI-based resume parser application for small-scale organizations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Technical Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/80 rounded-xl p-6 shadow-xl"
            >
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
                    className="text-gray-200 font-medium bg-gray-700/50 rounded-lg p-3"
                  >
                    • {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/80 rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <FaTools className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Additional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Programming Languages</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Data Structures & Algorithms</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Database Management</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Git & GitHub</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Microsoft Excel</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Power BI</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Jupyter Notebook</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-200 font-medium">• Google Colab</p>
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