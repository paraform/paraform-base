import sanityClient from "@sanity/client";

const {
  api: { projectId },
} = require("../../../cms/sanity.json");

export default sanityClient({
  projectId,
  dataset: "production",
  useCdn: false,
});
