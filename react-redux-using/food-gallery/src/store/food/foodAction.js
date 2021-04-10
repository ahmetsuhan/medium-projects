import { FoodActionTypes } from "./foodTypes";
import axios from "axios";
export const setDefaultFoods = (payload) => {
  return {
    type: FoodActionTypes.SET_DEFAULT_FOODS,
    payload,
  };
};
const apiId = process.env.REACT_APP_ID;
const apiKey = process.env.REACT_APP_KEY;
export const getDefaultFoods = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=garlic&app_id=${apiId}&app_key=${apiKey}`
    );
    dispatch(setDefaultFoods(response.data.hints));
  };
};

export const setSearchedFoods = (payload) => {
  return {
    type: FoodActionTypes.SET_SEARCHED_FOODS,
    payload,
  };
};
export const getSearchedFoods = (value) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${value}&app_id=d20bb72f&app_key=e3fc4582a59252a462888ff437c1c41b`
    );
    dispatch(setSearchedFoods(res.data.hints));
  };
};
