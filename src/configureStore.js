import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { multiClientMiddleware } from "redux-axios-middleware";
//import loginReducer from "login/reducers";
import clients from "./utils/clients";

import createReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. thunk: Make actions able to be thunks
  // 2. routerMiddleware: Syncs the location/URL path to the state
  // 3. multiClientMiddleware: Makes axios work and habilitate multiple clients
  const middlewares = [thunk, multiClientMiddleware(clients)];

  if (process.env.NODE_ENV === "development") {
    const { createLogger } = require("redux-logger");
    const logger = createLogger({
      stateTransformer: (state) => state.toJS(),
      diff: true,
    });

    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta,
          // LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
