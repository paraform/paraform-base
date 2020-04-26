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
      type: "simpleText",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      title: "Alt Text",
      description: "Alternate text for when the image wont load (SEO)",
      name: "alt",
      type: "string",
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
