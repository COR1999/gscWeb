import PageLayout from '../../../components/PageLayout';

const ClubOfficersPage = () => {
  return (
    <PageLayout 
      title="Club Officers" 
      description="Meet the current officers and committee members of Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Executive Committee</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Commodore</h3>
                <p className="text-gray-600">Neville Long</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:commodore@gsc.ie">commodore@gsc.ie</a> • 
                  <a href="tel:0872065297" className="ml-1">087 206 5297</a>
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Vice Commodore</h3>
                <p className="text-gray-600">Chris McConnell</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:vicecommodore@gsc.ie">vicecommodore@gsc.ie</a> • 
                  <a href="tel:0857715805" className="ml-1">085 771 5805</a>
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Hon. Secretary</h3>
                <p className="text-gray-600">Orla Bolger</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:secretary@gsc.ie">secretary@gsc.ie</a> • 
                  <a href="tel:0879893137" className="ml-1">087 989 3137</a>
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Hon. Treasurer</h3>
                <p className="text-gray-600">Tadgh McCarthy</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:treasurer@gsc.ie">treasurer@gsc.ie</a> • 
                  <a href="tel:0868599396" className="ml-1">086 859 9396</a>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Sailing Secretary</h3>
                <p className="text-gray-600">Thomas Moran</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:sailingsecretary@gsc.ie">sailingsecretary@gsc.ie</a> • 
                  <a href="tel:0879261517" className="ml-1">087 926 1517</a>
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Bosun</h3>
                <p className="text-gray-600">Daragh Cafferky</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:bosun@gsc.ie">bosun@gsc.ie</a> • 
                  <a href="tel:0872580215" className="ml-1">087 258 0215</a>
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Training & Development</h3>
                <p className="text-gray-600">Chris McConnell</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:development@gsc.ie">development@gsc.ie</a> • 
                  <a href="tel:0857715805" className="ml-1">085 771 5805</a>
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-800">Social Secretary</h3>
                <p className="text-gray-600">Anto Quinn</p>
                <p className="text-sm text-blue-600">
                  <a href="mailto:social@gsc.ie">social@gsc.ie</a> • 
                  <a href="tel:0868164620" className="ml-1">086 816 4620</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">IT & Communications</h2>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-gray-800">Website & IT</h3>
              <p className="text-gray-600">Daniel O&apos;Brien</p>
              <p className="text-sm text-blue-600">
                <a href="mailto:webmaster@gsc.ie">webmaster@gsc.ie</a> • 
                <a href="tel:0867913004" className="ml-1">086 791 3004</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Additional Officers</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-semibold text-gray-800">Children&apos;s Officer</h3>
                <p className="text-gray-600">Chris McConnell</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-semibold text-gray-800">Safety Officer</h3>
                <p className="text-gray-600">Michael Quilty</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-semibold text-gray-800">Centre Principal</h3>
                <p className="text-gray-600">Chris McConnell</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4">
            Our committee members are here to help with any questions or concerns you may have about the club. 
            Please don&apos;t hesitate to reach out using the contact details above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@gsc.ie" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              General Enquiries: info@gsc.ie
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClubOfficersPage;