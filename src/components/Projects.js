import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Military Aircraft Detection',
    description: 'Developed a Faster RCNN model for military aircraft detection with >97% accuracy. Engineered custom dataset with 3000 annotated images and implemented advanced preprocessing techniques.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Python', 'Deep Learning', 'Faster RCNN', 'Computer Vision'],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'AI Resume Parser',
    description: 'Developed an AI-based resume parser using GPT-3 and REST API architecture. The application automates the conversion of unstructured resume PDF inputs into JSON data, streamlining recruitment workflow.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Python', 'GPT-3', 'REST API', 'NLP'],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'YouTube Comment Analyzer',
    description: 'Built an advanced analytics web tool utilizing Machine Learning and NLP (VADER lexicon) to analyze YouTube comments, generate video content summaries, and extract insights on viewer sentiment and engagement patterns.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Selenium'],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'Online Book Store',
    description: 'Developed a full-stack online bookstore platform using MERN stack with CRUD functionalities for efficient book catalogue management. Implemented dynamic frontend with React and scalable backend with Express.js and Node.js.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-800 text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 