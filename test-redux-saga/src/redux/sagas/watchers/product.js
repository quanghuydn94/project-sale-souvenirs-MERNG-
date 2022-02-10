import { GET_PRODUCTS } from "../../Shopping/shopping-types";
import { put, takeLatest } from "redux-saga/effects";
import { handlerProduct } from "../handlers/product";

export function* productWatcher() {
  yield takeLatest(GET_PRODUCTS, handlerProduct);
}
