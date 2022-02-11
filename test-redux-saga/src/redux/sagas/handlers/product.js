import { put, call } from "redux-saga/effects";
import { getProducts } from "../../../util/api";
import {
  getProductFailed,
  getProductSuccess,
} from "../../Shopping/shopping-actions";

export function* handlerProduct() {
  try {
    const response = yield call(getProducts);
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductFailed(error.message));
  }
}
