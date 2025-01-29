import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { AmortizationEntry } from '../../types/calculator';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  amortizationSchedule: AmortizationEntry[];
  principal: number;
}

const GrowthChart: React.FC<Props> = ({ amortizationSchedule, principal }) => {
  const labels = amortizationSchedule.map(entry => `Year ${entry.year}`);
  const balanceData = amortizationSchedule.map(entry => entry.endingBalance);
  const principalLine = Array(amortizationSchedule.length).fill(principal);

  const data = {
    labels,
    datasets: [
      {
        label: 'Balance with Interest',
        data: balanceData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Initial Investment',
        data: principalLine,
        borderColor: 'rgb(156, 163, 175)',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default GrowthChart;