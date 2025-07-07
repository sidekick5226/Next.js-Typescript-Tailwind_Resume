import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Connor Bailey</h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">Computer Engineering Student</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <a href="tel:678-678-7607" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={18} />
              <span>678-678-7607</span>
            </a>
            <a href="mailto:connor.b526@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={18} />
              <span>connor.b526@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/connor-b-17aa2b185" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
