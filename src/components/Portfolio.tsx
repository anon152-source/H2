import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  achievements: string[];
  link?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Enterprise Help Desk System Implementation",
      category: "IT Infrastructure",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Led the implementation of a new enterprise-wide help desk system for a company with 500+ employees.",
      achievements: [
        "Reduced ticket resolution time by 40%",
        "Improved user satisfaction scores from 72% to 94%",
        "Implemented automated workflows that saved 15 hours of manual work weekly"
      ]
    },
    {
      id: 2,
      title: "IT Onboarding Process Optimization",
      category: "Process Improvement",
      image: "https://images.pexels.com/photos/6120171/pexels-photo-6120171.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Redesigned the IT onboarding process for new employees, creating a streamlined, efficient system.",
      achievements: [
        "Reduced onboarding time from 2 days to 4 hours",
        "Created comprehensive documentation and checklists",
        "Implemented automated provisioning for standard software packages"
      ]
    },
    {
      id: 3,
      title: "Network Infrastructure Upgrade",
      category: "IT Infrastructure",
      image: "/images/pexels-field-engineer-147254-442150.jpg",
      description: "Managed a comprehensive upgrade of the company's network infrastructure to improve performance and security.",
      achievements: [
        "Increased network speed by 200%",
        "Implemented new security protocols that reduced vulnerabilities by 65%",
        "Completed project 10% under budget and 2 weeks ahead of schedule"
      ]
    },
    {
      id: 4,
      title: "Remote Work Support System",
      category: "Support Solutions",
      image: "https://images.pexels.com/photos/3987104/pexels-photo-3987104.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Developed and implemented support systems for remote workers during the COVID-19 pandemic.",
      achievements: [
        "Created self-service portal that resolved 40% of common issues",
        "Established remote troubleshooting protocols for 300+ home workers",
        "Maintained 99.7% uptime for critical systems"
      ],
      link: "#"
    },
    {
      id: 5,
      title: "Cybersecurity Training Program",
      category: "Training",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Developed and delivered comprehensive cybersecurity training for all employees to reduce security incidents.",
      achievements: [
        "Reduced phishing susceptibility by 75%",
        "Created engaging, accessible training materials for non-technical users",
        "Implemented monthly security awareness newsletter"
      ]
    },
    {
      id: 6,
      title: "Hardware Lifecycle Management",
      category: "IT Infrastructure",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Developed and implemented a comprehensive hardware lifecycle management system for all company devices.",
      achievements: [
        "Created inventory system tracking 1,200+ devices",
        "Reduced hardware costs by 22% through strategic refresh cycles",
        "Implemented secure data destruction protocols for retired equipment"
      ]
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore a selection of successful projects that demonstrate my expertise in IT support, system implementation, and process improvement.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 dark:bg-blue-700 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-1.5 mr-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;