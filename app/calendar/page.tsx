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
        
        <div className="grid gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">This Month's Highlights</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Weekend Racing Series</h4>
                <p className="text-gray-600">Every Saturday & Sunday</p>
                <p className="text-sm text-gray-500">Ongoing championship series</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Training Courses</h4>
                <p className="text-gray-600">Weekdays & Weekends</p>
                <p className="text-sm text-gray-500">Beginner to advanced levels</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold">Social Events</h4>
                <p className="text-gray-600">Monthly club nights</p>
                <p className="text-sm text-gray-500">Third Friday of each month</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Racing Calendar</h3>
            <div className="space-y-2 text-gray-700">
              <div>Spring Series: March - May</div>
              <div>Summer Championships: June - August</div>
              <div>Autumn Series: September - November</div>
              <div>Special Events: Throughout the year</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Training Schedule</h3>
            <div className="space-y-2 text-gray-700">
              <div>Youth Training: Saturdays 10:00</div>
              <div>Adult Courses: Weekdays 18:00</div>
              <div>Weekend Intensives: Full schedule</div>
              <div>Private Instruction: By appointment</div>
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