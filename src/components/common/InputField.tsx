import React from 'react';
import { DollarSign, Calendar, Percent, RefreshCw } from 'lucide-react';
import Tooltip from './Tooltip';

interface InputFieldProps {
  label: string;
  id: string;
  type: 'text' | 'number' | 'select';
  value: string | number;
  onChange: (value: string | number) => void;
  icon: 'dollar' | 'calendar' | 'percent' | 'refresh';
  tooltip?: string;
  step?: string;
  options?: Array<{ value: number; label: string }>;
  'aria-label'?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  icon,
  tooltip,
  step,
  options,
  'aria-label': ariaLabel,
}) => {
  const IconComponent = {
    dollar: DollarSign,
    calendar: Calendar,
    percent: Percent,
    refresh: RefreshCw,
  }[icon];

  const labelContent = (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
  );

  return (
    <div className="space-y-1">
      {tooltip ? (
        <Tooltip content={tooltip}>{labelContent}</Tooltip>
      ) : (
        labelContent
      )}
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconComponent className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        {type === 'select' ? (
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            aria-label={ariaLabel || label}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            step={step}
            className="block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            aria-label={ariaLabel || label}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;