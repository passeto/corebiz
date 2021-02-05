import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "../types";

const INITIAL_STATE = fromJS({
  isLoading: false,
  products: [],
  messageNews: "",
});

const reducer = handleActions(
  {
    [types.LIST]: (state, { payload }) => state.set("isLoading", true),
    [types.LIST_FAIL]: (state, { payload }) => state.set("isLoading", false),
    [types.LIST_SUCCESS]: (state, { payload: response }) =>
      state.set("isLoading", false).set("products", response.data),
    [types.NEWSLETTER]: (state, { payload }) => state.set("isLoading", true),
    [types.NEWSLETTER_FAIL]: (state, { payload }) => state.set("isLoading", false),
    [types.NEWSLETTER_SUCCESS]: (state, { payload: response }) =>
      state.set("isLoading", false).set("message", response.data.message),
  },
  INITIAL_STATE
);

export default reducer;
