import { combineReducers } from "redux-immutable";

export default combineReducers({
  list: require("./list").default,
});
