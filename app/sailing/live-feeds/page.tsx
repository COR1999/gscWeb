import PageLayout from '../../../components/PageLayout';

const LiveFeedsPage = () => {
  return (
    <PageLayout 
      title="Live Feeds" 
      description="Watch live sailing action from Greystones Harbor"
      maxWidth="wide"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Live Weather Conditions</h2>
          <p className="text-gray-700 mb-4">Real-time weather data from our harbor weather station</p>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.weatherlink.com/embeddablePage/show/0a264d1568f3416bb9996731a7c3634b/summary"
              width="100%"
              height="600"
              frameBorder="0"
              className="w-full"
              title="GSC Live Weather Data"
            />
          </div>
          <div className="mt-3">
            <a 
              href="https://www.weatherlink.com/embeddablePage/show/0a264d1568f3416bb9996731a7c3634b/summary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View full weather page →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Harbor Webcam</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500">Live webcam feed would appear here</span>
          </div>
          <p className="text-gray-700">Live view of Greystones Harbor and sailing activity</p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Race Tracking</h3>
            <p className="text-gray-700">Live race tracking available during events</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LiveFeedsPage;