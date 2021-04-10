import { combineReducers } from "redux";
import { foodReducer } from "./food/foodReducer";

export const rootReducer = combineReducers({
  food: foodReducer,
});
