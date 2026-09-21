'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const testimonials = [
  {
    name: 'Rajesh Khanna',
    role: 'CEO at FutureScale',
    content: 'Qorvance overhauled our legacy infrastructure with a seamless AI integration that improved our processing speed by 40%. Their technical expertise is world-class.',
    avatar: 'https://i.pravatar.cc/150?u=rajesh',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'CTO at DataVantage',
    content: 'Working with Abhinandan and his team was a game-changer. They delivered a custom enterprise solution that perfectly aligned with our strategic goals, ahead of schedule.',
    avatar: 'https://i.pravatar.cc/150?u=priya',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Product Head at Nexus Solutions',
    content: 'The user engagement on our new platform has skyrocketed thanks to the intuitive UI/UX design provided by Qorvance. Highly recommended for any serious digital project.',
    avatar: 'https://i.pravatar.cc/150?u=amit',
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="future-surface py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          subtitle="Testimonials"
          title="Voice of Our Satisfied Clients"
          description="We take pride in building long-term partnerships through consistent delivery of exceptional value and innovation."
          centered
        />

        <div className="relative max-w-4xl mx-auto px-12">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="future-card bg-slate-50 rounded-3xl p-12 md:p-16 relative border border-transparent"
            >
              <Quote className="absolute top-8 left-8 text-primary/10" size={80} />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-dark mb-10 leading-relaxed italic">
                  &quot;{testimonials[current].content}&quot;
                </p>
                
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4"
                />
                
                <h4 className="text-xl font-bold text-dark">{testimonials[current].name}</h4>
                <p className="text-primary font-medium">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-14 h-14 bg-white dark:bg-zinc-900 rounded-full shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all z-20"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white dark:bg-zinc-900 rounded-full shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all z-20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
