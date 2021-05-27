import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

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
        onPress={() =>
          props.navigation.push("Category Meals", {
            catId: itemData.item.id,
            catTitle: itemData.item.title,
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.primaryColor}
      />
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
