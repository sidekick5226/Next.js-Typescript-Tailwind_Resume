import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            and collaborating on cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:connor.b526@gmail.com" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a 
              href="tel:678-678-7607" 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone size={20} />
              <span>Call Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/connor-b-17aa2b185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Connor Bailey. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Senior Computer Engineering Student | Mississippi State University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
