'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Zap } from 'lucide-react';

const values = [
  {
    title: 'AI Excellence',
    description: 'We prioritize technical depth and continuous learning to deliver the most advanced AI solutions available today.',
    icon: Lightbulb,
    color: 'text-yellow-500'
  },
  {
    title: 'Integrity & Trust',
    description: 'We build long-term relationships through transparency, reliability, and a relentless focus on client success.',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Agile Delivery',
    description: 'Our iterative approach ensures fast delivery of high-quality software that adapts to evolving market needs.',
    icon: Zap,
    color: 'text-purple-500'
  },
  {
    title: 'Global Vision',
    description: 'We aim to solve complex global challenges by making sophisticated technology accessible and impactful.',
    icon: Target,
    color: 'text-red-500'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Our Journey" 
        subtitle="Qorvance is a collective of visionary engineers and designers committed to defining the digital future."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
      />

      {/* Mission & Vision */}
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
                subtitle="Who We Are"
                title="Pioneering Digital Excellence"
                description="Qorvance was established with a singular mission: to bridge the gap between advanced artificial intelligence and practical business applications."
              />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Headquartered in Greater Noida, we have expanded our reach to serve a global clientele. Our team of experts specializes in transforming complex data into actionable intelligence, enabling businesses to scale efficiently in an AI-driven world.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We believe that the true power of technology lies in its ability to empower people. Our solutions are designed to be intuitive, scalable, and focused on delivering measurable impact for our partners.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">120+</div>
                  <div className="text-gray-500 font-medium">AI Models Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-500 font-medium">Client Commitment</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Qorvance Leadership" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            subtitle="Our Values"
            title="The Principles That Drive Us"
            description="Our organizational culture is built on a foundation of technical excellence, continuous innovation, and ethical AI development."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${value.color} mb-6`}>
                  <value.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <SectionHeading 
            subtitle="Our Leadership"
            title="Expert Minds Driving Digital Success"
            centered
          />
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { name: 'Abhinandan Raj', role: 'Founder & CEO', img: 'team1' },
              { name: 'Siddharth Varma', role: 'Head of AI Engineering', img: 'team2' },
              { name: 'Ananya Gupta', role: 'Chief Design Officer', img: 'team3' },
            ].map((member, i) => (
              <motion.div 
                key={member.name} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img 
                    src={`https://i.pravatar.cc/400?u=${member.img}`} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
