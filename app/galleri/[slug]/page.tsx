import { getGallery } from "@/sanity/sanity-utils";
import { Markdown } from "@/components/markdown";
import { Heading } from "@/components/typography/heading";
import ImageComponent from "@/components/ImageDownload";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

type Image = {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
};

export default async function Page({ params }: Props) {
  const gallery = await getGallery(params.slug);

  return (
    <div className="px-5 sm:px-3 py-20 max-w-5xl mx-auto min-h-screen">
      <Heading level={1}>{gallery.title}</Heading>
      {gallery && (
        <>
          {gallery.content ? (
            <Markdown content={gallery.content} />
          ) : (
            <div className="flex w-fit flex-col gap-8 my-10">
              <h3 className="text-xl font-medium">Ingenting her enda ...</h3>
              <iframe
                src="https://giphy.com/embed/IsYt1rfEu0Zv1FjK19"
                width="480"
                height="269"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {gallery.images &&
                gallery.images.map((image: Image) => (
                  <ImageComponent
                    key={image.asset._id}
                    src={image.asset.url}
                    alt={image.alt}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
