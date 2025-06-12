import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/srivathsa26' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE' },
    { icon: FaEnvelope, url: 'mailto:Srivathsash26@gmail.com' },
    { icon: FaPhone, url: 'tel:6363689505' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding bg-gray-900/95">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
            Transforming Ideas into <span className="text-gradient">Intelligent Solutions</span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Computer Science student and ML enthusiast crafting innovative AI solutions. 
            Specializing in Deep Learning and Full Stack Development to build impactful applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center shadow-lg"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600/20 transition-colors text-center"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 