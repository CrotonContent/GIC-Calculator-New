import { CalculatorResults } from '../types/calculator';

export const calculateGICResults = (inputs: {
  principal: number;
  term: number;
  rate: number;
  compoundFrequency: number;
}): CalculatorResults => {
  const { principal, term, rate, compoundFrequency } = inputs;
  const r = rate / 100;
  const n = compoundFrequency;
  const t = term;

  const finalAmount = principal * Math.pow(1 + r/n, n * t);
  const totalInterest = finalAmount - principal;
  const effectiveRate = (Math.pow(1 + r/n, n) - 1) * 100;

  return {
    totalInterest,
    finalAmount,
    effectiveRate,
  };
};