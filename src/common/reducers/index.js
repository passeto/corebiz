import { combineReducers } from "redux-immutable";

export default combineReducers({
  snack: require("./snack").default,
});
