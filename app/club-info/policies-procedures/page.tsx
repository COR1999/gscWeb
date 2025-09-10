import PageLayout from '../../../components/PageLayout';

const PoliciesProceduresPage = () => {
  return (
    <PageLayout 
      title="Policies and Procedures" 
      description="Important policies and procedures for Greystones Sailing Club members"
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Safety Policies</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Child Protection Policy</li>
              <li>• Water Safety Guidelines</li>
              <li>• Emergency Procedures</li>
              <li>• Equipment Safety Standards</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Club Procedures</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Membership Applications</li>
              <li>• Boat Launch Procedures</li>
              <li>• Facility Usage Rules</li>
              <li>• Event Organization</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Document Downloads</h2>
          <p className="text-gray-700 mb-4">
            All club policies and procedures are available for download. Please ensure 
            you are familiar with the latest versions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Download Policy Documents
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default PoliciesProceduresPage;