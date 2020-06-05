export default {
  name: "section",
  title: "section",
  type: "object",
  fieldsets: [
    {
      name: "appearance",
      title: "Show / Hide",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "textColor",
      title: "Text Color",
      description: "Add a text color",
      fieldset: "appearance",
      type: "reference",
      to: [{ type: "brandColors" }],
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      description: "Add a background color",
      fieldset: "appearance",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "backgroundGradient",
      title: "Gradient",
      fieldset: "appearance",
      type: "string",
    },
  ],
};
