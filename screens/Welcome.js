import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { default as View } from "../components/AppView";
import { default as Button } from "../components/AppButton";

export default function ({ navigation }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hey! </Text>
      <Text style={styles.label}>Welcome To Yummm! </Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/Images/welcome.png")}
          style={styles.logo}
        />
      </View>
      <Button onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imgContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 50,
    fontFamily: "Montserrat",
  },
  logo: {
    height: 400,
    width: 400,
  },
});
