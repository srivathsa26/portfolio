import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiSelenium,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud
} from 'react-icons/si';
import { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const projects = [
  {
    title: 'Military Aircraft Detection',
    description: 'Developed a Faster RCNN model for military aircraft detection with >97% accuracy. Engineered custom dataset with 3000 annotated images.',
    image: 'https://via.placeholder.com/600x400',
    thumbnail: 'https://via.placeholder.com/600x400',
    video: null,
    technologies: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'AWS', icon: SiAmazonaws, color: 'text-yellow-500' },
    ],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'AI Resume Parser',
    description: 'Developed an AI-based resume parser using GPT-3 and REST API architecture for automated PDF to JSON conversion.',
    image: 'https://via.placeholder.com/600x400',
    thumbnail: 'https://via.placeholder.com/600x400',
    video: null,
    technologies: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'React', icon: SiReact, color: 'text-blue-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
    ],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'YouTube Comment Analyzer',
    description: 'Built an analytics tool using ML and NLP to analyze YouTube comments, generate summaries, and extract viewer insights.',
    image: 'https://via.placeholder.com/600x400',
    thumbnail: 'https://via.placeholder.com/600x400',
    video: null,
    technologies: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'Selenium', icon: SiSelenium, color: 'text-green-500' },
      { name: 'React', icon: SiReact, color: 'text-blue-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
  {
    title: 'Online Book Store',
    description: 'Developed a full-stack online bookstore platform using MERN stack with CRUD functionalities and responsive design.',
    image: 'https://via.placeholder.com/600x400',
    thumbnail: 'https://via.placeholder.com/600x400',
    video: null,
    technologies: [
      { name: 'React', icon: SiReact, color: 'text-blue-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
    github: 'https://github.com/srivathsa26',
    demo: '#',
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        key={index}
        className="bg-gray-800/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div 
          className="relative group cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <FaPlay className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Click to view</span>
            </div>
          </div>
          {project.video && (
            <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Video Demo
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-2 bg-gray-700/50 px-3 py-2 rounded-lg group hover:bg-gray-700 transition-colors"
                >
                  <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              View Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600/10 transition-colors"
            >
              View Code
            </a>
          </div>
        </div>
      </motion.div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={[{ src: project.image, alt: project.title }]}
        render={{ slide: ({ slide }) => (
          <div className="relative">
            <img src={slide.src} alt={slide.alt} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-gray-200">{project.description}</p>
            </div>
          </div>
        )}}
      />
    </>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-900/95">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary mb-12 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          {/* Mobile View */}
          <div className="md:hidden relative">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-none w-[85vw]">
                  <ProjectCard project={project} index={index} inView={inView} />
                </div>
              ))}
            </div>

            {/* Scroll Arrows */}
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-r-lg text-white hover:text-purple-400 transition-colors"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-l-lg text-white hover:text-purple-400 transition-colors"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 