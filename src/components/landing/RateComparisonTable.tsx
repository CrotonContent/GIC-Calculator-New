export default function RateComparisonTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Current 1-Year GIC Rates</h3>
      <div className="overflow-hidden">
        <table className="min-w-full">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-3 text-gray-600">Big Banks</td>
              <td className="py-3 text-right font-medium text-gray-900">5.1%</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="py-3 text-blue-600 font-medium">Brokers</td>
              <td className="py-3 text-right font-bold text-blue-600">5.6%</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600">Credit Unions</td>
              <td className="py-3 text-right">
                <span className="font-medium text-gray-900">5.8%</span>
                <span className="ml-2 text-sm text-blue-600">↗ Feb 25</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}