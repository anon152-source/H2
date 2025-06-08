import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "Innovate Systems",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      quote: "Alex transformed our IT support process. His expertise and dedication to solving complex technical issues quickly made him an invaluable asset to our team. Our employees consistently praise his clear communication and patience."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "TechSolutions Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
      quote: "Working with Alex has been a game-changer for our IT department. His proactive approach to problem-solving and ability to implement efficient systems reduced our downtime significantly. He's not just technically skilled but also an excellent communicator."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "HR Manager",
      company: "DataCore Technologies",
      image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1600",
      quote: "Alex's support during our company-wide software migration was exceptional. He created comprehensive training materials and provided patient, personalized support to employees at all technical levels. His contribution made a potentially difficult transition smooth and successful."
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Marketing Director",
      company: "Global Ventures",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      quote: "As someone who isn't particularly tech-savvy, I've always appreciated Alex's ability to explain complex issues in simple terms. He never makes you feel inadequate for asking questions and always finds effective solutions. His support has been invaluable to our team."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            See what colleagues and clients have to say about my work, approach, and the results I've delivered.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 text-blue-200 dark:text-blue-900 opacity-50">
            <Quote size={80} />
          </div>

          <div className="relative z-10 bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-600 shadow-md flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-blue-600 dark:bg-blue-400 w-6' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;