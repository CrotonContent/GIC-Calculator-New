import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using GICCalculator.ca, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The calculator and information provided on GICCalculator.ca are for informational purposes only. We do not provide financial advice, and the results should not be considered as such.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we strive to provide accurate calculations and information, we make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on our website is strictly at your own risk.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          GICCalculator.ca shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website or calculator.
        </p>
      </div>
    </div>
  );
};

export default Terms;