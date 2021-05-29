import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  StatusBar,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const CategoryMealScreen = ({ navigation, route }) => {
  const { catId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

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
