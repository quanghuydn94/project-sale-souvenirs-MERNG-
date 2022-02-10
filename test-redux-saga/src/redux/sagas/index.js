import { all } from "redux-saga/effects";
import { productWatcher } from "./watchers/product";

export function* rootSaga() {
  yield all([productWatcher()]);
}
