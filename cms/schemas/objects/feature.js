import { MdArtTrack } from "react-icons/md";

export default {
  type: "document",
  name: "feature",
  title: "Feature",
  icon: MdArtTrack,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "richText",
    },
    {
      title: "Media",
      name: "media",
      type: "array",
      of: [
        { type: "imageAsset" },
        {
          name: "animation",
          type: "reference",
          title: "Animation",
          weak: true,
          to: [{ type: "animation" }],
          description: "Add an animation",
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "label",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media,
      };
    },
  },
};
