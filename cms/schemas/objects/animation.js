import React from "react";
import Lottie from "../../src/components/lottie";
import { MdPlayCircleOutline } from "react-icons/md";

export default {
  title: "Animation",
  name: "animation",
  type: "document",
  icon: MdPlayCircleOutline,
  preview: {
    select: {
      title: "name",
      data: "data",
    },
    prepare({ title, data }) {
      return {
        title: title,
        subtitle: "",
        description: "",
        media: () => (
          <div style={{ background: "white" }}>
            {data && <Lottie data={JSON.parse(data)} />}
          </div>
        ),
      };
    },
  },
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Data",
      name: "data",
      type: "string",
    },
  ],
};
