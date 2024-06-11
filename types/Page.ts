export type Page = {
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
  pdf: {
    asset: {
      url: string;
    };
  };
  gpx: {
    asset: {
      url: string;
    };
    alt: string;
  }[];
  content: string;
};
