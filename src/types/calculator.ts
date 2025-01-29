export interface CalculatorInputs {
  principal: number;
  term: number;
  rate: number;
  compoundFrequency: number;
}

export interface CalculatorResults {
  totalInterest: number;
  finalAmount: number;
  effectiveRate: number;
}