import { MdRemoveRedEye } from "react-icons/md";

export const modes = {
  title: "Modes",
  name: "modes",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      title: "Background Color",
      name: "background",
      type: "array",
      of: [
        {
          name: "backgroundColor",
          title: "Background Color",
          type: "reference",
          to: [{ type: "brandColors" }, { type: "backgroundColors" }],
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Text Color",
      name: "text",
      type: "array",
      of: [
        {
          name: "textColor",
          title: "Text Color",
          type: "reference",
          to: [{ type: "brandColors" }, { type: "backgroundColors" }],
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
  ],
};
