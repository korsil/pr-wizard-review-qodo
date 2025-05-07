
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "PRWizard has cut our code review time in half. It catches the simple stuff so our engineers can focus on architecture and logic.",
      name: "Alex Morgan",
      title: "CTO at DevFlow",
      avatar: ""
    },
    {
      quote: "The AI suggestions have helped our junior developers learn faster. It's like having a senior engineer review every line of code.",
      name: "Samantha Lee",
      title: "Engineering Manager at CodeStack",
      avatar: ""
    },
    {
      quote: "I was skeptical about AI code reviews, but PRWizard has proven its worth many times over by catching subtle bugs we would have missed.",
      name: "Marcus Johnson",
      title: "Lead Developer at TechFront",
      avatar: ""
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-prWizard-dark to-black text-white">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 opacity-0"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-900 text-purple-200 rounded-full mb-4">
            TRUSTED BY TEAMS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Developers Are Saying
          </h2>
          <p className="text-lg text-gray-300">
            PRWizard is helping teams of all sizes improve their code quality and development process.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-slider overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 p-8 md:p-10 rounded-lg">
                    <div className="mb-8">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl mb-8">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-prWizard-purple rounded-full flex items-center justify-center font-bold text-white mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="text-white border-gray-700 hover:bg-gray-800"
              onClick={prevTestimonial}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-prWizard-purple' : 'bg-gray-700'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="text-white border-gray-700 hover:bg-gray-800"
              onClick={nextTestimonial}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
