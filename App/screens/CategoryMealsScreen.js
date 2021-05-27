import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
// import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const CategoryMealScreen = ({ navigation, params }) => {
  const catId = navigation.route.catId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <View style={{ marginBottom: 20 }} />
      <Button
        title="Go to MealDetails!"
        onPress={() => navigation.push("Meal Details")}
      />
      <View style={{ marginBottom: 20 }} />
      <Button title="Go back to Categories" onPress={() => navigation.pop()} />
    </View>
  );
};

export default CategoryMealScreen;
