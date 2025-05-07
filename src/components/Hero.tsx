
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const prReviewCode = `// PRWizard Review Example
const review = await PRWizard.review({
  pullRequest: pr,
  options: {
    checkStyles: true,
    detectBugs: true,
    suggestImprovements: true
  }
});

// Output analysis with AI insights
console.log(review.suggestions);
// > [
//   "Consider using async/await pattern on line 124",
//   "Potential memory leak in closeConnection()",
//   "This variable name could be more descriptive"
// ]`;

  return (
    <div className="pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div 
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-prWizard-purple rounded-full mb-4">
                AI-POWERED PULL REQUEST REVIEWS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Code Review, <span className="gradient-text">Reimagined</span> with AI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              PRWizard analyzes your pull requests instantly, finding bugs, style issues, and suggesting 
              improvements before they reach human reviewers. Save time and ship better code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-prWizard-${i % 2 === 0 ? 'purple' : 'darkPurple'}`}></div>
                ))}
              </div>
              <p>Trusted by <span className="font-medium">2,500+</span> developers</p>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rotate-bg rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative z-10">
                <CodeBlock code={prReviewCode} title="pr-wizard-review.js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
