import { MdArtTrack } from "react-icons/md";

export default {
  type: "object",
  name: "heroSection",
  title: "Hero Section",
  icon: MdArtTrack,
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
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
      title: "heading",
      media: "image",
    },
    prepare({ title }) {
      return {
        title: "Hero Section",
        subtitle: title,
      };
    },
  },
};
