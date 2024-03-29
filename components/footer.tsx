import { getFooter, getFooters, getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

async function FooterSection({ params }: Props) {
  const footer = await getFooter(params.slug);
  return (
    <div className="flex flex-col">
      <h3>{footer.title}</h3>
      <div className="text-lg text-gray-700">
        <PortableText value={footer.content} />
      </div>
    </div>
  );
}

export default async function Footer() {
  const footers = await getFooters();
  return (
    <div className="flex p-10 gap-10 flex-col sm:flex-row justify-between bg-muted">
      {footers.map((footer) => (
        <FooterSection key={footer._id} params={{ slug: footer.slug }} />
      ))}
    </div>
  );
}
