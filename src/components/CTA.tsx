
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div 
        ref={ctaRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Code Reviews?
                </h2>
                <p className="text-purple-100 text-lg">
                  Join thousands of developers who ship better code faster with PRWizard.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <Button className="bg-white text-prWizard-purple hover:bg-gray-100 transition-colors px-8 py-6 text-lg inline-flex items-center">
                  Try PRWizard Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-purple-800 px-8 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between text-purple-200 text-sm">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-purple-800 bg-white"></div>
                ))}
              </div>
              <p>Join 2,500+ developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
