import { getFooter, getFooters, getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

async function FooterSection({ params }: Props) {
  const footer = await getFooter(params.slug);
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl mb-2">{footer.title}</h1>
        <div className="text-lg text-gray-700">
          <PortableText value={footer.content} />
        </div>
      </div>
      {footer.slug == "nyttige-lenkar" && (
        <Link
          className=" underline hover:text-blue-600 mt-6"
          href={"mailto:{johanne.herheim@gmail.com}"}
        >
          Har du innspel til nettsida?
        </Link>
      )}
    </div>
  );
}

export default async function Footer() {
  const footers = await getFooters();
  return (
    <div className="flex p-10 flex-col sm:flex-row justify-between bg-muted">
      {footers.map((footer) => (
        <FooterSection key={footer._id} params={{ slug: footer.slug }} />
      ))}
    </div>
  );
}
