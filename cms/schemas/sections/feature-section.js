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
    {
      title: "Image on the right?",
      name: "reversed",
      type: "boolean",
    },
    {
      title: "Add a drop shadow?",
      name: "shadow",
      type: "boolean",
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
  fieldsets: [
    {
      name: "appearance",
      title: "Appearance",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Show Heading?",
      name: "showHeading",
      type: "boolean",
    },
    {
      title: "Features",
      name: "features",
      type: "array",
      of: [singleFeature, tripleFeature],
    },
    {
      title: "Appearance",
      name: "appearance",
      type: "section",
      fieldset: "appearance",
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
