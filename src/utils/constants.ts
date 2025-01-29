export const COMPOUND_FREQUENCY_OPTIONS = [
  { value: 1, label: 'Annually' },
  { value: 2, label: 'Semi-annually' },
  { value: 4, label: 'Quarterly' },
  { value: 12, label: 'Monthly' },
  { value: 365, label: 'Daily' },
] as const;

export const COMMON_TERMS = [1, 2, 3, 4, 5] as const;

export const DEFAULT_CALCULATOR_INPUTS = {
  principal: 10000,
  term: 1,
  rate: 4.5,
  compoundFrequency: 12,
} as const;