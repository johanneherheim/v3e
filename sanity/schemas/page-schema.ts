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
      name: "content",
      title: "Innhald",
      type: "markdown",
    },
  ],
};

export default page;
