import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <View style={{ marginBottom: 20 }} />
      <Button
        title="Go to MealDetails!"
        onPress={() => props.navigation.push("Meal Details")}
      />
      <View style={{ marginBottom: 20 }} />
      <Button
        title="Go back to Categories"
        onPress={() => props.navigation.pop()}
      />
    </View>
  );
};

export default CategoryMealScreen;
