import PageLayout from '../../components/PageLayout';

const TrainingPage = () => {
  return (
    <PageLayout 
      title="Sailing Training" 
      description="Sailing courses and instruction for all levels at Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Adult Courses</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Start Sailing (Level 1)</h4>
                <p className="text-gray-600 text-sm">Complete beginner course</p>
              </div>
              <div>
                <h4 className="font-semibold">Basic Skills (Level 2)</h4>
                <p className="text-gray-600 text-sm">Building sailing confidence</p>
              </div>
              <div>
                <h4 className="font-semibold">Better Sailing (Level 3)</h4>
                <p className="text-gray-600 text-sm">Advanced techniques</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Youth Courses</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Discover Sailing</h4>
                <p className="text-gray-600 text-sm">Ages 8-12 introduction</p>
              </div>
              <div>
                <h4 className="font-semibold">Youth Sailing Scheme</h4>
                <p className="text-gray-600 text-sm">Progressive skill development</p>
              </div>
              <div>
                <h4 className="font-semibold">Racing Skills</h4>
                <p className="text-gray-600 text-sm">Competitive sailing training</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Course Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Duration:</h4>
              <p className="text-gray-700">Weekend courses (2 days)</p>
              <p className="text-gray-700">Weekday courses (5 days)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cost:</h4>
              <p className="text-gray-700">From €200 per course</p>
              <p className="text-gray-700">Member discounts available</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Included:</h4>
              <p className="text-gray-700">All equipment</p>
              <p className="text-gray-700">Certified instruction</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Book Your Course</h2>
          <p className="mb-6">Ready to start your sailing journey? Contact our training coordinator to book your place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Course Calendar
            </button>
            <a href="mailto:training@gsc.ie" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
              Email: training@gsc.ie
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TrainingPage;