'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            Scale Your Business with <span className="text-secondary">Qorvance</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to leverage advanced artificial intelligence and custom engineering solutions that drive real-world impact and sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Free Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 flex items-center group"
            >
              View Our Portfolio <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-64 h-64 border-4 border-white/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 border-4 border-white/10 rounded-full"
      />
    </section>
  );
};

export default CTA;
