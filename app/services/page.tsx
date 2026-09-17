'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  ShieldCheck,
  Code,
  Layers,
  BarChart,
  Cloud
} from 'lucide-react';
import Link from 'next/link';

const allServices = [
  {
    title: 'Enterprise AI & ML',
    description: 'We build custom AI models, agentic workflows, and predictive analytics tools that help you automate operations and gain deep insights from your data.',
    icon: Cpu,
    features: ['Custom LLM Integration', 'Predictive Modeling', 'Computer Vision Solutions', 'AI Strategy & Roadmap']
  },
  {
    title: 'Advanced Web Engineering',
    description: 'Developing high-performance, secure, and SEO-optimized web platforms using the latest Next.js and Cloud-native architectures.',
    icon: Globe,
    features: ['Enterprise SaaS Development', 'Next.js & React Expert', 'Full-stack Architectures', 'Performance Optimization']
  },
  {
    title: 'Next-Gen Mobile Apps',
    description: 'Creating seamless, intuitive mobile experiences for iOS and Android that leverage native capabilities and ensure peak performance.',
    icon: Smartphone,
    features: ['Cross-platform (Flutter/RN)', 'Native iOS & Android', 'Mobile-first UX Design', 'Scalable Backend Support']
  },
  {
    title: 'Custom ERP & CRM',
    description: 'Bespoke enterprise resource planning and customer management systems tailored to your unique operational needs and business goals.',
    icon: Database,
    features: ['Automated Workflows', 'Legacy System Migration', 'Custom Data Visualization', 'Third-party Integrations']
  },
  {
    title: 'Strategic UI/UX Design',
    description: 'Crafting user-centric interfaces and comprehensive design systems that unify your brand identity and enhance user engagement.',
    icon: Palette,
    features: ['User Research & Testing', 'Scalable Design Systems', 'Interactive Prototyping', 'Accessibility Compliance']
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Architecting secure, resilient cloud solutions that ensure maximum uptime and provide a solid foundation for your digital ecosystem.',
    icon: Cloud,
    features: ['AWS/Azure Cloud Mgmt', 'DevOps Automation', 'Serverless Implementations', 'Cybersecurity Audits']
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Capabilities" 
        subtitle="Qorvance provides enterprise-grade technology solutions designed to accelerate growth and innovation."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/services/${service.title.toLowerCase().replace(/ enterprise/g, '').replace(/ advanced/g, '').replace(/ next-gen/g, '').replace(/ strategic/g, '').replace(/\s+/g, '-').replace(/&/g, '')}`}
                  className="text-primary font-bold inline-flex items-center hover:underline"
                >
                  Explore Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            subtitle="Our Methodology"
            title="Accelerating Innovation Through Precision"
            description="Our refined development process ensures transparency, quality, and accelerated time-to-market for your digital initiatives."
            centered
            light
          />

          <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
            {/* Connection Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            
            {[
              { step: '01', title: 'Discovery', icon: Layers },
              { step: '02', title: 'Strategy', icon: BarChart },
              { step: '03', title: 'Execution', icon: Code },
              { step: '04', title: 'Validation', icon: ShieldCheck },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-dark shadow-2xl">
                  <p.icon size={30} />
                </div>
                <div className="text-primary font-bold mb-2">{p.step}</div>
                <h4 className="text-xl font-bold">{p.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
