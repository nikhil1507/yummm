import React, { useState, useEffect } from "react";
import AppView from "../components/AppView";
import { useFonts } from "expo-font";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../assets/Colors";
import Card from "../components/Card";
import Tag from "../components/Tag";

export default function ({ navigation }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const [fresh, setFresh] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const [value, setValue] = useState("");

  useEffect(() => {
    getData();
    getRecommend();
  }, []);

  const getData = async () => {
    await fetch("http://10.0.2.2:5000/api/freshRecepie")
      .then((res) => res.json())
      .then((data) => {
        setFresh(data);
      });
  };

  const getRecommend = async () => {
    await fetch("http://10.0.2.2:5000/api/recommended")
      .then((res) => res.json())
      .then((data) => {
        setRecommend(data);
      });
  };

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={{ height: "auto" }}>
          <ScrollView
            horizontal
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
          >
            {fresh.map((i) => (
              <Card
                key={i.recepieDetails.todayFresh[0]._id}
                category={i.recepieDetails.todayFresh[0].foodType}
                name={i.recepieDetails.todayFresh[0].dishName}
                calories={i.recepieDetails.todayFresh[0].calories}
                time={i.recepieDetails.todayFresh[0].time}
                servings={i.recepieDetails.todayFresh[0].serving}
                source={{
                  uri: i.recepieDetails.todayFresh[0].image,
                }}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: i.recepieDetails.todayFresh[0]._id,
                    recepie: i.recepieDetails.todayFresh[0].recepie,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
        <View style={style.labelContainer}>
          <AppText
            style={{
              fontSize: 25,
              flex: 1,
              fontFamily: "MontserratBold",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Recommmended
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
        {recommend.map((i) => (
          <Tag
            key={i.recepieDetails.recommended[0]._id}
            category={i.recepieDetails.recommended[0].foodType}
            name={i.recepieDetails.recommended[0].dishName}
            calories={i.recepieDetails.recommended[0].calories}
            time={i.recepieDetails.recommended[0].time}
            servings={i.recepieDetails.recommended[0].serving}
            source={{
              uri: i.recepieDetails.recommended[0].image,
            }}
            onPress={() =>
              navigation.navigate("Details", {
                id: i.recepieDetails.recommended[0]._id,
                recepie: i.recepieDetails.recommended[0].recepie,
              })
            }
          />
        ))}
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
