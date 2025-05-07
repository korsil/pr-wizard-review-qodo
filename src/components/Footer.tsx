
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-prWizard-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-prWizard-darkPurple to-prWizard-purple flex items-center justify-center text-white font-bold text-lg">
                PR
              </div>
              <span className="ml-2 font-bold text-xl">PRWizard</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered code reviews that make your pull requests better, faster.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prWizard-purple transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-4 w-4">{social.charAt(0).toUpperCase()}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'How it Works', 'Pricing', 'Integrations', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Community', 'Blog', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates and news straight to your inbox.</p>
            <div className="flex">
              <Input 
                placeholder="Email address" 
                className="bg-gray-800 border-gray-700 text-white mr-2 focus:border-prWizard-purple focus:ring-prWizard-purple" 
              />
              <Button className="bg-prWizard-purple hover:bg-prWizard-darkPurple transition-colors">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PRWizard. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
