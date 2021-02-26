import React from "react";
import Colors from "../assets/Colors";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ({ name }) {
  return (
    <View
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/Images/burger.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={{ marginTop: 5, color: Colors.lightGray, fontSize: 17 }}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
