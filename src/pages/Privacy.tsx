import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Information We Collect</h2>
        <p>
          GICCalculator.ca is committed to protecting your privacy. We only collect information that is necessary to provide our calculator service and improve user experience.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our calculator service</li>
          <li>To improve and optimize our website</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To detect and prevent technical issues</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>
    </div>
  );
};

export default Privacy;