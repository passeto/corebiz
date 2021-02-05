import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import common from "./common/reducers";
import home from './Home/reducers';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
/*
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
     istanbul ignore next 
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}
*/
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    home,
    common,
    ...injectedReducers,
  });
}