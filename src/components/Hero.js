import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/srivathsa26",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: "mailto:Srivathsash26@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-80 md:h-80 relative"
          >
            <img
              src="/srivathsa photo.jpg"
              alt="Srivathsa SH"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Srivathsa SH
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Full Stack Developer & ML Enthusiast
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
                I build modern web applications and explore the fascinating world of machine learning.
                Passionate about creating efficient, scalable solutions that make a difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center md:items-start gap-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 group"
                >
                  View My Work
                  <div className="absolute inset-0 rounded-lg bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                {/* Social Links */}
                <div className="flex gap-6">
                  <motion.a
                    href="mailto:Srivathsash26@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label="Email"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/srivathsa26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 