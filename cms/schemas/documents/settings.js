import { MdSettings } from "react-icons/md";

export default {
  name: "settings",
  type: "document",
  title: "Settings",
  icon: MdSettings,
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
  ],
};
