'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message, ' + formData.name + '. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isMounted) return null;

  return (
    <>
      <PageHeader 
        title="Connect With Us" 
        subtitle="Have a vision? Let's discuss how Qorvance can bring it to life with precision engineering."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white dark:bg-dark transition-colors duration-300">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                subtitle="Contact Information"
                title="Start Your Digital Journey"
                description="Our expert advisory team is ready to help you navigate your digital transformation and AI integration strategy."
              />

              <div className="space-y-10 mt-12">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-transform group-hover:rotate-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white transition-colors">Our Presence</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                      Greater Noida, Uttar Pradesh,<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-transform group-hover:rotate-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white transition-colors">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                      qorvance@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-transform group-hover:rotate-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white transition-colors">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                      +91 99999 99999<br />
                      (Abhinandan Raj)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-8 transition-colors">
                <div className="flex items-center">
                  <Clock className="text-primary mr-3" size={20} />
                  <span className="text-sm font-medium dark:text-gray-300">Mon - Sat: 10AM - 7PM</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="text-primary mr-3" size={20} />
                  <span className="text-sm font-medium dark:text-gray-300">Enterprise Support</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-900 rounded-[40px] p-10 md:p-12 shadow-2xl border border-gray-50 dark:border-gray-800 transition-colors"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-dark border-0 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-dark border-0 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Inquiry Type</label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-dark border-0 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none dark:text-white"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Enterprise Web">Enterprise Web</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Digital Strategy">Digital Strategy</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Requirements</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Briefly describe your project requirements..." 
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-dark border-0 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none dark:text-white"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center space-x-2">
                  <span>Submit Inquiry</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[500px] bg-slate-200 dark:bg-slate-800 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase tracking-widest bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center">
          <div className="bg-white/90 dark:bg-dark/90 backdrop-blur px-10 py-5 rounded-full shadow-2xl text-primary flex items-center transition-colors">
            <MapPin className="mr-3" /> Qorvance Hub
          </div>
        </div>
      </section>
    </>
  );
}
