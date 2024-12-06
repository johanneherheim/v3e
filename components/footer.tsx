import { Markdown } from "@/components/markdown";

type FooterData = {
  title: string;
  content: string;
};

type FooterProps = {
  footers: FooterData[];
};

function FooterSection({ footer }: { footer: FooterData }) {
  return (
    <div className="flex flex-col max-w-xs">
      <h3>{footer.title}</h3>
      <div className="text-lg text-gray-700">
        <Markdown content={footer.content} />
      </div>
    </div>
  );
}

export default function Footer({ footers }: FooterProps) {
  return (
    <div className="flex p-10 gap-10 flex-col sm:flex-row justify-between bg-muted">
      {footers.map((footer, index) => (
        <FooterSection key={index} footer={footer} />
      ))}
    </div>
  );
}
