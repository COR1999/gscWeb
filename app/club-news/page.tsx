import React, { useEffect, useState } from "react";
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
};

export default async function ClubNewsPage() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      excerpt,
      mainImage{asset}
    }`
  );

  return (
    <PageLayout 
      title="Club News - Greystones Sailing Club" 
      description="Latest news and updates from Greystones Sailing Club."
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Club News</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.length === 0 ? (
          <div className="col-span-2 text-center text-gray-500">No posts found.</div>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
              {post.mainImage?.asset?._ref && (
                <Image
                  src={urlFor(post.mainImage).width(600).height(300).url()}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="text-gray-600 mb-2 line-clamp-3">
                {post.excerpt ? (
                  <PortableText value={post.excerpt} />
                ) : (
                  "No excerpt available."
                )}
              </div>
              <Link
                href={`/club-news/posts/${post.slug.current}`}
                className="mt-auto text-blue-600 hover:underline font-medium"
              >
                Read more
              </Link>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}
