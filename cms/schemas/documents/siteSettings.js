import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  icon: MdSettings,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
  ],
};
