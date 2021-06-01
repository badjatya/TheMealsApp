import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

const DefaultOpenSansText = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default DefaultOpenSansText;
