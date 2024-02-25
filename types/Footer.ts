import { PortableTextBlock } from "sanity";

export type Footer = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
