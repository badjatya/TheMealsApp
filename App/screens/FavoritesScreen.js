import React from "react";

import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(
    (meals) => meals.id === "m1" || meals.id === "m2"
  );

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
