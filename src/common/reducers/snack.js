import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "../types";

const INITIAL_STATE = fromJS({
  sucessSnackbarOpen: false,
  errorSnackbarOpen: false,
  successSnackbarMessage: "",
  failSnackbarMessage: "",
});

const reducer = handleActions(
  {
    [types.SNACKBAR_ERROR]: (state, { message }) =>
      state.set("errorSnackbarOpen", true).set("failSnackbarMessage", message),
    [types.SNACKBAR_SUCCESS]: (state, { message }) =>
      state
        .set("sucessSnackbarOpen", true)
        .set("successSnackbarMessage", message),
    [types.SNACKBAR_CLEAR]: (state, { payload }) =>
      state.set("sucessSnackbarOpen", false).set("errorSnackbarOpen", false),
  },
  INITIAL_STATE
);

export default reducer;
