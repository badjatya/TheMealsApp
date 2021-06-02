import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import FilterSwitch from "../components/FilterSwitch";

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
});

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, SetIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        title="Gluten-Free"
        value={isGlutenFree}
        onChange={(value) => setIsGlutenFree(value)}
      />
      <FilterSwitch
        title="Lactose-Free"
        value={isLactoseFree}
        onChange={(value) => setIsLactoseFree(value)}
      />
      <FilterSwitch
        title="Vegan"
        value={isVegan}
        onChange={(value) => SetIsVegan(value)}
      />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        onChange={(value) => setIsVegetarian(value)}
      />
    </View>
  );
};

export default FiltersScreen;
