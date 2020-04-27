import React from "react";
import Lottie from "../../../src/components/lottie";
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
            {data && <Lottie loop animationData={JSON.parse(data)} />}
          </div>
        ),
      };
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "data",
      type: "string",
    },
  ],
};
