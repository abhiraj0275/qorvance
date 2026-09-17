'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What core industries does Qorvance serve?",
    answer: "We specialize in delivering high-impact solutions for Fintech, Healthcare, Supply Chain, and Enterprise SaaS. Our cross-industry expertise allows us to apply advanced AI methodologies to solve diverse business challenges."
  },
  {
    question: "How do you approach AI implementation for a new client?",
    answer: "Our process begins with a deep discovery phase to understand your data landscape and business objectives. We then develop a customized AI strategy, starting with a Pilot/POC before full-scale deployment and integration."
  },
  {
    question: "Do you offer custom software development beyond AI?",
    answer: "Yes, we are a full-service technology partner. In addition to AI/ML, we provide expert web and mobile development, enterprise ERP/CRM solutions, and cloud infrastructure management."
  },
  {
    question: "What is your typical project engagement model?",
    answer: "We offer flexible models including project-based fixed price, time and materials, and dedicated offshore development teams, all following strict Agile methodologies for maximum transparency and speed."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "Security is foundational at Qorvance. We adhere to global standards like GDPR and SOC2, implementing end-to-end encryption and regular vulnerability assessments to protect all client data."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
      >
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{question}</h3>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading 
              subtitle="Common Questions"
              title="Everything You Need to Know"
              description="Discover how Qorvance can accelerate your digital journey and solve your most complex technical challenges."
              className="mb-8"
            />
            <div className="p-8 bg-slate-50 rounded-3xl border border-gray-100">
              <h4 className="text-xl font-bold mb-4">Still have questions?</h4>
              <p className="text-gray-600 mb-6">Can&apos;t find the answer you&apos;re looking for? Please contact our expert advisory team.</p>
              <Link href="/contact" className="btn-primary inline-block">
                Get in touch
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-2">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
