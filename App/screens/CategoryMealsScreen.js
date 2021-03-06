import React, { useEffect } from "react";
import { Platform } from "react-native";

import { useSelector } from "react-redux";

import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const CategoryMealScreen = ({ navigation, route }) => {
  const { catId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    });
  }, [selectedCategory.title, navigation]);

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealScreen;
