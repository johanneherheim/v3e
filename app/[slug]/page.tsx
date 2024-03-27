import { Markdown } from "@/components/markdown";
import { getGalleries, getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { type Page } from "@/types/Page";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const galleries = await getGalleries();
  return (
    <div className="px-3 py-20 max-w-5xl mx-auto min-h-screen">
      {page.content ? (
        <Markdown content={page.content} />
      ) : (
        <div className="flex flex-col gap-8 my-10">
          <h3 className="text-xl font-medium">Ingenting her enda ...</h3>
          <iframe
            src="https://giphy.com/embed/IsYt1rfEu0Zv1FjK19"
            className=" sm:w-[480px] sm:h-[269px]"
          />
        </div>
      )}
      <div>
        {page.slug == "galleri" &&
          galleries.map((gallery) => (
            <Link
              href={`/galleri/${gallery.slug}`}
              key={gallery._id}
              className="flex flex-row mt-5 transition-colors underline font-medium duration-200 after:content-['_↗'] hover:text-blue-500"
            >
              {gallery.title + ""}
            </Link>
          ))}
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
