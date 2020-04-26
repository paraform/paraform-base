export default {
  type: "document",
  name: "feature",
  title: "Feature",
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
      featureTitle: "title",
    },
    prepare({ featureTitle }) {
      return {
        title: `${featureTitle}`,
      };
    },
  },
};
