'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud'];

const projects = [
  {
    title: 'Cognitive Analytics Hub',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'NextGen Fintech Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'Smart Health Ecosystem',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'Global Supply Chain AI',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'Scalable Cloud ERP',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'Digital Banking Suite',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1611974717484-96b617a221f7?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  }
];

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="future-surface py-24 bg-slate-50 dark:bg-zinc-950">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
          <SectionHeading 
            subtitle="Our Portfolio"
            title="Digital Solutions Crafted with Excellence"
            description="A curated selection of our most impactful projects for industry-leading organizations."
            className="mb-0"
          />
          
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white dark:bg-zinc-900 text-gray-600 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary font-bold text-sm mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <Link 
                    href={project.link}
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
