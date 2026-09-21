import React from 'react';
import Link from 'next/link';
import { Globe, MessageSquare, Camera, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Qorvance home">
              <img src="/images/qorvance-logo.jpg" alt="" className="w-11 h-11 rounded-lg object-cover object-center shadow-md" />
              <span className="border-l border-primary/60 pl-3 text-2xl font-extrabold tracking-[0.06em] leading-none whitespace-nowrap">
                Qorvance
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Empowering global enterprises with cutting-edge AI solutions, custom software development, and strategic digital transformation that drives measurable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Our Portfolio</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Latest Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/services/ai-ml" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/services/web" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/enterprise" className="hover:text-primary transition-colors">Enterprise Software</Link></li>
              <li><Link href="/services/design" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/cloud" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 shrink-0" size={18} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 shrink-0" size={18} />
                <a href="mailto:qorvance@gmail.com" className="hover:text-primary transition-colors">qorvance@gmail.com</a>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-widest">Company Owner</p>
              <p className="text-lg font-medium text-white">Abhinandan Raj</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} Qorvance. All rights reserved.</p>
            <p className="mt-1 text-xs opacity-60 italic">Owned and Managed by Abhinandan Raj</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
