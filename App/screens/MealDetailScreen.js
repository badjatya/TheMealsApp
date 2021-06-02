import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
} from "react-native";

import DefaultOpenSansText from "../components/DefaultOpenSansText";

import { MEALS } from "../data/dummy-data";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {},
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
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <DefaultOpenSansText>{`${selectedMeal.duration}m`}</DefaultOpenSansText>
        <DefaultOpenSansText>
          {selectedMeal.complexity.replace(/\b\w/g, (l) => l.toUpperCase())}
        </DefaultOpenSansText>
        <DefaultOpenSansText>
          {selectedMeal.affordability.replace(/\b\w/g, (l) => l.toUpperCase())}
        </DefaultOpenSansText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      <Text>List of Ingredients...</Text>

      <Text style={styles.title}>Steps</Text>
      <Text>List of Steps...</Text>
    </ScrollView>
  );
};

export default MealDetailScreen;
