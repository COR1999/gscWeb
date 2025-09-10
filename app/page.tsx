import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Overview />
      <NewsSection />
      <Footer />
    </div>
  );
}
