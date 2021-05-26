import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
