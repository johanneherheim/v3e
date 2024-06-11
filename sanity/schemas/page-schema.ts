import { Rule } from "sanity";

const page = {
  name: "page",
  title: "Sider",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Bilete",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Skildring av biletet",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "pdf",
      title: "PDF-fil",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
    {
      name: "gpx",
      title: "GPX-filer",
      type: "array",
      of: [
        {
          type: "file",
          options: {
            accept: ".gpx",
          },
          fields: [
            {
              name: "alt",
              title: "Skildring av GPX-filen",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Innhald",
      type: "markdown",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default page;
