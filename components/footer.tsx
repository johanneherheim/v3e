import { getFooter, getFooters, getPage } from "@/sanity/sanity-utils";
import { Markdown } from "@/components/markdown";

type Props = {
  params: { slug: string };
};

async function FooterSection({ params }: Props) {
  const footer = await getFooter(params.slug);

  if (!footer) {
    return (
      <div className="flex flex-col">
        <h3>Footer not found</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-xs">
      <h3>{footer.title ?? footer.title}</h3>
      <div className="text-lg text-gray-700">
        <Markdown content={footer.content} />
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
