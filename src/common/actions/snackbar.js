import types from "../types";

export const showSuccessSnackbar = (message) => {
  return (dispatch) => {
    dispatch({ type: types.SNACKBAR_SUCCESS, message });
  };
};

export const showFailSnackbar = (message) => {
  return (dispatch) => {
    dispatch({ type: types.SNACKBAR_ERROR, message });
  };
};

export const clearSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: types.SNACKBAR_CLEAR });
  };
};
