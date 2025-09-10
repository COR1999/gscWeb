import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-white/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="/gsc-logo.png"
            alt="Greystones Sailing Club Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-blue-600">Greystones Sailing Club</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the thrill of sailing on Ireland&apos;s beautiful east coast. 
          Join our vibrant community of sailors in the heart of Greystones.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/club-info/membership" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg text-center">
            Join the Club
          </Link>
          <Link href="/club-news" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg border-2 border-blue-600 text-center">
            Club News
          </Link>
        </div>
      </div>
      
      {/* Decorative waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 fill-white"
        >
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;