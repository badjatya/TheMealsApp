import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "80%",
  },
  mealDetail: {
    padding: 10,
    justifyContent: "space-between",
  },
});

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <Text>{props.title}</Text>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{props.duration}</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
