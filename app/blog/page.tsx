'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Evolution of Generative AI in Modern Enterprise',
    excerpt: 'Deep dive into how large language models and autonomous agents are reshaping business operations and strategic decision-making.',
    author: 'Abhinandan Raj',
    date: 'May 30, 2026',
    category: 'AI & Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cloud-Native Architectures for Scalable SaaS',
    excerpt: 'Best practices for architecting resilient and cost-effective cloud solutions using microservices and serverless paradigms.',
    author: 'Siddharth Varma',
    date: 'May 18, 2026',
    category: 'Cloud Strategy',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'High-Performance Mobile Development with Flutter',
    excerpt: 'Why modern enterprises are choosing cross-platform frameworks to accelerate time-to-market without compromising quality.',
    author: 'Ananya Gupta',
    date: 'May 10, 2026',
    category: 'Mobile Dev',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Designing for Accessibility in Digital Products',
    excerpt: 'A comprehensive guide to building inclusive digital experiences that meet global accessibility standards and improve UX.',
    author: 'Ananya Gupta',
    date: 'April 25, 2026',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Zero Trust Security for Distributed Teams',
    excerpt: 'Implementing robust security protocols to protect sensitive enterprise data in a world of remote and hybrid work.',
    author: 'Siddharth Varma',
    date: 'April 12, 2026',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Optimizing Backend Performance with Rust and Go',
    excerpt: 'Exploring low-level optimizations and memory management strategies for high-concurrency enterprise applications.',
    author: 'Abhinandan Raj',
    date: 'March 30, 2026',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Knowledge Center" 
        subtitle="Insights, trends, and strategic perspectives from the experts at Qorvance."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Blog Search & Categories (Simplified) */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border-0 rounded-full focus:ring-2 focus:ring-primary transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'AI', 'Cloud', 'Mobile', 'Design', 'Strategy'].map(cat => (
                <button key={cat} className="text-gray-600 font-bold hover:text-primary transition-colors px-4 py-2">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[16/10]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" /> {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-2" /> {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href="/blog">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  href="/blog"
                  className="inline-flex items-center font-bold text-dark group/link"
                >
                  Read More <ArrowRight className="ml-2 text-primary group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination (Placeholder) */}
          <div className="mt-20 flex justify-center space-x-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary font-bold border-primary">1</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all">2</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all">3</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 md:p-16 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">Subscribe to the Qorvance newsletter for the latest technical insights and industry trends.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-8 py-4 bg-slate-50 border-0 rounded-full focus:ring-2 focus:ring-primary outline-none"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-6">We respect your data. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
