import PageLayout from '../../components/PageLayout';

const CalendarPage = () => {
  return (
    <PageLayout 
      title="Club Calendar" 
      description="Upcoming events, races, and activities at Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-700">Stay up to date with all club activities, racing events, and social functions.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Recurring Events</h3>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-800">Sunday Junior Sailing</h4>
            <p className="text-gray-600">Every Sunday, 09:30 – 12:30</p>
            <p className="text-sm text-gray-500">Regular junior training and sailing sessions</p>
          </div>
        </div>
        
        <div className="grid gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">2025 Events Calendar</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">June 2025</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-gray-800">RNLI Race</h5>
                    <p className="text-gray-600">June 7, 13:00 – 17:00</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-800">Aero Nationals</h5>
                    <p className="text-gray-600">June 14-15, 10:00 – 18:00</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-800">Summer Party</h5>
                    <p className="text-gray-600">June 21, 15:30 – 23:00</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">July 2025</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-800">GP14 Open</h5>
                    <p className="text-gray-600">July 12-13, 08:30 – 17:00</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-800">Dinghy Regatta</h5>
                    <p className="text-gray-600">July 26, 09:00 – 15:00</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">August 2025</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-800">Feva / 200 Nationals</h5>
                    <p className="text-gray-600">August 9-10</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-gray-800">Taste of Greystones</h5>
                    <p className="text-gray-600">August 23-24, 11:00 – 18:00</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">September 2025</h4>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-800">Ladies Night</h5>
                  <p className="text-gray-600">September 12, 19:00 – 23:00</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">November 2025</h4>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-semibold text-gray-800">Prize Giving Night</h5>
                  <p className="text-gray-600">November 15, 19:30 – 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Event Types</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-700">National Championships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-gray-700">Club Regattas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-700">Special Races</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-gray-700">Social Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-gray-700">Community Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-gray-700">Awards & Recognition</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Key Information</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Season:</strong> Active events from June through November
              </div>
              <div>
                <strong>Junior Sailing:</strong> Every Sunday morning
              </div>
              <div>
                <strong>National Events:</strong> Hosting multiple national championships
              </div>
              <div>
                <strong>Social Calendar:</strong> Regular social events throughout the season
              </div>
              <div>
                <strong>Training:</strong> Various levels available during events
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Full Calendar</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Interactive calendar would appear here</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-6">Subscribe to our calendar or follow us for the latest updates on all club activities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe to Calendar
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
              Download iCal
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CalendarPage;