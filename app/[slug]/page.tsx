import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div className="px-10 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl py-2 drop-shadow font-bold ">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
