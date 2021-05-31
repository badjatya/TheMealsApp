import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

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

const FavStackNavigator = createStackNavigator();
const FavStackNavigatorScreen = () => {
  return (
    <FavStackNavigator.Navigator>
      <FavStackNavigator.Screen name="Favorites" component={FavoritesScreen} />
    </FavStackNavigator.Navigator>
  );
};

const FavoriteBottomTab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <FavoriteBottomTab.Navigator
        activeColor="#fff"
        shifting="true"
        barStyle={{ backgroundColor: Colors.primaryColor }}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
        }}
      >
        <FavoriteBottomTab.Screen
          name="Home"
          component={MainStackScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
        <FavoriteBottomTab.Screen
          name="Favorites"
          component={FavStackNavigatorScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name="ios-star" size={25} color={tabInfo.color} />
              );
            },
          }}
        />
      </FavoriteBottomTab.Navigator>
    </NavigationContainer>
  );
};
