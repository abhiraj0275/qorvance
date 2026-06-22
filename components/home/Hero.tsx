'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span>Leading Enterprise AI Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-dark leading-tight mb-6">
              Empowering <span className="text-primary">Innovation</span> through <span className="text-secondary">AI Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Digital AI Technologies engineers bespoke enterprise experiences using advanced machine learning, custom software, and scalable cloud architectures to future-proof your business.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-primary flex items-center group">
                Consult with Our Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/portfolio" className="flex items-center text-dark font-bold hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center mr-3 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
                See Our Work
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 pt-12 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">Custom AI Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">Enterprise Scale Ready</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Digital AI Technologies Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-30 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <ArrowRight className="-rotate-45" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">+200%</div>
                  <div className="text-xs text-gray-500 font-medium">Efficiency Gain</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-30 bg-dark p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-xl text-white">
                  <CheckCircle />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-gray-400 font-medium">AI Models Deployed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
