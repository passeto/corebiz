import { types, async } from "../utils/type-creator";

export default types(
  [...async("LIST"), ...async("NEWSLETTER")],
  "PRODUCT"
);
