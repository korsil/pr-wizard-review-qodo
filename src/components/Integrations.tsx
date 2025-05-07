
import { useEffect, useRef } from 'react';

const Integrations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const integrations = [
    { name: "GitHub", logo: "github.svg" },
    { name: "GitLab", logo: "gitlab.svg" },
    { name: "Bitbucket", logo: "bitbucket.svg" },
    { name: "VS Code", logo: "vscode.svg" },
    { name: "Slack", logo: "slack.svg" },
    { name: "Teams", logo: "teams.svg" },
    { name: "Jenkins", logo: "jenkins.svg" },
    { name: "CircleCI", logo: "circleci.svg" }
  ];

  return (
    <section id="integrations" className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-prWizard-purple rounded-full mb-4">
            SEAMLESS INTEGRATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Works Where You Work
          </h2>
          <p className="text-lg text-gray-600">
            PRWizard integrates with your favorite tools and platforms, fitting perfectly into your existing workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 text-center flex items-center justify-center font-bold text-prWizard-purple">
                  {integration.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-medium">{integration.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">More integrations coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
