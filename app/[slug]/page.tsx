import { Markdown } from "@/components/markdown";
import Image from "next/image";
import { type Page } from "@/types/Page";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPage } from "@/sanity/sanity-utils";
import tempo2024 from "@/components/images/tempo-2024.jpeg";
import fellesstart2024 from "@/components/images/fellesstart-2024.jpeg";
import gateritt2024 from "@/components/images/gateritt-2024.jpeg";
import fellesstart2025 from "@/components/images/fellesstart-2025.jpg";
import tempo2025 from "@/components/images/tempo-2025.jpg";
import gateritt2025 from "@/components/images/gateritt-2025.jpg";

type Props = {
  params: { slug: string };
};

type GalleryPreviewProps = {
  name: string;
  slug: string;
};

const races2024 = [
  { name: "Tempo 2024", slug: "tempo-2024" },
  { name: "Gateritt 2024", slug: "gateritt-2024" },
  { name: "Fellesstart 2024", slug: "fellesstart-2024" },
];

const races2025 = [
  { name: "Tempo 2025", slug: "tempo-2025" },
  { name: "Gateritt 2025", slug: "gateritt-2025" },
  { name: "Fellesstart 2025", slug: "fellesstart-2025" },
];

const raceImages: Record<string, any> = {
  "gateritt-2024": gateritt2024,
  "tempo-2024": tempo2024,
  "fellesstart-2024": fellesstart2024,
  "fellesstart-2025": fellesstart2025,
  "tempo-2025": tempo2025,
  "gateritt-2025": gateritt2025,
};

function GalleryPreview({ name, slug }: GalleryPreviewProps) {
  const imageSrc = raceImages[slug];

  return (
    <Link
      href={`/galleri/${slug}`}
      className="p-5 bg-gray-100 rounded-lg space-y-5 text-center font-semibold group"
    >
      <Image
        src={imageSrc}
        alt={name}
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
            races2025.map((race) => (
              <GalleryPreview
                name={race.name}
                slug={race.slug}
                key={race.name}
              />
            ))}
        </div>
        <hr className="my-8 border-t-2 border-gray-300" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {page &&
            page.slug === "galleri" &&
            races2024.map((race) => (
              <GalleryPreview
                name={race.name}
                slug={race.slug}
                key={race.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
