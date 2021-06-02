import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import Colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-Free</Text>
        <Switch
          value={isGlutenFree}
          onValueChange={(value) => setIsGlutenFree(value)}
          trackColor={{ true: "#ccc", false: "#ccc" }}
          thumbColor={Colors.primaryColor}
        />
      </View>
    </View>
  );
};

export default FiltersScreen;
