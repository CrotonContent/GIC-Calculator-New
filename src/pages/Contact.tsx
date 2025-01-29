import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
        <p className="text-gray-600 mb-4">
          Have questions or feedback? We'd love to hear from you.
        </p>
        
        <div className="flex items-center gap-2 text-blue-600">
          <Mail className="h-5 w-5" />
          <a href="mailto:daniel@crotoncontent.com" className="hover:underline">
            daniel@crotoncontent.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;