export default {
  name: "section",
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
      name: "backgroundColor",
      title: "Background Color",
      description: "Add a background color",
      fieldset: "appearance",
      type: "reference",
      to: [{ type: "color" }],
    },
    {
      name: "backgroundGradient",
      title: "Gradient",
      fieldset: "appearance",
      type: "string",
    },
  ],
};
