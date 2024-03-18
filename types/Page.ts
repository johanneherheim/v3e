import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
  images: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
};
