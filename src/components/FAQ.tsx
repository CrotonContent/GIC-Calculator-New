import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';

const FAQ: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white rounded-lg shadow-sm">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-lg font-medium pr-6">{faq.question}</h3>
              <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;