import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
            >
              <span className="text-purple-400 text-sm font-medium">Welcome to my Portfolio</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white block"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide block mt-2"
              >
                SRIVATHSA SH
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> and <span className="text-pink-400 font-semibold">Machine Learning Engineer</span>
            </motion.p>

            <div className="flex flex-col items-center md:items-start gap-8">
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-purple-500/50 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-6"
              >
                {[
                  { icon: FaEnvelope, href: "mailto:Srivathsash26@gmail.com", label: "Email" },
                  { icon: FaGithub, href: "https://github.com/srivathsa26", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-purple-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
              
              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
              >
                <img
                  src="/srivathsa photo.jpg"
                  alt="SRIVATHSA SH"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 