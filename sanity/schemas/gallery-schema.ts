import { Rule } from "sanity";

const gallery = {
  name: "gallery",
  title: "Galleri",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Ritt",
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
      title: "Bilete frå rittet",
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
              title: "Har du ei skildring av biletet?",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Har du noko å seie om rittet?",
      type: "markdown",
    },
  ],
};

export default gallery;
