import { MdEmail } from "react-icons/md";

export default {
  type: "document",
  name: "subscribeSection",
  title: "Subscribe Section",
  icon: MdEmail,
  fieldsets: [
    {
      title: "Email Subscribe",
      name: "subscribe",
      options: { collapsible: true, collapsed: true },
    },
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
      title: "Subheading",
      name: "subheading",
      type: "richText",
    },
    {
      title: "Appearance",
      name: "appearance",
      type: "section",
      fieldset: "appearance",
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
      title: "Flash Button",
      name: "flashButton",
      description: "Add a gradient to teh button for more attention",
      type: "boolean",
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
        title: "Subscribe Section",
        subtitle: title,
      };
    },
  },
};
