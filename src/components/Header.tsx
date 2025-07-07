import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6 relative">
        {/* Profile Image - top right, fits within header */}
        <div className="hidden md:block absolute top-0 right-0 -mt-9 mr-18 z-10">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/connor-bailey-profile.jpg"
              alt="Connor Bailey Profile"
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="text-center md:pr-40">
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
