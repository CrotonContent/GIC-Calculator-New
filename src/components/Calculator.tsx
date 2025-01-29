import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign, Calendar, Percent, RefreshCw } from 'lucide-react';

interface CalculatorInputs {
  principal: number;
  term: number;
  rate: number;
  compoundFrequency: number;
}

interface CalculatorResults {
  totalInterest: number;
  finalAmount: number;
  effectiveRate: number;
}

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    principal: 10000,
    term: 1,
    rate: 4.5,
    compoundFrequency: 12,
  });

  const [results, setResults] = useState<CalculatorResults>({
    totalInterest: 0,
    finalAmount: 0,
    effectiveRate: 0,
  });

  const commonTerms = [1, 2, 3, 4, 5];

  const calculateGIC = () => {
    const { principal, term, rate, compoundFrequency } = inputs;
    const r = rate / 100;
    const n = compoundFrequency;
    const t = term;

    const finalAmount = principal * Math.pow(1 + r/n, n * t);
    const totalInterest = finalAmount - principal;
    const effectiveRate = (Math.pow(1 + r/n, n) - 1) * 100;

    setResults({
      totalInterest,
      finalAmount,
      effectiveRate,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <CalculatorIcon className="h-5 w-5 text-blue-600" />
            Calculator Inputs
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Principal Amount</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={inputs.principal}
                  onChange={(e) => setInputs({ ...inputs, principal: Number(e.target.value) })}
                  className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="10000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Term (Years)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={inputs.term}
                  onChange={(e) => setInputs({ ...inputs, term: Number(e.target.value) })}
                  className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1"
                />
              </div>
              <div className="mt-2 flex gap-2">
                {commonTerms.map((term) => (
                  <button
                    key={term}
                    onClick={() => setInputs({ ...inputs, term })}
                    className={`px-3 py-1 text-sm rounded ${
                      inputs.term === term
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {term}Y
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Percent className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  step="0.01"
                  value={inputs.rate}
                  onChange={(e) => setInputs({ ...inputs, rate: Number(e.target.value) })}
                  className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="4.5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Compound Frequency</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RefreshCw className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={inputs.compoundFrequency}
                  onChange={(e) => setInputs({ ...inputs, compoundFrequency: Number(e.target.value) })}
                  className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1}>Annually</option>
                  <option value={2}>Semi-annually</option>
                  <option value={4}>Quarterly</option>
                  <option value={12}>Monthly</option>
                  <option value={365}>Daily</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateGIC}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Results</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Final Amount</p>
              <p className="text-2xl font-bold text-blue-600">
                ${results.finalAmount.toFixed(2)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Interest Earned</p>
              <p className="text-2xl font-bold text-green-600">
                ${results.totalInterest.toFixed(2)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Effective Annual Rate</p>
              <p className="text-2xl font-bold text-purple-600">
                {results.effectiveRate.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;