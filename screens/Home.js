import React, { useState } from "react";
import AppView from "../components/AppView";
import { useFonts } from "expo-font";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../assets/Colors";
import Card from "../components/Card";

export default function () {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const [value, setValue] = useState("");

  const handleChangeText = (text) => {
    setValue(text);
  };
  const handlePress = () => {
    console.log(value);
    setValue("");
  };

  if (!loaded) {
    return null;
  }

  return (
    <AppView style={{ padding: 10 }}>
      <AppText style={style.label}>What would you like to cook today ?</AppText>
      <AppInput
        placeholder="Search"
        onChangeText={handleChangeText}
        onPress={handlePress}
        value={value}
        style={style.input}
      />
      <View style={style.labelContainer}>
        <AppText
          style={{
            fontSize: 25,
            flex: 1,
            fontFamily: "MontserratBold",
          }}
        >
          Today's fresh recepies
        </AppText>
        <TouchableOpacity onPress={() => console.log("pressed")}>
          <Feather
            name="more-horizontal"
            style={{ marginLeft: 10 }}
            size={30}
            color={Colors.blinkerColor}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{ marginTop: 20 }}>
        <Card
          category="Breakfast"
          name="French toast with omlete"
          calories="120 Calories"
          time={"10 mins"}
          servings={"1 serving"}
        />
        <Card />
      </ScrollView>
    </AppView>
  );
}

const style = StyleSheet.create({
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: 40,
  },
  input: {
    marginVertical: 20,
  },
});
