
import { useEffect, useRef } from 'react';
import CodeBlock from './CodeBlock';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    const stepsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target;
            step.classList.add('opacity-100');
            step.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const steps = stepsRef.current?.querySelectorAll('.step');
    steps?.forEach((step) => {
      stepsObserver.observe(step);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      steps?.forEach((step) => {
        stepsObserver.unobserve(step);
      });
    };
  }, []);

  const installCode = `// Install PRWizard
npm install pr-wizard --save-dev

// Add to your CI pipeline
"scripts": {
  "pr-review": "pr-wizard review"
}`;

  const configCode = `// pr-wizard.config.js
module.exports = {
  github: {
    token: process.env.GITHUB_TOKEN,
    autoComment: true
  },
  rules: {
    complexity: 'warn',
    security: 'error',
    performance: 'info'
  },
  ignore: [
    '*.test.js',
    'dist/**'
  ]
}`;

  const steps = [
    {
      number: '01',
      title: 'Quick Installation',
      description: 'Install our package via npm or use our GitHub app for instant setup.',
      code: installCode
    },
    {
      number: '02',
      title: 'Simple Configuration',
      description: 'Set your preferences to match your team's coding standards.',
      code: configCode
    },
    {
      number: '03',
      title: 'Automated Reviews',
      description: 'PRWizard analyzes every new pull request and adds comments inline.',
      code: null
    },
    {
      number: '04',
      title: 'Continuous Learning',
      description: 'Our AI learns from your feedback and improves with every review.',
      code: null
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 opacity-0"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-prWizard-purple rounded-full mb-4">
            EASY INTEGRATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple Setup, Powerful Results
          </h2>
          <p className="text-lg text-gray-600">
            PRWizard integrates seamlessly into your workflow, providing value from day one with minimal configuration.
          </p>
        </div>

        <div ref={stepsRef} className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step opacity-0 translate-y-10 transition-all duration-700 delay-${index * 200}`}
            >
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                <div className="md:w-1/2 md:px-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-prWizard-purple">STEP</span>
                    <span className="text-2xl md:text-3xl font-bold ml-2 text-prWizard-purple">{step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  {step.code ? (
                    <div className="max-w-md mx-auto">
                      <CodeBlock code={step.code} />
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md mb-4">
                        <div className="flex items-center justify-center h-full bg-prWizard-dark rounded-md">
                          <div className="text-5xl text-prWizard-purple">{step.number === '03' ? '🔍' : '🧠'}</div>
                        </div>
                      </div>
                      <div className={`h-4 bg-gray-200 rounded-full mb-3 overflow-hidden ${step.number === '03' ? 'w-3/4' : 'w-full'}`}>
                        <div 
                          className="h-full bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple" 
                          style={{ width: step.number === '03' ? '75%' : '90%' }}
                        ></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-4/6"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
