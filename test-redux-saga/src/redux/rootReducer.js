import { combineReducers } from "redux";
import { shopReducer } from "./Shopping/shopping-reducer";

export const rootReducer = combineReducers({
  shop: shopReducer,
});
