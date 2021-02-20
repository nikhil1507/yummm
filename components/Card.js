import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Colors from "../assets/Colors";
import AppText from "./AppText";
import Star from "./Star";
import { Ionicons } from "@expo/vector-icons";

export default function ({ category, name, calories, time, servings }) {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/fresh_recipe_1.png")}
        height={50}
        width={50}
        style={styles.image}
      />
      <View style={styles.details}>
        <AppText style={{ fontSize: 17, color: Colors.turqoise }}>
          {category}
        </AppText>
        <AppText numberOfLines={1}>{name}</AppText>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((star, i) => (
            <Star name="star" key={(Math.random() * 20) % 100.2393288} />
          ))}
        </View>
        <Text style={styles.calories}>{calories}</Text>
      </View>
      <View style={styles.additionals}>
        <Ionicons name="alarm-outline" color={Colors.secondaryGray} size={20} />
        <Text style={{ fontSize: 15, color: Colors.secondaryGray, flex: 1 }}>
          {time}
        </Text>
        <Ionicons
          name="restaurant-outline"
          color={Colors.secondaryGray}
          size={20}
        />
        <Text style={{ fontSize: 15, color: Colors.secondaryGray }}>
          {servings}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  additionals: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    bottom: 10,
    right: 10,
  },
  calories: {
    color: Colors.orange,
  },
  container: {
    height: 250,
    width: 200,
    backgroundColor: Colors.primaryGray,
    borderRadius: 10,
    marginRight: 25,
    padding: 10,
  },
  details: {
    position: "absolute",
    bottom: 50,
    padding: 10,
  },
  image: {
    position: "absolute",
    right: -20,
    top: 10,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    marginBottom: 10,
  },
});
