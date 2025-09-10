import PageLayout from '../../components/PageLayout';

const LiveFeedsPage = () => {
  return (
    <PageLayout 
      title="Live Feeds" 
      description="Watch live sailing action from Greystones Harbor"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Harbor Webcam</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500">Live webcam feed would appear here</span>
          </div>
          <p className="text-gray-700">Live view of Greystones Harbor and sailing activity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Weather Conditions</h3>
            <div className="space-y-2">
              <div>Wind: [Live wind data]</div>
              <div>Temperature: [Current temp]</div>
              <div>Tide: [Tide information]</div>
            </div>
          </div>
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