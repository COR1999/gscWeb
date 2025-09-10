import NewsCard from './NewsCard';
import { client, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: any;
  mainImage?: { asset: { _ref: string } };
  publishedAt?: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  return await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      excerpt,
      mainImage{asset},
      publishedAt
    }`
  );
};

const NewsSection = async () => {
  const posts = await fetchPosts();

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
          {posts.length === 0 ? (
            <div className="col-span-2 text-center text-gray-500">No posts found.</div>
          ) : (
            posts.map((post) => (
              <NewsCard
                key={post._id}
                title={post.title}
                date={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
                excerpt={post.excerpt}
                slug={post.slug.current}
                mainImage={post.mainImage}
              />
            ))
          )}
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