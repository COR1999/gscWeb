const Overview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About Greystones Sailing Club
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Established in 1937, we&apos;re one of Ireland&apos;s premier sailing clubs, 
            nestled in the picturesque harbor of Greystones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-blue-50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Expert Training</h3>
            <p className="text-gray-600">
              From beginners to advanced sailors, our certified instructors provide 
              comprehensive training programs for all skill levels.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-blue-50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Prime Location</h3>
            <p className="text-gray-600">
              Located in the stunning Greystones Harbor, offering perfect sailing 
              conditions and breathtaking views of the Irish Sea.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-blue-50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Vibrant Community</h3>
            <p className="text-gray-600">
              Join over 400 active members in our welcoming community. From social 
              events to competitive racing, there&apos;s something for everyone.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Whether you&apos;re a complete beginner or an experienced sailor, 
            Greystones Sailing Club offers the perfect environment to enjoy the sport you love.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
            Become a Member Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Overview;