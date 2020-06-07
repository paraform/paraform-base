import { GoArrowSmallDown, GoArrowUp } from "react-icons/go";

const React = require("react");

export default {
  name: "richText",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        {
          title: "Heading 1",
          value: "heading1",
          blockEditor: {
            render: ({ ...props }) => (
              <h1 {...props} style={{ fontSize: 32 }} />
            ),
          },
        },
        {
          title: "Heading 2",
          value: "heading2",
          blockEditor: {
            render: ({ ...props }) => (
              <h2 {...props} style={{ fontSize: 24 }} />
            ),
          },
        },
        {
          title: "Heading 3",
          value: "heading3",
          blockEditor: {
            render: ({ ...props }) => (
              <h3 {...props} style={{ fontSize: 20 }} />
            ),
          },
        },
        {
          title: "Heading 4",
          value: "heading4",
          blockEditor: {
            render: ({ ...props }) => (
              <h3 {...props} style={{ fontSize: 20 }} />
            ),
          },
        },
        {
          title: "Heading 5",
          value: "heading5",
          blockEditor: {
            render: ({ ...props }) => (
              <h3 {...props} style={{ fontSize: 20 }} />
            ),
          },
        },
        {
          title: "Heading 6",
          value: "heading6",
          blockEditor: {
            render: ({ ...props }) => (
              <h3 {...props} style={{ fontSize: 20 }} />
            ),
          },
        },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          {
            title: "Caption",
            value: "caption",
            blockEditor: {
              icon: GoArrowSmallDown,
              render: ({ ...props }) => (
                <span {...props} style={{ fontSize: 14 }} />
              ),
            },
          },
          {
            title: "Large",
            value: "large",
            blockEditor: {
              icon: GoArrowUp,
              render: ({ ...props }) => (
                <span {...props} style={{ fontSize: 18 }} />
              ),
            },
          },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            type: "object",
            name: "link",
            fields: [
              {
                name: "href",
                title: "Link To",
                type: "string",
              },
              {
                name: "external",
                title: "External Link",
                type: "boolean",
              },
              {
                name: "newTab",
                title: "Open in new tab?",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
  ],
};
