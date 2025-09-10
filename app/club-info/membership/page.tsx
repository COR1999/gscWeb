import PageLayout from '../../../components/PageLayout';

const MembershipPage = () => {
  return (
    <PageLayout 
      title="Membership" 
      description="Join Greystones Sailing Club - Open to sailors of all skill levels, ages, and interests"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Membership Information</h2>
          <p className="text-gray-700 mb-4">
            Greystones Sailing Club is open to sailors of all skill levels, ages, and interests. 
            The club is run on a voluntary basis with fleets including junior and adult dinghy, 
            and keelboat sailing.
          </p>
          <p className="text-gray-700">
            <strong>Membership Period:</strong> Calendar year (January 1st - December 31st)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Adult Membership (2025)</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold">Ordinary</span>
                <div className="text-right">
                  <div>€460</div>
                  <div className="text-sm text-green-600">(€414 early bird)</div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Family</span>
                <div className="text-right">
                  <div>€575</div>
                  <div className="text-sm text-green-600">(€517.50 early bird)</div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Senior (66+ on Jan 1st)</span>
                <div className="text-right">
                  <div>€345</div>
                  <div className="text-sm text-green-600">(€310.50 early bird)</div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Pavilion (Social)</span>
                <span>€165</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Youth Membership (2025)</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold">Junior (Under 18 on May 4th)</span>
                <span>€175</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Student (18-24, full-time)</span>
                <span>€205</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Full-time education verification required for student membership
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Application Process</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Steps to Join:</h4>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Complete Online Membership Application Form
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Obtain two club member proposers (if needed)
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  Await Executive Committee approval
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  Set up Easy Payments Plus account
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  Make membership payment
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">6</span>
                  Receive welcome letter and club updates
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Club Values:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Non-discrimination policy
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Child safety prioritized
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Voluntary basis operation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Members support club operations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
          <p className="mb-6">
            For more information or to start your membership application, contact our Membership Secretary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" href='https://forms.office.com/pages/responsepage.aspx?id=icrAmUwd3E6WxOCBKPmRn8f3cNa2jXdDszJfFOqvj6lURDA0MFVSNUpJRlcxOVI1NFhBVzNaU1dUUC4u&route=shorturl'>Membership Application Form</a>
            <a 
              href="mailto:membership@gsc.ie"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Email: membership@gsc.ie
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MembershipPage;