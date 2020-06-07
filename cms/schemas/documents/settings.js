import { MdSettings } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default {
  name: "settings",
  type: "document",
  title: "Settings",
  icon: MdSettings,
  fieldsets: [
    {
      title: "Social Links",
      name: "socialLinks",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Banner",
      name: "banner",
      type: "banner",
      description: "Set a banner for alerting users to something new.",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "socialLinks",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "socialLinks",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "socialLinks",
    },
  ],
};
