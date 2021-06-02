import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
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

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, SetIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name="save"
            size={25}
            style={{ paddingRight: 10, paddingTop: 5 }}
            color="#fff"
            onPress={() =>
              navigation.navigate("Categories", {
                glutenFree: isGlutenFree,
                lactoseFree: isLactoseFree,
                vegan: isVegan,
                vegetarian: isVegetarian,
              })
            }
          />
        );
      },
    });
  });

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
