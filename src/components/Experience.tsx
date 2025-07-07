import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
        </div>
        
        <div className="space-y-8">
          {/* TSS Solutions Experience */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Radar Engineer Intern</h3>
                <div className="flex items-center gap-2 text-green-600 font-medium mb-2">
                  <Briefcase size={16} />
                  <span>TSS Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} />
                  <span>Melbourne, FL</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>May 2025 - August 2025</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>TIGAR Radar Optimization:</strong> Worked on optimizing TIGAR radar systems, improving performance and reliability.
              </p>
              <p className="text-gray-700">
                <strong>Legacy Framework Development:</strong> Began work on the legacy framework for the TPS-43 radar system, contributing to modernization and maintainability efforts.
              </p>
            </div>
          </div>

          {/* Entergy Experience */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Transmission Engineer Co-Op</h3>
                <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                  <Briefcase size={16} />
                  <span>Entergy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} />
                  <span>Jackson, MS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>August 2022 - August 2024</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>PowerBI Analytics Leadership:</strong> Led the development of a PowerBI report to predict and analyze electrical load across multiple regions, utilizing historical load information, weather, and location data to reduce excess generation, resulting in substantial cost savings.
              </p>
              <p className="text-gray-700">
                <strong>Cross-Department Collaboration:</strong> Worked closely with Transmission Operational Planning, Distribution Operational Command, and Transmission Control departments to enhance system reliability and operational efficiency.
              </p>
              <p className="text-gray-700">
                <strong>Capacitor Bank Monitoring:</strong> Created comprehensive reports to monitor capacitor bank usage and identify periods of high demand, further driving operational efficiency and system reliability.
              </p>
            </div>
          </div>

          {/* Paul Boyce Experience */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Office Manager</h3>
                <div className="flex items-center gap-2 text-purple-600 font-medium mb-2">
                  <Briefcase size={16} />
                  <span>Paul Boyce and Associates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} />
                  <span>Newnan, GA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>November 2019 - January 2023</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Document Management:</strong> Edited and filed final drafts of consultation proposals, ensuring accuracy and professional presentation.
              </p>
              <p className="text-gray-700">
                <strong>Client Relations:</strong> Scheduled and coordinated meetings between the owner and high-profile clients including Kroger, Publix, and multiple government entities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
