'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Senior AI Engineer (NLP Specialist)',
    department: 'Engineering',
    location: 'Remote / Greater Noida',
    type: 'Full-time',
    salary: 'Competitive'
  },
  {
    title: 'Lead Full Stack Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Competitive'
  },
  {
    title: 'Senior UI/UX Strategy Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    salary: 'Competitive'
  },
  {
    title: 'Cloud Infrastructure Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Competitive'
  },
  {
    title: 'AI Product Manager',
    department: 'Operations',
    location: 'Greater Noida',
    type: 'Full-time',
    salary: 'Competitive'
  }
];

const benefits = [
  { title: 'Remote-First Culture', icon: Globe, description: 'Work from anywhere with our fully distributed and digital-first team.' },
  { title: 'Health & Wellness', icon: Heart, description: 'Comprehensive insurance coverage for health, dental, and overall well-being.' },
  { title: 'Professional Growth', icon: Zap, description: 'Dedicated annual learning budget for courses, certifications, and conferences.' },
  { title: 'Innovative Worklife', icon: Coffee, description: 'Flexible hours, team offsites, and a supportive, high-performance culture.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader 
        title="Career Opportunities" 
        subtitle="Help us engineer the next generation of AI-driven solutions. We're looking for passionate innovators to join Qorvance."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600"
      />

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                subtitle="Life at Qorvance"
                title="Fuel Your Curiosity, Drive Real Impact"
                description="We believe that the most transformative work happens when talented individuals are given the autonomy to innovate and the support to excel."
              />
              <p className="text-gray-600 mb-10 leading-relaxed">
                At Qorvance, you will solve complex technical challenges for global industry leaders. You will be part of a diverse, forward-thinking team that values integrity, technical excellence, and professional growth. We are not just building software; we are building the future of intelligence.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <benefit.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{benefit.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Qorvance Culture" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            subtitle="Join Us"
            title="Explore Open Roles"
            description="We're always searching for exceptional talent to strengthen our mission. Discover your next challenge below."
            centered
          />

          <div className="max-w-4xl mx-auto space-y-6 mt-16">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row justify-between items-center group"
              >
                <div className="flex-grow mb-6 md:mb-0">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{job.department}</span>
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" /> {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" /> {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2" /> {job.salary}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="btn-outline py-3 px-8 group-hover:bg-primary group-hover:text-white flex items-center shrink-0"
                >
                  Apply Now <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Can&apos;t find the right role? We still want to hear from you.</p>
            <Link href="/contact" className="text-primary font-bold hover:underline">
              Submit a Spontaneous Application →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
