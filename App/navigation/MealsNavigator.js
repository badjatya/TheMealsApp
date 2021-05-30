import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import CustomHeaderIcon from "../components/CustomHeaderIcon";

import Colors from "../constants/colors";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <MainStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        }}
      />
      <MainStack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <MainStack.Screen
        name="Meal Details"
        component={MealDetailScreen}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                iconName="ios-star-outline"
                title="Favourite"
                onPress={() => alert("Hello")}
              />
            </HeaderButtons>
          ),
        }}
      />
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
