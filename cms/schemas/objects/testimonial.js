import { MdFormatQuote } from "react-icons/md";

export default {
  type: "document",
  name: "testimonial",
  title: "Testimonial",
  icon: MdFormatQuote,
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "string",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "quote",
      subtitle: "name",
    },
  },
};
