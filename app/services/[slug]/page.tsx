'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const servicesDetail = {
  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Harness the power of artificial intelligence to transform your business.',
    description: 'Our AI and Machine Learning services help organizations automate complex processes, gain deeper insights from their data, and create intelligent products that learn and adapt over time.',
    features: [
      'Custom Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Strategy & Consulting',
      'Large Language Model (LLM) Integration'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600'
  },
  'web': {
    title: 'Web Development',
    subtitle: 'Modern, scalable web applications built for performance.',
    description: 'We build enterprise-grade web applications using the latest technologies like Next.js, React, and Node.js. Our focus is on creating high-performance, secure, and SEO-friendly platforms.',
    features: [
      'Full-stack Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'CMS Development',
      'API Design & Integration',
      'Frontend Performance Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
  },
  'mobile': {
    title: 'Mobile App Development',
    subtitle: 'Seamless mobile experiences across iOS and Android.',
    description: 'Our mobile team specializes in creating intuitive and high-performance applications. Whether native or cross-platform, we ensure your app delivers a premium user experience.',
    features: [
      'iOS & Android Development',
      'Cross-platform (Flutter/React Native)',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Mobile App Maintenance',
      'Backend for Mobile'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600'
  },
  'enterprise': {
    title: 'Enterprise Software',
    subtitle: 'Custom software solutions for complex business needs.',
    description: 'We develop bespoke enterprise software that streamlines operations, enhances productivity, and solves unique organizational challenges.',
    features: [
      'Custom ERP & CRM Systems',
      'Workflow Automation Tools',
      'Legacy System Modernization',
      'Enterprise Data Management',
      'Internal Tooling',
      'Cloud Migration'
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-027eeaf195ce?auto=format&fit=crop&q=80&w=1600'
  },
  'design': {
    title: 'UI/UX Design',
    subtitle: 'User-centric design that drives engagement.',
    description: 'Our design philosophy is rooted in user research and behavioral science. We create interfaces that are not only beautiful but also intuitive and accessible.',
    features: [
      'User Research & Discovery',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Design Systems',
      'Usability Testing'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600'
  },
  'cloud': {
    title: 'Cloud & Infrastructure',
    subtitle: 'Scalable, secure, and resilient cloud architectures.',
    description: 'We help businesses leverage the full potential of the cloud. From architecture design to ongoing management, we ensure your infrastructure is optimized for growth.',
    features: [
      'Cloud Architecture Design',
      'DevOps & Automation',
      'Serverless Solutions',
      'Security & Compliance',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesDetail[slug as keyof typeof servicesDetail] || servicesDetail['ai-ml'];

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle={service.subtitle}
        backgroundImage={service.image}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                subtitle="About the Service"
                title={`Transforming Ideas into ${service.title} Solutions`}
                className="mb-8"
              />
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="font-medium text-dark">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to get started with {service.title}?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let&apos;s discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-colors">
              Request a Proposal
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to get started with {service.title}?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let&apos;s discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-colors">
              Request a Proposal
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
