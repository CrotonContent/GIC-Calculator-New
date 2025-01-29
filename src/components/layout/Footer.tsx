import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              About
            </div>
            <p className="text-base text-gray-700">
              GICCalculator.ca provides Canadians with free tools to calculate and compare GIC returns.
            </p>
          </div>
          
          <nav aria-label="Quick links">
            <div className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base text-gray-700 hover:text-gray-900">
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-700 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-700 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <div className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-base text-gray-700 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-700 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <div className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Disclaimer
            </div>
            <p className="text-base text-gray-700">
              This calculator provides estimates only. Please consult with your financial institution for actual rates and returns.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-700 text-center">
            © {currentYear} GICCalculator.ca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;