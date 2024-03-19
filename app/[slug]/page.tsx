import { Markdown } from "@/components/markdown";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type Page } from "@/types/Page";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <article>
      <div className="px-10 py-20 max-w-5xl mx-auto min-h-screen">
        <div className="text-lg text-gray-700 mt-5">
          <Markdown content={page.content} />
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
        {page.pdf && (
          <iframe
            src={page.pdf.asset.url}
            className="w-full h-64 mt-5 border-none"
          ></iframe>
        )}
      </div>
    </article>
  );
}
