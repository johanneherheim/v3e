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
          title="echo-brosjyre"
          style={{
            width: "100%",
            height: "800px",
          }}
          src={
            "https://cdn.sanity.io/files/4bjq1oea/production/c4d83f8272654d4bc6ef5ce35f0d094719064ed4.pdf"
          }
        ></iframe>
      )}
    </div>
  );
}
