import React from 'react';
import { Code, Wrench, Globe, Cpu, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "C++", years: "5 Years", level: "Advanced" },
        { name: "Python", years: "5 Years", level: "Advanced" },
        { name: "JavaScript", years: "3 Years", level: "Intermediate" },
        { name: "SQL", years: "3 Years", level: "Intermediate" },
        { name: "DAX", years: "3 Years", level: "Intermediate" },
        { name: "MatLab/Simulink", years: "3 Years", level: "Intermediate" }
      ]
    },
    {
      title: "Systems & Platforms",
      icon: <Terminal className="text-green-600" size={24} />,
      skills: [
        { name: "Linux/Ubuntu", years: "3 Years", level: "Intermediate" },
        { name: "Git", years: "4 Years", level: "Intermediate" },
        { name: "PowerBI", years: "3 Years", level: "Intermediate" },
        { name: "SCADA Systems", years: "3 Years", level: "Intermediate" },
        { name: "ANSYS Fluent", years: "<1 Year", level: "Beginner" }
      ]
    },
    {
      title: "Hardware & Tools",
      icon: <Cpu className="text-purple-600" size={24} />,
      skills: [
        { name: "Microcontrollers", years: "5 Years", level: "Advanced", details: "Arduino/Raspberry Pi/etc" },
        { name: "CAD", years: "2 Years", level: "Intermediate" }
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="text-orange-600" size={24} />,
      skills: [
        { name: "Spanish", years: "10+ Years", level: "Conversational Proficiency" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Beginner": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                      {skill.details && (
                        <p className="text-sm text-gray-600">{skill.details}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-xs text-gray-500">{skill.years}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">CodePath Cybersecurity Certification</h4>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">FE License</h4>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
