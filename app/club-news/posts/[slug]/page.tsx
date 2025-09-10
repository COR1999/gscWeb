import { client, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';


interface PageProps {
  params: Promise<{ slug: string }>
}

// Add custom PortableText components for image blocks
const portableTextComponents = {
  types: {
    image: ({ value }: any) =>
      value?.asset?._ref ? (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Post image'}
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto' }}
        />
      ) : null,
  },
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type=="post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      body,
      "authorName": author->name,
      "categories": categories[]->title
    }`,
    { slug }
  );

  if (!post) return <div>Post not found</div>;

  return (
    <PageLayout title={post.title} description={post.excerpt || 'Club news post'}>
      <article>
        <h1>{post.title}</h1>
        <p>By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()}</p>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.mainImage.alt || post.title}
            width={800}
            height={post.mainImage.height || 450}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
        <PortableText value={post.body} components={portableTextComponents} />
        {post.categories.length > 0 && <p>Categories: {post.categories.join(', ')}</p>}
      </article>
    </PageLayout>
  );
}
