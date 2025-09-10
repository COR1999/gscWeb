import NewsCard from './NewsCard';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  slug?: string;
}

const NewsSection = () => {
  // Mock news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Annual Regatta 2024 - A Huge Success!",
      date: "2024-08-15",
      excerpt: "Our annual regatta drew over 150 participants from across Ireland and beyond. Perfect weather conditions and competitive racing made for an unforgettable weekend on the water. Congratulations to all winners and participants!",
      slug: "annual-regatta-2024"
    },
    {
      id: 2,
      title: "New Youth Training Program Launches This September",
      date: "2024-08-10",
      excerpt: "We're excited to announce our expanded youth training program starting this September. Designed for ages 8-16, the program includes beginner courses, advanced racing skills, and safety training. Early bird registration is now open.",
      slug: "youth-training-program-2024"
    },
    {
      id: 3,
      title: "Harbor Improvements Complete - New Facilities Now Open",
      date: "2024-07-28",
      excerpt: "After months of construction, our harbor improvements are complete! New changing facilities, expanded boat storage, and improved launching ramps are now available to all members. Come check out the fantastic new amenities.",
      slug: "harbor-improvements-complete"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest happenings at Greystones Sailing Club
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              slug={item.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg border-2 border-blue-600">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;