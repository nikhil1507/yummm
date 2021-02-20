import React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function ({ placeholder, onChangeText, value, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <AntDesign
        style={{ marginRight: 10 }}
        size={30}
        name="search1"
        color={Colors.secondaryGray}
      />
      <TextInput
        selectionColor={Colors.blinkerColor}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name="arrowright"
          style={{ marginLeft: 10 }}
          size={30}
          color={Colors.blinkerColor}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGray,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    flex: 1,
  },
});
