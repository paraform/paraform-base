import { MdFormatQuote, MdViewColumn } from "react-icons/md";

const tripleTestimonial = {
  type: "object",
  name: "tripleTestimonial",
  title: "Triple Testimonial",
  icon: MdViewColumn,
  fields: [
    {
      name: "testimonialItem",
      type: "array",
      title: "Testimonial",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "testimonial" }],
          description: "Add a testimonial",
        },
      ],
      validation: (Rule) => Rule.required().length(3),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Triple Testimonial",
      };
    },
  },
};

const singleTestimonial = {
  type: "object",
  name: "singleTestimonial",
  title: "Single Testimonial",
  icon: MdFormatQuote,
  fields: [
    {
      name: "testimonialItem",
      type: "array",
      title: "Testimonial",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "testimonial" }],
          description: "Add a testimonial",
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Single Testimonial",
      };
    },
  },
};

export default {
  type: "document",
  name: "testimonialSection",
  title: "Testimonial Section",
  icon: MdFormatQuote,
  fieldsets: [
    {
      name: "appearance",
      title: "Appearance",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Show Heading?",
      name: "showHeading",
      type: "boolean",
    },
    {
      title: "Testimonials",
      name: "testimonials",
      type: "array",
      of: [singleTestimonial, tripleTestimonial],
    },
    {
      title: "Appearance",
      name: "appearance",
      type: "section",
      fieldset: "appearance",
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "Testimonial Section",
        subtitle: title,
      };
    },
  },
};
