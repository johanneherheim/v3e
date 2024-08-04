import { Markdown } from "@/components/markdown";
import Image from "next/image";
import { type Page } from "@/types/Page";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Gallery } from "@/types/Gallery";
import { getPage } from "@/sanity/sanity-utils";
import tempo from "@/components/images/tempo.jpeg";
import fellesstart from "@/components/images/fellesstart.jpeg";
import gateritt from "@/components/images/gateritt.jpeg";

type Props = {
  params: { slug: string };
};

type GalleryPreviewProps = {
  name: string;
};

const races = ["gateritt", "tempo", "fellesstart"];

function GalleryPreview({ name }: GalleryPreviewProps) {
  return (
    <Link
      href={`/galleri/${name}`}
      className="p-5 bg-gray-100 rounded-lg space-y-5 text-center font-semibold group"
    >
      <Image
        src={
          name === "tempo"
            ? tempo
            : name === "fellesstart"
            ? fellesstart
            : gateritt
        }
        alt={""}
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="flex justify-center">
        <p className="text-xl capitalize my-auto">{name}</p>
        <span>
          <ArrowRight className="h-full my-auto inline transition-transform group-hover:translate-x-2 mr-1" />
        </span>
      </div>
    </Link>
  );
}

export default async function Page({ params }: Props) {
  const page: Page | null = await getPage(params.slug);
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {page &&
            page.slug === "galleri" &&
            races.map((race) => <GalleryPreview name={race} key={race} />)}
        </div>
      </div>
    </div>
  );
}
