import { useState, useEffect } from 'react';

export default function RateTicker() {
  const [nextMeeting, setNextMeeting] = useState('March 5');
  const [rates, setRates] = useState({
    banks: '5.1',
    brokers: '5.6',
    creditUnions: '5.8'
  });

  return (
    <div className="bg-navy/5 border border-navy/10 rounded-lg p-4 my-8">
      <div className="flex items-center text-navy font-medium mb-4">
        <span className="text-xl mr-2">⚠️</span>
        <span>
          <strong>Next BoC Rate Decision:</strong> {nextMeeting} – Lock Today's Rates Before They Drop!
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-navy">Current 1-Year GIC Averages:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-navy"></div>
            <span>Big Banks: {rates.banks}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            <span>Brokers: {rates.brokers}%</span>
          </div>
          <div className="flex items-center space-x-2 text-gold font-medium">
            <span>→</span>
            <span>Ontario Credit Unions Hiking to {rates.creditUnions}% on Feb 25</span>
          </div>
        </div>
      </div>
    </div>
  );
}