import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
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
        <Image style={styles.image} source={source} />
        <View style={styles.details}>
          <AppText
            style={{ fontSize: 17, color: Colors.turqoise, fontWeight: "bold" }}
          >
            {category}
          </AppText>
          <AppText numberOfLines={1}>{name}</AppText>
          <Text style={styles.calories}>{calories}</Text>
          <View style={styles.additionals}>
            <Ionicons
              name="alarm-outline"
              color={Colors.secondaryGray}
              size={20}
            />
            <Text
              style={{ fontSize: 15, color: Colors.secondaryGray, flex: 1 }}
            >
              {time}
            </Text>
            <Ionicons
              name="restaurant-outline"
              color={Colors.secondaryGray}
              size={20}
              style={{ marginLeft: 5 }}
            />
            <Text style={{ fontSize: 15, color: Colors.secondaryGray }}>
              {servings}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  additionals: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  calories: {
    marginBottom: 10,
    color: Colors.orange,
  },
  container: {
    height: 120,
    width: "100%",
    backgroundColor: Colors.primaryGray,
    borderRadius: 10,
    marginRight: 25,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  details: {
    position: "absolute",
    right: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
