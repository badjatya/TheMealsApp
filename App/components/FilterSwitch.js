import React from "react";
import { View, Switch, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import DefaultOpenSansText from "./DefaultOpenSansText";

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    marginVertical: 13,
  },
});

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultOpenSansText>{props.title}</DefaultOpenSansText>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: "#ccc", false: "#ccc" }}
        thumbColor={Colors.primaryColor}
      />
    </View>
  );
};

export default FilterSwitch;
