import PageLayout from '../../../components/PageLayout';

const ConstitutionPage = () => {
  return (
    <PageLayout 
      title="Club Constitution" 
      description="The governing constitution and rules of Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Constitution Document</h2>
          <p className="text-gray-700 mb-4">
            The full constitution document is available for download and contains detailed 
            information about club governance, membership rights and responsibilities, 
            committee structure, and club procedures.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Download Constitution (PDF)
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Key Information</h2>
          <p className="text-gray-700">
            For questions about the constitution or club governance, please contact our 
            Honorary Secretary at <a href="mailto:secretary@gsc.ie" className="text-blue-600 hover:underline">secretary@gsc.ie</a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ConstitutionPage;