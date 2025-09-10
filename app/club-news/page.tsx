import React from "react";
import Link from "next/link";
import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import PageLayout from '../../components/PageLayout';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: any;
  mainImage?: { asset: { _ref: string } };
  publishedAt?: string;
  "authorName"?: string;
  "categories"?: string[];
};

export default async function ClubNewsPage() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage{asset},
      "authorName": author->name,
      "categories": categories[]->title
    }`
  );

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <PageLayout 
      title="Club News & Updates" 
      description="Stay connected with the latest happenings at Greystones Sailing Club. From race results to member spotlights, find all our club news here."
    >
      <div className="prose prose-lg max-w-none">
        <div className="space-y-12">

        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600">Check back soon for the latest club news and updates.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">Featured Story</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-transparent ml-6 rounded"></div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    {featuredPost.mainImage?.asset?._ref && (
                      <div className="md:w-1/2">
                        <Image
                          src={urlFor(featuredPost.mainImage).width(800).height(500).url()}
                          alt={featuredPost.title}
                          width={800}
                          height={500}
                          className="w-full h-64 md:h-full object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className={`p-8 ${featuredPost.mainImage?.asset?._ref ? 'md:w-1/2' : 'w-full'} flex flex-col justify-center`}>
                      <div className="mb-4">
                        {featuredPost.categories && featuredPost.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {featuredPost.categories.slice(0, 2).map((category, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        )}
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 leading-tight">
                          {featuredPost.title}
                        </h3>
                        {featuredPost.publishedAt && (
                          <div className="flex items-center text-gray-600 mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">
                              {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                            {featuredPost.authorName && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="text-sm">By {featuredPost.authorName}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="prose prose-gray mb-6">
                        {featuredPost.excerpt ? (
                          <PortableText value={featuredPost.excerpt} />
                        ) : (
                          <p className="text-gray-600">Read the full story to learn more about this exciting update from our club.</p>
                        )}
                      </div>
                      <Link
                        href={`/club-news/posts/${featuredPost.slug.current}`}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                      >
                        Read Full Story
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Recent Posts Grid */}
            {remainingPosts.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Recent News</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-transparent ml-6 rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post) => (
                    <article key={post._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      {post.mainImage?.asset?._ref && (
                        <div className="relative overflow-hidden">
                          <Image
                            src={urlFor(post.mainImage).width(600).height(300).url()}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 1).map((category, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                          {post.title}
                        </h3>
                        
                        {post.publishedAt && (
                          <div className="flex items-center text-gray-600 text-sm mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {new Date(post.publishedAt).toLocaleDateString()}
                            {post.authorName && (
                              <>
                                <span className="mx-2">•</span>
                                <span>By {post.authorName}</span>
                              </>
                            )}
                          </div>
                        )}
                        
                        <div className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt ? (
                            <PortableText value={post.excerpt} />
                          ) : (
                            <p>Click to read the full story and discover more about this club update.</p>
                          )}
                        </div>
                        
                        <Link
                          href={`/club-news/posts/${post.slug.current}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:underline"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Call to Action */}
        {posts.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on club announcements, race results, and member news. 
              Follow us on social media or visit regularly for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/club-info/membership" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Our Club
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </PageLayout>
  );
}
