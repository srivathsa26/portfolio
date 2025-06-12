import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Deep Learning', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'MERN Stack', level: 80 },
  { name: 'SQL/MongoDB', level: 85 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary mb-8">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Education</h3>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-300">Global Academy of Technology</h4>
                <p className="text-gray-400">Bachelor of Engineering - Computer Science & Engineering</p>
                <p className="text-gray-400">Expected Graduation – July 2025</p>
                <p className="text-gray-400">CGPA: 7.70/10</p>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-200">Experience</h3>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-300">Deep Learning Research Intern</h4>
                <p className="text-gray-400">CENTRE FOR AIRBORNE SYSTEMS (CABS) – DRDO</p>
                <p className="text-gray-400">Oct 2024 – Nov 2024</p>
                <p className="text-gray-300 mt-2">
                  • Engineered custom dataset development via wide set of imagery collection (3000 images)<br/>
                  • Optimised aircraft detection accuracy through Faster RCNN model achieving {'>'}97% accuracy
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-300">ML & Data Science Intern</h4>
                <p className="text-gray-400">FEYNN LABS</p>
                <p className="text-gray-400">Sept 2024 – Nov 2024</p>
                <p className="text-gray-300 mt-2">
                  • Explored AI technologies like GPT-3 and REST API architecture<br/>
                  • Developed AI-based resume parser application
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-200">
                Additional Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-300">
                  <p>• Programming Languages</p>
                  <p>• Data Structures & Algorithms</p>
                  <p>• Database Management</p>
                  <p>• Git & GitHub</p>
                </div>
                <div className="text-gray-300">
                  <p>• Microsoft Excel</p>
                  <p>• Power BI</p>
                  <p>• Jupyter Notebook</p>
                  <p>• Google Colab</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 