import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt?: any;
  slug: string;
  mainImage?: { asset: { _ref: string } };
}

const NewsCard = ({ title, date, excerpt, slug, mainImage }: NewsCardProps) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
    {mainImage?.asset?._ref && (
      <Image
        src={urlFor(mainImage).width(600).height(300).url()}
        alt={title}
        width={600} // required
        height={300} // required
        className="w-full h-48 object-cover rounded mb-4"
      />
    )}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm mb-2">{date}</p>
    <div className="text-gray-600 mb-2 line-clamp-3">
      {excerpt ? <PortableText value={excerpt} /> : "No excerpt available."}
    </div>
    <Link
      href={`/club-news/posts/${slug}`}
      className="mt-auto text-blue-600 hover:underline font-medium"
    >
      Read more
    </Link>
  </div>
);

export default NewsCard;