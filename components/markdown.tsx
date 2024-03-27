import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Heading } from "./typography/heading";
import { OrderedList, UnorderedList } from "./typography/list";
import { ListItem } from "./typography/list-item";
import { Text } from "./typography/text";

import { cn } from "@/lib/utils";

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
          h1: ({ children }) => {
            return <Heading level={1}>{children}</Heading>;
          },
          h2: ({ children }) => {
            return <Heading level={2}>{children}</Heading>;
          },
          h3: ({ children }) => {
            return <Heading level={3}>{children}</Heading>;
          },
          h4: ({ children }) => {
            return <Text className="font-bold">{children}</Text>;
          },
          h5: ({ children }) => {
            return <Text className="font-bold">{children}</Text>;
          },
          h6: ({ children }) => {
            return <Text className="font-bold">{children}</Text>;
          },
          p: ({ children }) => {
            return <Text>{children}</Text>;
          },
          code: ({ children }) => {
            return (
              <code className="rounded bg-gray-200 px-1 py-0.5 font-mono text-gray-700 dark:bg-wave dark:text-gray-100">
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
          ul: ({ children }) => {
            return (
              <UnorderedList className="text-md sm:text-lg">
                {children}
              </UnorderedList>
            );
          },
          ol: ({ children }) => {
            return (
              <OrderedList className="text-md sm:text-lg">
                {children}
              </OrderedList>
            );
          },
          li: ({ children }) => {
            return (
              <ListItem className="text-md sm:text-lg">{children}</ListItem>
            );
          },
          table: ({ children }) => {
            return (
              <div className="table-responsive overflow-x-auto">
                <table style={{ width: "100%" }}>{children}</table>
              </div>
            );
          },
          td: ({ children }) => {
            return (
              <td className="border border-gray-300 p-2 text-sm sm:text-lg">
                {children}
              </td>
            );
          },
          tr: ({ children }) => {
            return <tr className="text-sm sm:text-lg">{children}</tr>;
          },
          a: ({ children, href }) => {
            const isRideWithGPS = href?.startsWith("https://ridewithgps.com");
            const isStravaMap = href?.startsWith(
              "https://www.strava.com/routes/"
            );
            const isExternal = href?.startsWith("http");

            const classNames = cn(
              "transition-colors underline font-medium duration-200 after:content-['_↗'] hover:text-blue-500",
              {
                "after:content-['_↗']": isExternal,
              }
            );

            if (isRideWithGPS) {
              return (
                <iframe
                  src={href}
                  style={{
                    width: "100%",
                    height: "800px",
                  }}
                ></iframe>
              );
            } else if (isStravaMap) {
              return (
                <iframe
                  src={href}
                  style={{
                    width: "100%",
                    height: "800px",
                  }}
                ></iframe>
              );
            } else if (isExternal) {
              return (
                <a
                  className={classNames}
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
            return <hr className="my-8 border-t-gray-300" />;
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
