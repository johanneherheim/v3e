import { Markdown } from "@/components/markdown";
import { getGalleries, getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { type Page } from "@/types/Page";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DownloadLink from "@/components/downloadLink";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page: Page | null = await getPage(params.slug);
  const galleries = await getGalleries();
  return (
    <div className="px-3 py-20 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl font-semibold mb-5">{page?.title}</h1>
      {page && page.content ? (
        <Markdown content={page.content} />
      ) : (
        <div className="flex flex-col gap-8 my-10">
          <h3 className="text-xl font-medium">Ingenting her endå ...</h3>
          <iframe
            src="https://giphy.com/embed/IsYt1rfEu0Zv1FjK19"
            className=" sm:w-[480px] sm:h-[269px]"
          />
        </div>
      )}
      <div>
        <ul className="space-y-5 mt-10">
          {page &&
            page.slug == "galleri" &&
            galleries.map((gallery) => (
              <li key={gallery._id}>
                <Link
                  href={`/galleri/${gallery.slug}`}
                  className="group flex transition-colors underline-offset-4 hover:underline font-medium duration-200"
                >
                  <p>{gallery.title}</p>
                  <ArrowRight className="mx-1 scale-75 inline transition-transform group-hover:translate-x-2" />
                </Link>
              </li>
            ))}
        </ul>
        {page &&
          page.images &&
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
