const exportsArray = (exports) =>
  Object.entries(exports).map(([key, value]) => value);

export const documents = exportsArray(require("./documents"));
export const objects = exportsArray(require("./objects"));
export const sections = exportsArray(require("./sections"));
