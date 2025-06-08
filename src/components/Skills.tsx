import React from 'react';
import { Monitor, Cpu, HardDrive, Network, Globe, ShieldCheck, Users, BookOpen, CircleDot } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'Windows OS', icon: <Monitor size={20} />, category: 'Operating Systems' },
    { name: 'macOS', icon: <Monitor size={20} />, category: 'Operating Systems' },
    { name: 'Linux', icon: <Monitor size={20} />, category: 'Operating Systems' },
    { name: 'Hardware Troubleshooting', icon: <Cpu size={20} />, category: 'Hardware' },
    { name: 'Software Deployment', icon: <HardDrive size={20} />, category: 'Software' },
    { name: 'Network Diagnostics', icon: <Network size={20} />, category: 'Networking' },
    { name: 'Active Directory', icon: <Users size={20} />, category: 'Administration' },
    { name: 'Office 365', icon: <Globe size={20} />, category: 'Software' },
    { name: 'Cybersecurity', icon: <ShieldCheck size={20} />, category: 'Security' },
    { name: 'Help Desk Software', icon: <BookOpen size={20} />, category: 'Tools' }
  ];

  const softSkills = [
    'Customer Service', 'Problem Solving', 'Communication', 'Time Management', 
    'Teamwork', 'Adaptability', 'Patience', 'Attention to Detail'
  ];

  const certifications = [
    'CompTIA A+', 'CompTIA Network+', 'Microsoft Certified: Modern Desktop Administrator Associate', 
    'ITIL Foundation', 'Cisco Certified Network Associate (CCNA)'
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A comprehensive overview of my technical expertise, soft skills, and professional certifications that enable me to provide exceptional IT support.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 flex items-center gap-4"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <div className="text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                >
                  <CircleDot size={14} className="mr-2" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;