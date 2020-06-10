import { MdInsertDriveFile } from "react-icons/md";

export default {
  name: "page",
  type: "document",
  title: "Pages",
  icon: MdInsertDriveFile,
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      type: "slug",
      title: "Slug",
      name: "slug",
      description: "The URL path of this page relative to the site domain",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "heroSection" },
        { type: "featureSection" },
        { type: "subscribeSection" },
        { type: "dividerSection" },
        { type: "testimonialSection" },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "ogImage",
      type: "image",
      title: "OG Image",
      description:
        "This image is used for when the page is linked in social media and texts",
      fieldset: "metadata",
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: `${pageTitle}`,
        subtitle: slug === "/" ? "/" : `/${slug}`,
      };
    },
  },
};
