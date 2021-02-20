import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ({ children, numberOfLines, style }) {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
