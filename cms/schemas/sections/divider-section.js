import { MdSignalCellular4Bar } from "react-icons/md";

export default {
  type: "document",
  name: "dividerSection",
  title: "Divider Section",
  icon: MdSignalCellular4Bar,
  fields: [
    {
      name: "shape",
      type: "reference",
      to: [{ type: "dividerShape" }],
    },
    {
      name: "topColor",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
    {
      name: "bottomColor",
      type: "reference",
      to: [{ type: "backgroundColors" }, { type: "brandColors" }],
    },
  ],
  preview: {
    select: {
      title: "shape.name",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Shelf Divider",
      };
    },
  },
};
