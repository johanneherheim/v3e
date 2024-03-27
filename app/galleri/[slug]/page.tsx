import { getGallery } from "@/sanity/sanity-utils";
import { Markdown } from "@/components/markdown";
import { Heading } from "@/components/typography/heading";
import ImageComponent from "@/components/ImageDownload";

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
            <p className="my-10">Her vil bileta av rittet dukka opp.</p>
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
