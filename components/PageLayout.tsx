import NavBar from './NavBar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showHero?: boolean;
}

const PageLayout = ({ children, title, description, showHero = false }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {showHero && (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;