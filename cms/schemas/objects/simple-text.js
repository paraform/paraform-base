export default {
  title: "Simple Text",
  name: "simpleText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
      },
    },
    {
      type: "embedHtml",
    },
  ],
};
