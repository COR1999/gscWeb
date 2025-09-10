import PageLayout from '../../components/PageLayout';

const SailingCalendarPage = () => {
  return (
    <PageLayout 
      title="Sailing Calendar & SI's" 
      description="Official sailing calendar and sailing instructions for Greystones Sailing Club events"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2025 Sailing Calendar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Spring Series</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• March - May weekend racing</li>
                <li>• Open to all classes</li>
                <li>• Points series championship</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Summer Championships</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• June - August main series</li>
                <li>• Club championship events</li>
                <li>• Trophy races</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Sailing Instructions</h2>
          <p className="text-gray-700 mb-4">
            Current sailing instructions (SI's) for all club racing events. 
            Please ensure you have the latest version before participating.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Download Current SI's (PDF)
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Racing Times</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Saturday Racing:</strong> 14:00</div>
              <div><strong>Sunday Racing:</strong> 11:00</div>
              <div><strong>Midweek Racing:</strong> 18:30</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Special Events</h3>
            <div className="space-y-2 text-gray-700">
              <div>• Taste of Greystones Regatta</div>
              <div>• Club Championship Finals</div>
              <div>• National Championships</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SailingCalendarPage;