export default {
  name: "section",
  title: "section",
  type: "object",
  fields: [
    {
      name: "textColor",
      title: "Text Color",
      description: "Add a text color",
      type: "reference",
      to: [{ type: "brandColors" }],
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      description: "Add a background color",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "backgroundGradient",
      title: "Background Gradient",
      type: "boolean",
    },
    {
      name: "gradientFrom",
      title: "Gradient Start Color",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "gradientTo",
      title: "Gradient End Color",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "string",
    },
    {
      title: "Section Spacing",
      description: "Add padding to the top and bottom of a section",
      name: "spacing",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    },
  ],
};
