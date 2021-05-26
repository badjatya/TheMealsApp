import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <MainStack.Screen name="Categories" component={CategoriesScreen} />
      <MainStack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <MainStack.Screen name="Meal Details" component={MealDetailScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};
