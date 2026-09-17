'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Transforming Global Logistics with AI-Driven Optimization',
    client: 'LogiGlobal Enterprise',
    impact: '40% Cost Reduction',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'We developed a custom AI predictive engine that optimized supply chain routes and warehouse management, leading to significant operational savings.'
  },
  {
    title: 'Modernizing Fintech Infrastructure for High-Scale Growth',
    client: 'Apex Banking Solutions',
    impact: '10M+ Concurrent Users',
    image: 'https://images.unsplash.com/photo-1504868584819-f8eec4b6d730?auto=format&fit=crop&q=80&w=800',
    description: 'A complete overhaul of a legacy financial system, migrating to a resilient microservices architecture on AWS to support rapid user acquisition.'
  },
  {
    title: 'Autonomous Healthcare Diagnostics with Deep Learning',
    client: 'Precision MedTech',
    impact: '98.5% Diagnostic Accuracy',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'Implementing advanced computer vision models to assist medical teams in early detection of anomalies, significantly improving patient outcomes.'
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader 
        title="Success Stories" 
        subtitle="Exploring how Qorvance delivers measurable business value through advanced engineering."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-8 left-8 bg-white px-6 py-2 rounded-full font-bold text-primary shadow-lg text-sm">
                      {study.client}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">{study.title}</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-8 mb-12 border-t border-b border-gray-100 py-8">
                    <div>
                      <BarChart3 className="text-primary mb-3" size={32} />
                      <div className="text-2xl font-bold">{study.impact}</div>
                      <div className="text-gray-500 text-sm">Measurable Impact</div>
                    </div>
                    <div>
                      <Clock className="text-primary mb-3" size={32} />
                      <div className="text-2xl font-bold">5 Months</div>
                      <div className="text-gray-500 text-sm">Avg Delivery</div>
                    </div>
                    <div>
                      <Target className="text-primary mb-3" size={32} />
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-gray-500 text-sm">Uptime Target</div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/case-studies"
                    className="btn-primary inline-flex items-center group"
                  >
                    View Project Details <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold mb-4">120+</div>
              <div className="text-blue-100 font-medium">Digital Systems Delivered</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4">99%</div>
              <div className="text-blue-100 font-medium">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4">24/7</div>
              <div className="text-blue-100 font-medium">Managed Support Provided</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
