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
        <Image
          style={styles.logo}
          source={require("../assets/Images/google.png")}
        />
        <Text style={styles.label}>Take Off With Google!</Text>
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
