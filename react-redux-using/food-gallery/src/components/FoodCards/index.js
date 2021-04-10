import React, { useEffect } from "react";

import FoodCard from "../FoodCard";
import { connect } from "react-redux";
import { getDefaultFoods } from "../../store/food/foodAction";

const FoodCards = ({ getInitialFoods, ...otherProps }) => {
  useEffect(() => {
    getInitialFoods();
  }, []);

  const foods = otherProps.foods;
  return (
    <div className="food-cards">
      {foods.map((item, index) => {
        return (
          <FoodCard key={index} label={item.food.label} img={item.food.image} />
        );
      })}
    </div>
  );
};

const mapDispatchToProps = {
  getInitialFoods: getDefaultFoods,
};
const mapStateToProps = (state) => state.food;

export default connect(mapStateToProps, mapDispatchToProps)(FoodCards);
