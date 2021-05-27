import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.push("Category Meals")}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
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
