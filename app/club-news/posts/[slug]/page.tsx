import { client, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../../../components/PageLayout';

interface PageProps {
  params: Promise<{ slug: string }>
}

// Enhanced PortableText components with styling
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      
      // Get image dimensions or use defaults
      const imageWidth = value.asset.metadata?.dimensions?.width || 1000;
      const imageHeight = value.asset.metadata?.dimensions?.height || 600;
      
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).width(1000).url()}
            alt={value.alt || 'Post image'}
            width={1000}
            height={Math.round((1000 * imageHeight) / imageWidth)}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
          {value.alt && (
            <div className="p-3 bg-gray-50 text-sm text-gray-600 italic text-center">
              {value.alt}
            </div>
          )}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-blue-900 mt-12 mb-6 border-b border-blue-200 pb-3">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-blue-800 mt-10 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-blue-600 mt-6 mb-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-300 pl-6 my-8 italic text-gray-600 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors"
        target={value.href?.startsWith('http') ? '_blank' : undefined}
        rel={value.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type=="post" && slug.current == $slug][0]{
      title,
      mainImage{
        asset->{
          _id,
          metadata{
            dimensions
          }
        },
        alt
      },
      publishedAt,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            metadata{
              dimensions
            }
          }
        }
      },
      excerpt,
      "authorName": author->name,
      "categories": categories[]->title
    }`,
    { slug }
  );

  if (!post) {
    return (
      <PageLayout title="Post Not Found" description="The requested post could not be found.">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The post you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/club-news" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            ← Back to Club News
          </Link>
        </div>
      </PageLayout>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PageLayout 
      title={post.title} 
      description={post.excerpt || 'Latest news from our sailing club'} 
      maxWidth="narrow"
    >
      <article className="prose prose-lg max-w-none">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/club-news" className="text-blue-600 hover:text-blue-800 transition-colors">
            Club News
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Author and Date */}
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{post.authorName}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={post.publishedAt} className="font-medium">
                {formattedDate}
              </time>
            </div>
          </div>

          {/* Featured Image */}
          {post.mainImage?.asset && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.mainImage.alt || post.title}
                width={1200}
                height={
                  post.mainImage.asset.metadata?.dimensions
                    ? Math.round((1200 * post.mainImage.asset.metadata.dimensions.height) / post.mainImage.asset.metadata.dimensions.width)
                    : 600
                }
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose-content">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Categories:</span>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category: string, index: number) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </footer>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/club-news" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Club News
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
