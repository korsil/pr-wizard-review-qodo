
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-prWizard-darkPurple to-prWizard-purple flex items-center justify-center text-white font-bold text-lg">
                PR
              </div>
              <span className="ml-2 font-bold text-xl">PRWizard</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-prWizard-purple transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-prWizard-purple transition-colors">How It Works</a>
            <a href="#integrations" className="text-sm font-medium text-gray-700 hover:text-prWizard-purple transition-colors">Integrations</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-prWizard-purple transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple hover:opacity-90 transition-opacity">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-2 border-t border-gray-200 animate-fade-in">
            <a href="#features" className="block py-2 text-gray-700 hover:text-prWizard-purple">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-prWizard-purple">How It Works</a>
            <a href="#integrations" className="block py-2 text-gray-700 hover:text-prWizard-purple">Integrations</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-prWizard-purple">Pricing</a>
            <div className="flex flex-col space-y-2 mt-2 pt-2 border-t border-gray-200">
              <Button variant="outline">Login</Button>
              <Button className="bg-gradient-to-r from-prWizard-darkPurple to-prWizard-purple hover:opacity-90 transition-opacity">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
