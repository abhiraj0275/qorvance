'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-dark">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
