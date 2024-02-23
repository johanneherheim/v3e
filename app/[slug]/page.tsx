import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div className="p-20">
      <h1 className="text-4xl py-2 drop-shadow font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 via-red-500">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
