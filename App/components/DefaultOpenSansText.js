import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: "#000",
  },
});

const DefaultOpenSansText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default DefaultOpenSansText;
