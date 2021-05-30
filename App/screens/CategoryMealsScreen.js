import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Platform, StatusBar } from "react-native";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
const CategoryMealScreen = ({ navigation, route }) => {
  const { catId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={() => alert("hii")}
      />
    );
  };

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

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryColor}
      />

      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default CategoryMealScreen;
