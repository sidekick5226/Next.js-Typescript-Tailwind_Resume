import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Engineering</h3>
              <p className="text-blue-600 font-medium">Mississippi State University</p>
              <p className="text-gray-600">Majoring in Computer Engineering</p>
              <p className="text-gray-600">Minors in Computational Mathematics</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar size={16} />
                <span>Expected December 2025</span>
              </div>
              <p className="text-lg font-semibold">GPA: 3.1 / 4.0</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-yellow-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">Honors & Awards</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">MSU Non-resident Academic Scholarship</h4>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">MSU Colvard Future Leader Scholarship</h4>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg md:col-span-2">
              <h4 className="font-semibold text-gray-800">MSU Dean&apos;s List</h4>
              <p className="text-sm text-gray-600">Fall/Spring 2024, Fall 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
