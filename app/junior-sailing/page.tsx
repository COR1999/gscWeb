import PageLayout from '../../components/PageLayout';

const JuniorSailingPage = () => {
  return (
    <PageLayout 
      title="Junior Sailing" 
      description="Youth sailing programs and training at Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Youth Sailing Programs</h2>
          <p className="text-gray-700">Our junior sailing program welcomes young sailors aged 8-18 with courses designed for all skill levels.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Learn to Sail</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Beginner courses for ages 8-12</li>
              <li>• Safe, supervised instruction</li>
              <li>• Small group sessions</li>
              <li>• All equipment provided</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Racing Program</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sunday racing series</li>
              <li>• Regional competitions</li>
              <li>• National championship training</li>
              <li>• Performance sailing development</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Program Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Season Dates:</h4>
              <p className="text-gray-700">April - September</p>
              <h4 className="font-semibold mb-2 mt-4">Training Days:</h4>
              <p className="text-gray-700">Saturdays & Sundays</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Membership:</h4>
              <p className="text-gray-700">€175 per year (Under 18)</p>
              <h4 className="font-semibold mb-2 mt-4">Contact:</h4>
              <p className="text-gray-700">junior@gsc.ie</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JuniorSailingPage;