import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Text,
} from "react-native";
import Colors from "../assets/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  category,
  name,
  calories,
  time,
  servings,
  onPress,
  source,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={source} style={styles.image} />
        <View style={styles.details}>
          <AppText
            style={{ fontSize: 17, color: Colors.turqoise, fontWeight: "bold" }}
          >
            {category}
          </AppText>
          <AppText numberOfLines={1}>{name}</AppText>
          <Text style={styles.calories}>{calories}</Text>
        </View>
        <View style={styles.additionals}>
          <Ionicons
            name="alarm-outline"
            color={Colors.secondaryGray}
            size={20}
          />
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
    </TouchableNativeFeedback>
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
    bottom: 40,
    padding: 10,
  },
  image: {
    position: "absolute",
    right: -20,
    top: 10,
    height: 100,
    width: 100,
  },
});
