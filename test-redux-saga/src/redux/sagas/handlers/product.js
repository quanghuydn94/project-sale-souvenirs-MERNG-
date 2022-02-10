import { put, call } from "redux-saga/effects";
import { getProducts } from "../../../graphql-client/queries";
import { getProductData } from "../../Shopping/shopping-actions";

export function* handlerProduct() {
  try {
    const data = yield call(getProducts);
    console.log(data);
    yield put(getProductData(data));
  } catch (error) {
    console.log("error");
  }
}
