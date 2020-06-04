import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { documents, objects, sections, custom } from "./schemas";

export default createSchema({
  name: "default",
  types: [...schemaTypes, ...objects, ...sections, ...documents, ...custom],
});
