import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { DownloadIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import DownloadLink from "./downloadLink";

type MarkdownProps = {
  className?: string;
  content: string | null;
};

export function Markdown({ className, content }: MarkdownProps) {
  if (!content) {
    return null;
  }

  return (
    <div className={cn("max-w-3xl space-y-4 text-black", className)}>
      <ReactMarkdown
        components={{
          br: () => {
            return <br />;
          },
          h1: ({ children }) => {
            return <h1 className="mb-10">{children}</h1>;
          },
          h2: ({ children }) => {
            return <h2 className="pt-10 pb-2">{children}</h2>;
          },
          code: ({ children }) => {
            return (
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono">
                {children}
              </code>
            );
          },
          blockquote: ({ children }) => {
            return (
              <blockquote className="border-l-4 border-gray-300 py-4 pl-4 italic">
                {children}
              </blockquote>
            );
          },
          table: ({ children }) => {
            return (
              <div className="table-responsive overflow-x-auto">
                <table style={{ width: "100%" }}>{children}</table>
              </div>
            );
          },
          a: ({ children, href }) => {
            const isMap = children?.toString().toLowerCase().startsWith("kart");
            const isExternal = href?.startsWith("http");
            const isStrava = href?.includes("strava");
            const isImage = children?.toString().toLowerCase().includes("[");
            const isFaceBook = href?.includes("facebook");
            const isEQ = href?.includes("eqtiming");

            const classNames = cn(
              "transition-colors underline font-medium duration-200 hover:text-blue-500"
            );

            if (isMap) {
              return (
                <iframe
                  src={href}
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                ></iframe>
              );
            } else if (isExternal) {
              return (
                <a
                  className={cn(
                    classNames,
                    isStrava && "text-orange-600 hover:text-orange-800",
                    isFaceBook && "text-blue-600 hover:text-blue-800",
                    isEQ && "text-green-600 hover:text-green-800",
                    "after:content-['_↗︎']",
                    isImage && "after:content-none"
                  )}
                  href={href ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              );
            }

            return (
              <Link className={classNames} href={href ?? ""}>
                {children}
              </Link>
            );
          },
          img: ({ src, alt }) => {
            return (
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width="600"
                height="400"
                className="mx-auto h-auto max-w-full"
              />
            );
          },
          hr: () => {
            return <hr className="my-8" />;
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
