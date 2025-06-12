import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Deep Learning Research Intern',
    company: 'CENTRE FOR AIRBORNE SYSTEMS (CABS) – DRDO',
    period: 'Oct 2024 - Nov 2024',
    description: [
      'Engineered custom dataset development via wide set of imagery collection (3000 images) and annotation',
      'Optimised aircraft detection accuracy through Faster RCNN model achieving >97% accuracy',
      'Implemented advanced preprocessing techniques for enhanced model performance',
      'Skills & Tools: Google Earth, XanyLabeling, RoLabelling, Faster RCNN model, Data Collection & Annotation',
    ],
  },
  {
    title: 'ML & Data Science Intern',
    company: 'FEYNN LABS',
    period: 'Sept 2024 - Nov 2024',
    description: [
      'Explored AI technologies like GPT-3 and REST API architecture',
      'Developed AI-based resume parser application for small-scale organizations',
      'Worked on AI product/service prototyping and business modeling',
      'Conducted market segmentation using ML & Data Analysis',
    ],
  },
  {
    title: 'Academic Projects',
    company: 'Global Academy of Technology',
    period: '2023 - 2024',
    description: [
      'YouTube Comment Analyzer: Built analytics tool using ML, NLP (VADER lexicon) for comment analysis',
      'Online Book Store: Developed full-stack platform using MERN stack with CRUD functionalities',
      'Implemented responsive frontend with React and scalable backend with Express.js',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary mb-12">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-700" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-purple-400 mb-2">{exp.company}</h4>
                      <p className="text-gray-400 mb-4">{exp.period}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
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

export default Experience; 