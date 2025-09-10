import NavBar from './NavBar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showHero?: boolean;
  maxWidth?: 'narrow' | 'normal' | 'wide' | 'full';
}

const PageLayout = ({ children, title, description, showHero = false, maxWidth = 'normal' }: PageLayoutProps) => {
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'narrow': return 'max-w-3xl';
      case 'normal': return 'max-w-4xl';
      case 'wide': return 'max-w-6xl';
      case 'full': return 'max-w-full';
      default: return 'max-w-4xl';
    }
  };

  const containerClass = getMaxWidthClass();
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {showHero && (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 pt-16">
          <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center`}>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
      
      <main className={`flex-grow ${showHero ? '' : 'pt-16'}`}>
        {!showHero && (
          <div className="bg-gray-50 py-12">
            <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8`}>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-gray-700">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
        
        <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;