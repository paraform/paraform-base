export default {
  title: "Image",
  name: "imageAsset",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "alt",
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
