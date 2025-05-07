
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
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

  const calculatePrice = (basePrice: number) => {
    return annual ? basePrice * 0.8 : basePrice;
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and side projects",
      price: calculatePrice(19),
      priceId: "price_starter",
      features: [
        "Unlimited repositories",
        "Basic code analysis",
        "PR comments integration",
        "5 team members",
        "Email support"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and companies",
      price: calculatePrice(49),
      priceId: "price_professional",
      features: [
        "Everything in Starter",
        "Advanced error detection",
        "Custom rule configuration",
        "15 team members",
        "Priority email support",
        "Analytics dashboard"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "For large teams with complex requirements",
      price: calculatePrice(99),
      priceId: "price_enterprise",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone & email support",
        "On-premise deployment option",
        "SLA guarantee"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-prWizard-purple rounded-full mb-4">
            FLEXIBLE PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plans For Teams of All Sizes
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${annual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <div
              className="relative inline-flex items-center cursor-pointer"
              onClick={() => setAnnual(!annual)}
            >
              <div 
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                  annual ? 'bg-prWizard-purple' : 'bg-gray-300'
                }`}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                    annual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  style={{ marginTop: '2px' }}
                />
              </div>
            </div>
            <span className={`ml-3 ${annual ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
              Annual <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                plan.isPopular ? 'border-prWizard-purple' : 'border-gray-100'
              } h-full flex flex-col`}
            >
              {plan.isPopular && (
                <div className="bg-prWizard-purple text-white text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-prWizard-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100">
                <Button 
                  className={`w-full ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple hover:opacity-90 transition-opacity'
                      : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Start {plan.isPopular ? '14-day Trial' : 'Free Trial'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
