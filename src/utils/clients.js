import axios from "axios";

console.log(`Using ${process.env.REACT_APP_API} as default api client`);

export default {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_API,
      responseType: "json",
    }),
    options: {
      returnRejectedPromiseOnError: true,
      interceptors: {
        request: [
          ({ getState }, config) => {
            return {
              ...config,
              headers: {
                ...(config.headers || {}),
                //Authorization: auth.token ? `Bearer ${auth.token}` : undefined,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            };
          },
        ],
        response: [
          {
            success: (store, response) => response,
            error: ({ dispatch }, error) => {
              if (error.response && error.response.data.status === 401) {
                dispatch(console.log('sdsd'));
              }

              console.error(error);
              return Promise.reject(error);
            },
          },
        ],
      },
    },
  },
};
