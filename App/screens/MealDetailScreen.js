import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
} from "react-native";

import DefaultOpenSansText from "../components/DefaultOpenSansText";

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
  title: {
    fontFamily: "open-sans-bold",
    paddingVertical: 10,
    fontSize: 19,
    marginHorizontal: 20,
  },
  list: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    fontFamily: "open-sans",
  },
});

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

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
      {selectedMeal.ingredients.map((ingredient, index) => (
        <Text style={styles.list} key={ingredient}>
          {`(${index + 1}) ${ingredient}`}
        </Text>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <Text style={styles.list} key={step}>
          {`(${index + 1}) ${step}`}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;
