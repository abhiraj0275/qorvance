'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud', 'Design'];

const allProjects = [
  {
    title: 'Cognitive Analytics Hub',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'An enterprise-grade analytics platform leveraging deep learning for predictive market insights.',
    tags: ['Next.js', 'PyTorch', 'AWS']
  },
  {
    title: 'NextGen Fintech Suite',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive digital banking ecosystem with high-frequency transaction processing.',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Smart Health Mobile',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
    description: 'A health-tech app providing real-time patient monitoring and AI-based diagnostics.',
    tags: ['Flutter', 'Firebase', 'TensorFlow Lite']
  },
  {
    title: 'Global Supply Chain AI',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Optimizing global logistics through automated route planning and demand forecasting.',
    tags: ['Python', 'Docker', 'GCP']
  },
  {
    title: 'Scalable Cloud ERP',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'Custom resource planning software built on a resilient, microservices architecture.',
    tags: ['Go', 'Kubernetes', 'Azure']
  },
  {
    title: 'Agentic Workflow Automator',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1611974717484-96b617a221f7?auto=format&fit=crop&q=80&w=800',
    description: 'Autonomous AI agents designed to handle repetitive enterprise back-office tasks.',
    tags: ['LangChain', 'OpenAI', 'FastAPI']
  },
  {
    title: 'Modern Retail Dashboard',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'A high-conversion e-commerce interface focusing on user accessibility and visual brand storytelling.',
    tags: ['Figma', 'React', 'Tailwind']
  },
  {
    title: 'IoT Security Ecosystem',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    description: 'Cloud-synced security management system for large-scale industrial facility monitoring.',
    tags: ['C++', 'Rust', 'AWS IoT']
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Digital AI Technologies delivers high-impact digital products for industry leaders across the globe."
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex items-center text-gray-500 font-bold uppercase tracking-widest text-sm">
              <Filter size={18} className="mr-3" /> Filter By
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-3 rounded-full font-bold transition-all duration-300 border-2",
                    activeCategory === cat 
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/20" 
                      : "bg-white border-gray-100 text-gray-500 hover:border-primary hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Link 
                      href="/portfolio"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-2xl"
                    >
                      <ArrowUpRight size={32} />
                    </Link>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold text-dark mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 max-w-md">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="bg-dark rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Digital AI Technologies Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <span className="text-secondary font-bold uppercase tracking-widest mb-4 block">Featured Case Study</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Redefining Global Logistics with AI Precision</h2>
              <p className="text-gray-400 text-lg mb-10">
                A deep dive into how Digital AI Technologies optimized supply chain operations for a Fortune 500 company using predictive modeling and autonomous systems.
              </p>
              <Link href="/case-studies" className="btn-secondary inline-block">
                Read Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
