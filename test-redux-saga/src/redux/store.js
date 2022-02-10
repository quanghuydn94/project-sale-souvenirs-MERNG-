import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./sagas";

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [
  logger,
  // , sagaMiddleware
];
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

// sagaMiddleware.run(rootSaga);
export default store;
