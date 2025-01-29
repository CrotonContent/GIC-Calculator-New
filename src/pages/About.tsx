import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About GICCalculator.ca</h1>
      
      <div className="prose prose-lg">
        <p>
          GICCalculator.ca is Canada's trusted resource for Guaranteed Investment Certificate (GIC) calculations and comparisons. Our mission is to help Canadians make informed investment decisions by providing accurate, easy-to-use financial tools.
        </p>

        <h2>Our Purpose</h2>
        <p>
          We believe that everyone should have access to reliable financial planning tools. Our GIC calculator helps investors:
        </p>
        <ul>
          <li>Calculate potential returns on GIC investments</li>
          <li>Compare different investment terms and rates</li>
          <li>Understand the impact of compound interest</li>
          <li>Make informed decisions about their savings</li>
        </ul>

        <h2>Commitment to Accuracy</h2>
        <p>
          Our calculator uses industry-standard financial formulas and is regularly updated to ensure accuracy. While we strive to provide the most accurate calculations possible, we recommend consulting with financial professionals for personalized advice.
        </p>
      </div>
    </div>
  );
};

export default About;