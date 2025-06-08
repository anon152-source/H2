import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<number>(1);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Help Desk Specialist",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Lead a team of 5 IT support specialists, providing escalation support for complex technical issues",
        "Manage and maintain IT infrastructure including networks, servers, and workstations for 500+ employees",
        "Implement and maintain IT security protocols and best practices"
      ],
      achievements: [
        "Reduced average ticket resolution time by 35% through process improvements",
        "Implemented a new help desk system that improved customer satisfaction ratings by 28%",
        "Developed and delivered training programs that enhanced team performance by 40%"
      ]
    },
    {
      id: 2,
      title: "IT Support Specialist",
      company: "Innovate Systems",
      location: "Austin, TX",
      period: "2018 - 2021",
      description: [
        "Provided comprehensive technical support to 300+ employees across multiple departments",
        "Configured and maintained hardware, software, and network infrastructure",
        "Collaborated with IT management to develop and implement IT policies and procedures"
      ],
      achievements: [
        "Achieved 95% first-contact resolution rate for support tickets",
        "Spearheaded migration to cloud-based services, reducing IT costs by 20%",
        "Received Employee of the Quarter award twice for exceptional support services"
      ]
    },
    {
      id: 3,
      title: "Technical Support Associate",
      company: "DataCore Technologies",
      location: "Seattle, WA",
      period: "2017 - 2018",
      description: [
        "Provided first-level technical support for hardware, software, and network issues",
        "Documented technical solutions for knowledge base and user guides",
        "Assisted with onboarding and technical setup for new employees"
      ],
      achievements: [
        "Maintained 92% customer satisfaction rating based on post-support surveys",
        "Created troubleshooting guides that reduced common support tickets by 25%",
        "Recognized for perfect attendance and reliability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            My professional journey in IT support and help desk services, showcasing my growth, responsibilities, and achievements over the years.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0">
            {jobs.map((job) => (
              <button
                key={job.id}
                className={`flex-shrink-0 w-full text-left p-4 rounded-lg transition-all duration-300 border-2 ${
                  activeJob === job.id
                    ? 'bg-blue-600 dark:bg-blue-700 text-white border-blue-600 dark:border-blue-700'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
                }`}
                onClick={() => setActiveJob(job.id)}
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className={`${
                  activeJob === job.id ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {job.company}
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>{job.period}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            {jobs
              .filter((job) => job.id === activeJob)
              .map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md animate-fadeIn">
                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0 text-gray-600 dark:text-gray-400">
                      <Briefcase size={18} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.description.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="inline-block w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;