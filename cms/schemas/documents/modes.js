import { BsToggleOn } from "react-icons/bs";

export default {
  name: "modes",
  type: "document",
  title: "Modes",
  icon: BsToggleOn,
  fields: [
    {
      name: "mode",
      type: "array",
      title: "Add color modes",
      description: "The first mode in the list will be the default",
      of: [{ type: "mode" }],
    },
  ],
};
