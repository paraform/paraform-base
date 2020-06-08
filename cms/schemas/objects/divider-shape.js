import React from "react";

export default {
  name: "dividerShape",
  type: "document",
  preview: {
    select: {
      title: "name",
      data: "data",
    },
    prepare({ title, data }) {
      return {
        title,
        subtitle: "",
        description: "",
        media: () => (
          <div style={{ width: "100%", height: "25%", background: "#555" }}>
            <svg
              viewBox="0 0 1200 40"
              width="40"
              height="10"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={data} fill="#bbb" />
            </svg>
          </div>
        ),
      };
    },
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "data",
      title: "Data",
      type: "string",
    },
  ],
  initialValue: {
    direction: "down",
  },
};
