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
    <section id="hero" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">SRIVATHSA SH</span>
          </h1>
          
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Computer Science Student & ML Enthusiast
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A passionate Computer Science student at Global Academy of Technology, specializing in Machine Learning,
            Deep Learning, and Full Stack Development. Currently pursuing my Bachelor's in Computer Science & Engineering
            with a focus on AI/ML applications and web development.
          </motion.p>

          <motion.div
            className="flex space-x-4"
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
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 