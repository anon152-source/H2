import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 transition-colors duration-300">
      <img 
        src="/images/pexels-field-engineer-147254-442150.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block text-xl sm:text-2xl text-blue-600 mb-2">Hello, I'm</span>
              Alex Johnson
              <span className="block text-blue-700 mt-2">IT Support Specialist</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Solving technical problems with expertise and empathy. 
              5+ years of experience in IT help desk support, system administration, and technical troubleshooting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                download
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-600 mx-auto overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-12">
                <p className="text-blue-700 font-medium">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;