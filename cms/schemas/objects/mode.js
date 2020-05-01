export default {
  title: "Mode",
  name: "mode",
  type: "object",
  fields: [
    {
      name: "mode",
      title: "Name",
      type: "string",
    },
    {
      name: "background",
      title: "Background Color",
      description: "Add a background color",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "text",
      title: "Text Color",
      description: "Add a text color",
      type: "reference",
      to: [{ type: "brandColors" }],
    },
  ],
};
