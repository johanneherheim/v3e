export type Gallery = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  images: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
  content: string;
};
