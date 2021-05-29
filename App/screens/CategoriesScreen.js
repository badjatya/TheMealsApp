import React from "react";
import { View, FlatList, StatusBar } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

// const styles = StyleSheet.create({

// });

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() =>
          props.navigation.navigate("Category Meals", {
            catId: itemData.item.id,
            catTitle: itemData.item.title,
          })
        }
      />
    );
  };

  return (
    <View>
      <StatusBar
        barStyle="light-content"
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
