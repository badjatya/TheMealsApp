import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import CustomHeaderIcon from "../components/CustomHeaderIcon";

import Colors from "../constants/colors";

const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
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
          headerLeft: () => {
            return (
              <Icon
                name="ios-menu"
                size={30}
                style={{ paddingLeft: 10, paddingTop: 5 }}
                color="#fff"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
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
                title="Favorite"
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
const FavStackNavigatorScreen = ({ navigation }) => {
  return (
    <FavStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <FavStackNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerLeft: () => {
            return (
              <Icon
                name="ios-menu"
                size={30}
                style={{ paddingLeft: 10, paddingTop: 5 }}
                color="#fff"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
    </FavStackNavigator.Navigator>
  );
};

const FavoriteBottomTab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const FavoriteBottomTabScreen = () => {
  return (
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
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <FavoriteBottomTab.Screen
        name="Favorites"
        component={FavStackNavigatorScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </FavoriteBottomTab.Navigator>
  );
};

// TODO: Hamburger Menu

const FilterStackNavigator = createStackNavigator();
const FilterStackNavigatorScreen = ({ navigation }) => {
  return (
    <FilterStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <FilterStackNavigator.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: "Filters",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
          headerLeft: () => {
            return (
              <Icon
                name="ios-menu"
                size={30}
                style={{ paddingLeft: 10, paddingTop: 5 }}
                color="#fff"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
    </FilterStackNavigator.Navigator>
  );
};

const HamburgerDrawer = createDrawerNavigator();

const HamburgerDrawerScreen = () => {
  return (
    <HamburgerDrawer.Navigator>
      <HamburgerDrawer.Screen name="Home" component={FavoriteBottomTabScreen} />
      <HamburgerDrawer.Screen
        name="Filter"
        component={FilterStackNavigatorScreen}
      />
    </HamburgerDrawer.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <HamburgerDrawerScreen />
    </NavigationContainer>
  );
};
