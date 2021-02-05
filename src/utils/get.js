import { splitByDot } from "ramda-extension";

export default (obj, path, notSetValue) => {
  const needle = obj.getIn(splitByDot(path), notSetValue);

  if (needle === undefined) {
    console.warn("Needle was undefined", path);
    return notSetValue;
  }

  return needle.toJS ? needle.toJS() : needle;
};
