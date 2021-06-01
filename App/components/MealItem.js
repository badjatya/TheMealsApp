import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultOpenSansText from "./DefaultOpenSansText";

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
});

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity
        style={{ backgroundColor: "#ccc" }}
        onPress={props.onSelectMeal}
      >
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.imageBg}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultOpenSansText>{`${props.duration}m`}</DefaultOpenSansText>
          <DefaultOpenSansText>
            {props.complexity.replace(/\b\w/g, (l) => l.toUpperCase())}
          </DefaultOpenSansText>
          <DefaultOpenSansText>
            {props.affordability.replace(/\b\w/g, (l) => l.toUpperCase())}
          </DefaultOpenSansText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
