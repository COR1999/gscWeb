import PageLayout from '../../components/PageLayout';

const ClubCommodoresPage = () => {
  return (
    <PageLayout 
      title="Club Commodores" 
      description="Honor roll of past and present commodores of Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Current Commodore</h2>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl text-gray-500">Photo</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">[Current Commodore Name]</h3>
              <p className="text-gray-600">Commodore 2024-2025</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Previous Commodores</h2>
          <p className="text-gray-700 mb-4">
            Since our founding in 1968, Greystones Sailing Club has been led by dedicated commodores 
            who have guided our club through decades of growth and achievement.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold">2023-2024</h4>
              <p>[Previous Commodore]</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold">2022-2023</h4>
              <p>[Previous Commodore]</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Role of the Commodore</h2>
          <p className="text-gray-700 mb-4">
            The Commodore serves as the chief executive of the club and chairs the Executive Committee. 
            They represent the club at official functions and oversee the strategic direction of GSC.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClubCommodoresPage;