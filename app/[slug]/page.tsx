"use client";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";

type PageData = {
  title: string;
  content: PortableTextBlock[];
  images: Array<{ asset: { _id: string; url: string }; alt: string }>;
};

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  const [page, setPage] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getPage(params.slug);
      setPage(pageData);
    };

    fetchData();
  }, [params.slug]);

  if (!page) {
    return (
      <div className="min-h-screen my-20 flex justify-center">Loading...</div>
    );
  }

  return (
    <div className="px-10 py-20 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl py-2 font-bold ">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={page.content} />
      </div>
      <div>
        {page.images &&
          page.images.map((image) => (
            <Image
              key={image.asset._id}
              src={image.asset.url}
              alt={image.alt}
              width={2000}
              height={2000}
              className="my-5"
            />
          ))}
      </div>
    </div>
  );
}
