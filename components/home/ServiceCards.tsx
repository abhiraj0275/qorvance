'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Enterprise AI & ML',
    description: 'We develop custom machine learning models and AI integration strategies that automate complex workflows and provide deep predictive insights.',
    icon: Cpu,
    color: 'bg-blue-600',
    link: '/services/ai-ml'
  },
  {
    title: 'Advanced Web Systems',
    description: 'Building high-performance, scalable web platforms using Next.js and React, optimized for speed, SEO, and enterprise-level reliability.',
    icon: Globe,
    color: 'bg-indigo-600',
    link: '/services/web'
  },
  {
    title: 'Next-Gen Mobile Apps',
    description: 'Creating seamless, intuitive mobile experiences for iOS and Android that leverage native capabilities and ensure peak performance.',
    icon: Smartphone,
    color: 'bg-orange-600',
    link: '/services/mobile'
  },
  {
    title: 'Custom ERP & CRM',
    description: 'Bespoke enterprise resource planning and customer management systems tailored to your unique operational needs and business goals.',
    icon: Database,
    color: 'bg-purple-600',
    link: '/services/enterprise'
  },
  {
    title: 'Strategic Design Systems',
    description: 'Crafting user-centric interfaces and comprehensive design systems that unify your brand identity and enhance user engagement.',
    icon: Palette,
    color: 'bg-pink-600',
    link: '/services/design'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Architecting secure, resilient cloud solutions that ensure maximum uptime and provide a solid foundation for your digital ecosystem.',
    icon: ShieldCheck,
    color: 'bg-cyan-600',
    link: '/services/cloud'
  }
];

const ServiceCards = () => {
  return (
    <section className="future-surface py-24 bg-white dark:bg-black">
      <div className="container-custom">
        <SectionHeading 
          subtitle="Our Expertise"
          title="Qorvance: Driving the Future of Tech"
          description="We combine advanced technical proficiency with strategic business analysis to deliver digital products that redefine industry standards."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="future-card group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110 duration-300",
                service.color
              )}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                href={service.link} 
                className="inline-flex items-center font-bold text-primary group/link"
              >
                Learn More 
                <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
