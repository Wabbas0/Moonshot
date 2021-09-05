import { applyMiddleware, createStore, Store } from "redux";

import thunk from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers";
import api from "../api";

export default (): Store => {
  const middlewares = [];

  // init thunk middleware
  const thunkMiddleware = thunk.withExtraArgument(api);
  middlewares.push(thunkMiddleware);

  // router middleware

  const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
