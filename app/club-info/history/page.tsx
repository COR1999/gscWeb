import PageLayout from '../../../components/PageLayout';

const HistoryPage = () => {
  return (
    <PageLayout 
      title="Club History" 
      description="Discover the rich history of Greystones Sailing Club since 1968"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">The Beginning - 1968</h2>
          <p className="text-gray-700 mb-4">
            Greystones Sailing Club was established in 1968 by five visionary founders: 
            <strong> Gordon Clarke, Dermod Cafferkey, John Roy, Toby Davies, and Ian Mitchell</strong>. 
            The club started humbly with Mirror dinghies launched from a rubber mat on North Beach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Early Development (1969-1973)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">1</div>
                <div>
                  <strong>1969:</strong> Acquired a site from the Local Civics Association
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">2</div>
                <div>
                  Built a fence and clubhouse over the following four years
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">3</div>
                <div>
                  Collaborated with Wicklow County Council to construct a slipway at the Northern breakwater
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Growth Period</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">1980s - 1990s</h4>
                <p className="text-gray-700">Significant growth period for the club</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">2008 Peak</h4>
                <p className="text-gray-700">Reached 53 dinghies at the Annual Club Regatta</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">2014 Modernization</h4>
                <p className="text-gray-700">Received a new customized clubhouse and large pen after harbor renovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Championships Hosted</h3>
          <p className="text-gray-700 mb-4">
            Over the years, Greystones Sailing Club has had the honor of hosting numerous national championships:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Helmsmen Championships
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Enterprise National Championships
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Mirror National Championships
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Wayfarer National Championships
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                GP 14 Purcell Trophy
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                RS National Championships
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Taste of Greystones regatta
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Notable Alumni</h3>
          <p className="mb-4">
            Greystones Sailing Club has been proud to develop world-class sailors, including:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Olympians:</h4>
              <ul className="space-y-1">
                <li>• Marshall King</li>
                <li>• Aisling Bowman</li>
                <li>• Tim Goodbody</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">International Class Sailors:</h4>
              <ul className="space-y-1">
                <li>• Trevor Fisher</li>
                <li>• Craig Thompson</li>
                <li>• And many others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HistoryPage;