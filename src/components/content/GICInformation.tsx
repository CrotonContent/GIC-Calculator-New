import React from 'react';

const GICInformation: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
      <h2 className="text-2xl font-bold mb-6">Types of GICs</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>Non-redeemable GICs offer the highest interest rates but require keeping your money invested until maturity.</li>
        <li>Redeemable GICs provide flexibility to withdraw early, typically with lower rates.</li>
        <li>Market-linked GICs combine guaranteed principal with returns tied to market performance.</li>
        <li>Cashable GICs allow withdrawal without penalty after a minimum holding period.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-6">Factors Influencing GIC Rates</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>The Bank of Canada's policy rate directly impacts GIC returns. Track current rates on the{' '}
          <a href="https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Bank of Canada website
          </a>.
        </li>
        <li>Longer investment terms typically offer higher interest rates.</li>
        <li>Financial institutions may offer better rates for larger deposits.</li>
        <li>Competition between banks and credit unions can lead to rate variations.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-6">Investment Protection</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>GICs from eligible financial institutions are protected by{' '}
          <a href="https://www.cdic.ca/your-coverage/how-deposit-insurance-works/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            CDIC insurance
          </a>{' '}
          up to $100,000.
        </li>
        <li>Principal is guaranteed, making GICs a secure investment option.</li>
        <li>Interest rates are locked in for the term, providing predictable returns.</li>
      </ul>
    </div>
  );
};

export default GICInformation;