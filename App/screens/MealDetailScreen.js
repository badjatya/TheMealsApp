import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import { MEALS } from "../data/dummy-data";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    });
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Back" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

export default MealDetailScreen;
