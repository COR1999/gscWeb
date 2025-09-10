import PageLayout from '../../components/PageLayout';

const ClubOfficersPage = () => {
  return (
    <PageLayout 
      title="Club Officers" 
      description="Meet the current officers and committee members of Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Executive Committee</h2>
            <div className="space-y-3">
              <div><strong>Commodore:</strong> [Name]</div>
              <div><strong>Vice Commodore:</strong> [Name]</div>
              <div><strong>Rear Commodore:</strong> [Name]</div>
              <div><strong>Honorary Secretary:</strong> [Name]</div>
              <div><strong>Honorary Treasurer:</strong> [Name]</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Committee Members</h2>
            <div className="space-y-3">
              <div><strong>Sailing Secretary:</strong> [Name]</div>
              <div><strong>Training Officer:</strong> [Name]</div>
              <div><strong>Membership Secretary:</strong> [Name]</div>
              <div><strong>Social Secretary:</strong> [Name]</div>
              <div><strong>Safety Officer:</strong> [Name]</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-700">For committee contact information, please email info@gsc.ie</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClubOfficersPage;