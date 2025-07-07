import React from 'react';
import { Lightbulb, Users, Shield, Server, Database } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Projects & Technical Experience</h2>
        </div>
        
        <div className="space-y-8">
          {/* Featured Project */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <Shield className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">BetterDome Sensor-Integrated Construction Helmet</h3>
                <p className="text-blue-600 font-medium mb-3">Team Lead</p>
                <p className="text-gray-700 mb-4">
                  Led a team in developing an innovative construction helmet with integrated gas detection functionality, 
                  combining hardware engineering with safety systems to enhance worker protection in hazardous environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Hardware Design</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Sensor Integration</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Team Leadership</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Safety Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <Server className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Production & Virtual Environments</h3>
                  <p className="text-gray-700">
                    Extensive experience working in both virtual and production environments, 
                    ensuring seamless deployment and system reliability across different platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <Database className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Protocol Expertise</h3>
                  <p className="text-gray-700">
                    In-depth knowledge of application and transfer protocols, 
                    enabling effective communication between systems and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Systems Integration */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <Users className="text-green-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Software/Systems Integration</h3>
                <p className="text-gray-700">
                  Proven ability to integrate complex software systems and applications, 
                  ensuring smooth interoperability and optimal performance across diverse technology stacks.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">System Architecture</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">API Integration</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
