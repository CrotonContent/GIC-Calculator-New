export default function MailerLiteForm() {
  return (
    <div id="mlb2-22784898" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-22784898">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1338009/forms/146604356094920017/subscribe" data-code="" method="post" target="_blank">
              <div className="ml-form-formContent space-y-4">
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name">
                    <label className="block text-gray-900 text-sm font-medium mb-1">Your Name</label>
                    <input 
                      aria-label="name" 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="fields[name]" 
                      placeholder="Your first name"
                      required
                    />
                  </div>
                </div>
                
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label className="block text-gray-900 text-sm font-medium mb-1">Email For Private Course Access (Zero Spam)</label>
                    <input 
                      aria-label="email" 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="fields[email]" 
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-state ml-validate-required">
                    <label className="block text-gray-900 text-sm font-medium mb-1">
                      Get Province-Specific Rate Alerts
                      <span className="ml-2 text-sm text-blue-600 cursor-help" title="Why we ask: Alberta/Quebec have unique GIC tax rules">ℹ️</span>
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      name="fields[state]" 
                      required
                    >
                      <option value="">Select your province</option>
                      <option value="Alberta">Alberta</option>
                      <option value="British Columbia">British Columbia</option>
                      <option value="Manitoba">Manitoba</option>
                      <option value="New Brunswick">New Brunswick</option>
                      <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                      <option value="Nova Scotia">Nova Scotia</option>
                      <option value="Ontario">Ontario</option>
                      <option value="Prince Edward Island">Prince Edward Island</option>
                      <option value="Quebec">Quebec</option>
                      <option value="Saskatchewan">Saskatchewan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center bg-blue-50 p-4 rounded-lg">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-3 block text-sm">
                  <span className="text-gray-900 font-medium">Also send me exclusive monthly GIC rate reports</span>
                  <span className="block text-sm text-blue-600 mt-1">(avg. members earn 0.8% more/year)</span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:-translate-y-1"
                >
                  Start My Free Course Now →
                </button>
              </div>

              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
            <div className="ml-form-successContent">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h4>
              <p className="text-gray-600">You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}