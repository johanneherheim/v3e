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
        <h1 className="text-4xl py-2 font-bold ">{page.title}</h1>
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
      </div>
    </article>
  );
}
