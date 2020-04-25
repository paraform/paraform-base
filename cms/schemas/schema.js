// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import { page } from "./documents";

// Object types
import { simpleText, embedHtml, feature } from "./objects";

// Sections
import { heroSection, featureSection } from "./sections";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Objects
    simpleText,
    embedHtml,
    feature,
    //Sections
    heroSection,
    featureSection,
    //Documents
    page,
  ]),
});