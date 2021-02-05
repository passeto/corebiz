import types from '../types';
import {
  showSuccessSnackbar,
  showFailSnackbar,
} from "../../common/actions/snackbar";

export function getProducts() {
  return async (dispatch) => {
    return dispatch({
      type: types.LIST,
      payload: {
        request: {
          url: "products",
          method: "GET",
        },
      },
    })
  }
}

export function sendNewsletter(values) {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.NEWSLETTER,
      payload: {
        request: {
          url: "newsletter",
          method: "POST",
          data: values,
        },
      },
    })
      .then(async ({ payload }) => {
       console.log('Newsletter enviada', payload)
       dispatch(
        showSuccessSnackbar(
          "Sucesso! Você foi cadastrado em nossa newsletter"
        )
      );

      })
      .catch((error) => {
        if (error && error.response) {
            dispatch(
              showFailSnackbar(
                "Ocorreu um problema. Tente novamente, mais tarde."
              )
            );
          }
      });
  };
}