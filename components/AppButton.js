import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../assets/Colors";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function ({ onPress }) {
  const [loaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Ionicons
          name="ios-fast-food-outline"
          size={50}
          style={{ marginRight: 10 }}
          color="black"
        />
        <Text style={styles.label}>Take Off!</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.secondaryGray,
    borderRadius: 10,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 20,
  },
  label: {
    fontFamily: "MontserratBold",
    fontSize: 20,
  },
});
