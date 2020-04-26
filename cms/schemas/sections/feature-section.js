import { MdViewWeek, MdArtTrack, MdViewColumn } from "react-icons/md";

const tripleFeature = {
  type: "object",
  name: "tripleFeature",
  title: "Triple Feature",
  icon: MdViewColumn,
  fields: [
    {
      name: "featureItem",
      type: "array",
      title: "Feature",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "feature" }],
          description: "Add a feature",
        },
      ],
      validation: (Rule) => Rule.required().length(3),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Triple Feature",
      };
    },
  },
};

const singleFeature = {
  type: "object",
  name: "singleFeature",
  title: "Single Feature",
  icon: MdArtTrack,
  fields: [
    {
      title: "Flip the image?",
      name: "reversed",
      type: "boolean",
    },
    {
      name: "featureItem",
      type: "array",
      title: "Feature",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "feature" }],
          description: "Add a feature",
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Single Feature",
      };
    },
  },
};

export default {
  type: "document",
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
      title: "Features",
      name: "features",
      type: "array",
      of: [singleFeature, tripleFeature],
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
