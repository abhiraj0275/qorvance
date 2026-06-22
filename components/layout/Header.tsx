'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    subItems: [
      { name: 'AI & Machine Learning', href: '/services/ai-ml' },
      { name: 'Web Development', href: '/services/web' },
      { name: 'Mobile App Development', href: '/services/mobile' },
      { name: 'Enterprise Solutions', href: '/services/enterprise' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Cloud & Infrastructure', href: '/services/cloud' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      {/* Top Bar - Hidden on scroll and mobile */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-gray-100 dark:border-gray-800 pb-2 mb-2">
          <div className="container-custom flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex space-x-6">
              <a href="tel:9999999999" className="flex items-center hover:text-primary transition-colors">
                <Phone size={14} className="mr-2" /> +91 99999 99999
              </a>
              <a href="mailto:contact@digitalaitech.com" className="flex items-center hover:text-primary transition-colors">
                <Mail size={14} className="mr-2" /> contact@digitalaitech.com
              </a>
            </div>
            <div className="flex space-x-4">
              <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      )}

      <nav className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-2 group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className={cn(
            "text-xl md:text-2xl font-bold tracking-tight transition-colors",
            scrolled ? "text-dark dark:text-white" : "text-dark dark:text-white"
          )}>
            Digital AI<span className="text-primary"> Technologies</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href}
                className={cn(
                  "flex items-center font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-gray-700 dark:text-gray-300"
                )}
              >
                {link.name}
                {link.subItems && <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.subItems && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-gray-800 p-4">
                  <div className="grid gap-2">
                    {link.subItems.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className="p-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <ThemeToggle />
          <Link href="/contact" className="btn-primary py-2 px-6">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button 
            className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-xl font-bold flex justify-between items-center transition-colors",
                      pathname === link.href ? "text-primary" : "text-dark dark:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <div className="pl-4 mt-2 flex flex-col space-y-2">
                      {link.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="btn-primary w-full inline-block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
