import { MdArtTrack } from "react-icons/md";

export default {
  type: "document",
  name: "heroSection",
  title: "Hero Section",
  icon: MdArtTrack,
  fieldsets: [
    {
      title: "Email Subscribe",
      name: "subscribe",
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
      title: "Subheading",
      name: "subheading",
      type: "simpleText",
    },
    {
      title: "Media",
      name: "media",
      type: "array",
      of: [
        { type: "imageAsset" },
        {
          title: "Animation",
          name: "animation",
          type: "reference",
          description: "Add an animation",
          to: [{ type: "animation" }],
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Appearance",
      name: "appearance",
      type: "section",
    },
    {
      title: "Background Video",
      name: "video",
      type: "file",
    },
    {
      title: "Subscription Field",
      name: "subscribeField",
      type: "boolean",
      fieldset: "subscribe",
    },
    {
      title: "Contact Email",
      name: "contactEmail",
      description: "Email address incase of errors",
      type: "string",
      fieldset: "subscribe",
    },
    {
      title: "Mailchimp Url",
      name: "mailchimpUrl",
      description: "Url of mailchimp list",
      type: "string",
      fieldset: "subscribe",
    },
    {
      title: "Button Text",
      name: "buttonText",
      type: "string",
      fieldset: "subscribe",
    },
    {
      title: "Input Text",
      name: "inputText",
      type: "string",
      fieldset: "subscribe",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title }) {
      return {
        title: "Hero Section",
        subtitle: title,
      };
    },
  },
};
