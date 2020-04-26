import { MdViewWeek } from "react-icons/md";

export default {
  type: "object",
  name: "featureSection",
  title: "Feature Section",
  icon: MdViewWeek,
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "feature" }],
          description: "Add a feature",
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title }) {
      return {
        title: "Feature Section",
        subtitle: title,
      };
    },
  },
};
