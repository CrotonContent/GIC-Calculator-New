import MailerLiteForm from '../components/landing/MailerLiteForm';
import SEO from '../components/common/SEO';

export default function EmailCapture() {
  return (
    <>
      <SEO
        title="Free GIC Mastery Course | Unlock Higher Returns | GICCalculator.ca"
        description="Learn proven GIC strategies in our free 5-day course. Master laddering, broker rates, and tax optimization for guaranteed higher returns."
        url="/gic-course"
      />
      <div className="min-h-screen bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start mb-8 sm:mb-16">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:text-5xl">
              🔒 <span className="text-blue-600">Last Chance:</span> Secure Today's GIC Rates Before the Bank of Canada Cuts →
            </h1>
            <div className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 space-y-4">
              <p className="font-semibold">🇨🇦 Free 5-Day Email Course Reveals:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Risk-Free Laddering</strong> to Access Cash Every 6 Months (While Earning Top Rates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Broker vs. Bank GICs</strong> – How Canadians Pocket 1.3% Extra Yearly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Tax Loopholes</strong> for TFSA/RRSP Investors (Save $372+/yr, Legally)</span>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-900">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>CDIC-Insured Strategies</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>No Spam, Ever</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative mt-8 md:mt-0">
            <MailerLiteForm />
          </div>
        </div>

        {/* As Seen In */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16 text-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-6">As Seen In</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <img
              src="/images/press/hardbacon.jpg"
              alt="Hardbacon"
              className="h-8 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-200"
            />
            <img
              src="/images/press/savvy-new-canadians.jpg"
              alt="Savvy New Canadians"
              className="h-8 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">What You'll Unlock in 5 Days</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 auto-rows-fr">
            {/* Day 1 */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Day 1: What Are GICs?</h3>
              <p className="text-white/80">Your Risk-Free Path to Growing Savings</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• Types of GICs and how they work</li>
                <li>• CDIC insurance explained</li>
                <li>• Goal-setting checklist included</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4zm3 5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Day 2: GICs vs. Other Investments</h3>
              <p className="text-white/80">When to Choose Safety Over Risk</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• Compare returns with other options</li>
                <li>• Beat inflation strategies</li>
                <li>• Decision flowchart included</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Day 3: Advanced GIC Strategies</h3>
              <p className="text-white/80">Master Laddering & Rate Timing</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• Laddering for optimal returns</li>
                <li>• BoC rate cycle timing</li>
                <li>• Free laddering template</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Day 4: GIC Tax Secrets</h3>
              <p className="text-white/80">Shelter Your Earnings Legally</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• TFSA vs RRSP strategies</li>
                <li>• Provincial tax differences</li>
                <li>• Tax-efficiency calculator</li>
              </ul>
            </div>

            {/* Day 5 */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Day 5: Avoiding GIC Pitfalls</h3>
              <p className="text-white/80">Smart Investor's Guide to Fees & Penalties</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• Hidden fee warnings</li>
                <li>• Renewal negotiation script</li>
                <li>• Emergency exit strategies</li>
              </ul>
            </div>

            {/* Monthly Rate Reports */}
            <div className="bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Monthly Rate Reports</h3>
              <p className="text-white/80">Stay Ahead of Rate Changes</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>• Best GIC rates by province</li>
                <li>• Rate change predictions</li>
                <li>• Special promotional offers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">What Our Members Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Sarah Testimonial */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 mr-4">
                  <img 
                    src="/images/testimonials/sarah.svg" 
                    alt="Sarah T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah T.</p>
                  <p className="text-sm text-gray-600">Edmonton Teacher</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "5.6% on $50k with laddering template. <em className='text-blue-600 font-medium'>Tax savings covered my vacation!</em>"
              </blockquote>
            </div>

            {/* Raj Testimonial */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 mr-4">
                  <img 
                    src="/images/testimonials/raj.svg" 
                    alt="Raj P."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Raj P.</p>
                  <p className="text-sm text-gray-600">Toronto Engineer</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "<em className='text-blue-600'>1.2% higher rates than my bank?</em> Thank you, broker GIC guide!"
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-sm text-gray-600 italic">Featured in Hardbacon and Savvy New Canadians</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is this only for experienced investors?</h3>
              <p className="text-gray-600">No – <span className="text-blue-600 font-medium">most members start with under $5k!</span> Day 2 covers small-balance strategies.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will this work in my TFSA/RRSP?</h3>
              <p className="text-gray-600">Yes! Day 4 includes tax-sheltered GIC setups – including provincial tax quirks.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What if rates rise after I enroll?</h3>
              <p className="text-gray-600">You'll get <span className="text-blue-600 font-medium">Monthly Rate Reports</span> to adjust your ladder (members avg. +0.5% APR)</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How is this free?</h3>
              <p className="text-gray-600">We partner with CDIC-insured institutions – they cover costs when you invest (no obligation).</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}