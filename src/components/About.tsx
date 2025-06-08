import React from 'react';
import { Headset, Server, MessageSquare, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Headset size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Technical Support',
      description: 'Providing expert, user-friendly IT support and troubleshooting to resolve complex technical issues.'
    },
    {
      icon: <Server size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'System Administration',
      description: 'Managing and maintaining IT infrastructure, including networks, servers, and workstations.'
    },
    {
      icon: <MessageSquare size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Clear Communication',
      description: 'Translating complex technical concepts into easy-to-understand language for all users.'
    },
    {
      icon: <Clock size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Fast Resolution',
      description: 'Quickly diagnosing and resolving issues to minimize downtime and maintain productivity.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I'm a dedicated IT Help Desk professional with a passion for solving technical problems and helping users make the most of their technology. With a focus on clear communication and efficient solutions, I strive to provide exceptional support that keeps systems running and users productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-5/12 mb-10 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Alex Johnson helping a client" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-6/12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With over 5 years of experience in IT support, I've developed a comprehensive skill set that allows me to tackle a wide range of technical challenges. My journey began with a passion for technology and a desire to help others make the most of their digital tools.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I specialize in providing exceptional help desk support, troubleshooting hardware and software issues, and implementing effective IT solutions. I pride myself on my ability to communicate complex technical concepts in user-friendly terms, ensuring that clients and colleagues alike can understand and implement the solutions I provide.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My approach combines technical expertise with empathy and patience, creating a support experience that leaves users feeling heard, understood, and empowered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;