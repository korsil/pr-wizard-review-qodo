
import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = featuresRef.current?.querySelectorAll('.feature-card');
    children?.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  const features = [
    {
      title: "Bug Detection",
      description: "Finds potential bugs, edge cases, and performance issues before they reach production.",
      icon: "🐛",
      benefits: [
        "Runtime error detection",
        "Memory leak identification",
        "Infinite loop detection"
      ]
    },
    {
      title: "Style Consistency",
      description: "Ensures code follows your team's style guidelines and best practices.",
      icon: "✨",
      benefits: [
        "Consistent naming patterns",
        "Proper indentation",
        "Coding conventions"
      ]
    },
    {
      title: "AI Suggestions",
      description: "Intelligently suggests improvements based on context and best practices.",
      icon: "💡",
      benefits: [
        "Alternative implementations",
        "Modern syntax options",
        "Code simplification"
      ]
    },
    {
      title: "Automatic Learning",
      description: "Gets smarter with each review, learning from your team's patterns and preferences.",
      icon: "🧠",
      benefits: [
        "Team-specific patterns",
        "Project-specific knowledge",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-prWizard-purple rounded-full mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Code Review Process
          </h2>
          <p className="text-lg text-gray-600">
            PRWizard doesn't just find problems – it makes your team better. Our AI learns from your codebase and improves with every review.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card transition-all duration-700 transform opacity-0 translate-y-10 bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">BENEFITS:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-prWizard-purple mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
