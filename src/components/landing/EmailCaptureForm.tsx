import { useState } from 'react';

const provinces = [
  'AB - Alberta',
  'BC - British Columbia',
  'MB - Manitoba',
  'NB - New Brunswick',
  'NL - Newfoundland and Labrador',
  'NT - Northwest Territories',
  'NS - Nova Scotia',
  'NU - Nunavut',
  'ON - Ontario',
  'PE - Prince Edward Island',
  'QC - Quebec',
  'SK - Saskatchewan',
  'YT - Yukon'
];

export default function EmailCaptureForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    province: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // MailerLite will handle the submission
    console.log('Form submitted', formData);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto my-12 shadow-xl">
      <div className="ml-embedded" data-form="zwQrMC"></div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="firstName" className="block text-lg font-medium text-white mb-1">
            Where should we send your first lesson, <span className="text-blue-600">First Name</span>?
          </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="Your first name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 bg-white text-lg"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-white mb-1">
            Your Private Course Access <span className="text-sm">(Zero Spam)</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 bg-white text-lg pl-10"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="province" className="block text-lg font-medium text-white mb-1">
            Get Province-Specific Rate Alerts
            <span className="ml-2 text-sm text-blue-400 cursor-help" title="Why we ask: Alberta/Quebec have unique GIC tax rules">ℹ️</span>
          </label>
          <select
            id="province"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 bg-white text-lg"
            value={formData.province}
            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
          >
            <option value="">Select your province</option>
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-navy/10 p-4 rounded-lg">
          <input
            id="newsletter"
            type="checkbox"
            defaultChecked
            className="h-5 w-5 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="newsletter" className="ml-3 block text-white">
            <span className="font-medium">Also send me exclusive monthly GIC rate reports</span>
            <span className="block text-sm text-blue-400 mt-1">(avg. members earn 0.8% more/year)</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
        >
          Start My <span className="font-extrabold mx-1">Free</span> Course Now →
        </button>
      </form>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-center space-x-4 text-white">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>CDIC-Insured Strategies</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>12,843 Canadians Enrolled</span>
          </div>
        </div>
        <div className="text-center text-sm text-blue-400 italic">
          Featured in Hardbacon and Savvy New Canadians
        </div>
      </div>
    </div>
  );
}