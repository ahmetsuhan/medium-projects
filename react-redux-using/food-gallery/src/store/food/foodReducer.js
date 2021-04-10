import { FoodActionTypes } from "./foodTypes";

const initialState = {
  foods: [],
};
export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FoodActionTypes.SET_DEFAULT_FOODS:
      return {
        ...state,
        foods: action.payload,
      };
    case FoodActionTypes.SET_SEARCHED_FOODS:
      return {
        ...state,
        foods: action.payload,
      };
    default:
      return state;
  }
};
