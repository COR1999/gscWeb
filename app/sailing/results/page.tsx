import PageLayout from '../../../components/PageLayout';

const ResultsPage = () => {
  return (
    <PageLayout 
      title="Sailing Results" 
      description="View the latest race results from Greystones Sailing Club competitions"
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Dinghy Results 2025</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Spring Series</h3>
                <p className="text-gray-600">Latest results from the spring racing series</p>
                <a href="https://sailwave.com/results/GSCSpring2025.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">View Results →</a>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Midweek Series</h3>
                <p className="text-gray-600">Evening racing results</p>
                <a href="https://www.sailwave.com/results/GSCWednesdays2025.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">View Results →</a>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Championship Series</h3>
                <p className="text-gray-600">Annual championship standings</p>
                <a href="https://www.sailwave.com/results/GSCChampionship2025.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">View Results →</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Keelboat Results 2025</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Championship Series</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• <a href="https://sailwave.com/results/GSC_2025_Championship_Class_1_Fixed.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Class 1 Fixed</a> & <a href="https://sailwave.com/results/GSC_2025_Championship_Class_1_Progressive.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Progressive</a></div>
                  <div>• <a href="https://sailwave.com/results/GSC_2025_Championship_Class_2_Fixed.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Class 2 Fixed</a> & <a href="https://sailwave.com/results/GSC_2025_Championship_Class_2_Progressive.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Progressive</a></div>
                </div>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Midweek Series</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• <a href="https://sailwave.com/results/GSC_2025_Midweek_Series_Class_1_Fixed.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Class 1 Fixed</a> & <a href="https://sailwave.com/results/GSC_2025_Midweek_Series_Class_1_Progressive.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Progressive</a></div>
                  <div>• <a href="https://sailwave.com/results/GSC_2025_Midweek_Series_Class_2_Fixed.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Class 2 Fixed</a> & <a href="https://sailwave.com/results/GSC_2025_Midweek_Series_Class_2_Progressive.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Progressive</a></div>
                </div>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Taste of Greystones</h3>
                <p className="text-gray-600">Annual regatta event results</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View Results →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Junior Results 2025</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Sunday Results for 2025</strong> - Check back regularly for updated junior sailing results
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Our junior sailing program continues to thrive with regular Sunday racing sessions. 
            Results are posted here after each sailing day.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            View Junior Results →
          </a>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Previous Years Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">2024 Results</h3>
              <p className="text-gray-600 text-sm mb-3">Complete results from the 2024 sailing season</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View 2024 Results →
              </a>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">2023 Results</h3>
              <p className="text-gray-600 text-sm mb-3">Archive of 2023 racing results</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View 2023 Results →
              </a>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Result Archives</h3>
              <p className="text-gray-600 text-sm mb-3">Historical results from previous seasons</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Browse Archives →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Sailwave Results Platform</h2>
          <p className="mb-4">
            Detailed results and analysis are available on our Sailwave platform, providing 
            comprehensive scoring, series standings, and race analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://sailwave.com/results/GSCChampionship2025.htm" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Access Sailwave Platform
            </a>
            <a href="https://sailwave.com/results/GSCChampionship2025.htm" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-center">
              View Current Results
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResultsPage;