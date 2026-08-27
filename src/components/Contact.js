import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Magnetic } from './motion-primitives/magnetic';
import { fadeUp, stagger } from '../lib/motion';

const Contact = () => {
  const formRef = useRef();
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not configured');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/srivathsa26', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/srivathsa-shrihari-BE-CSE', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:Srivathsash26@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="section-pad border-t border-ink/[0.06]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-5">
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="display text-4xl md:text-5xl mb-5 leading-[1.05]"
            >
              Let's work together
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-mute text-lg leading-relaxed max-w-[34ch] mb-8"
            >
              Have a role, project, or question? Send a note. I usually reply within a day.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-3">
              {socialLinks.map((link) => (
                <Magnetic key={link.label} intensity={0.45} range={90}>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={reduce ? undefined : { y: -3 }}
                    whileTap={reduce ? undefined : { scale: 0.96 }}
                    className="inline-flex p-3.5 rounded-xl border border-ink/10 bg-surface text-mute hover:text-accent hover:border-accent/40 shadow-soft transition-colors duration-200"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                </Magnetic>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="panel p-7 md:p-9 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-field resize-none"
                  placeholder="What are you working on?"
                />
              </div>
              <Magnetic intensity={0.2} range={140} className="block">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={reduce || isSubmitting ? undefined : { scale: 0.98 }}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </motion.button>
              </Magnetic>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                  >
                    {error}
                  </motion.p>
                )}
                {success && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
                  >
                    Message sent. I'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
