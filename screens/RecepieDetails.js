import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import IngredientCard from "../components/IngredientCard";

export default function () {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/burger.jpg")}
        style={styles.hero}
      />

      <View style={styles.details}>
        <ScrollView>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was
          </Text>
          <Text style={[styles.label, { marginVertical: 10 }]}>
            Ingredients
          </Text>
          <View style={{ width: "100%", height: "auto" }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <IngredientCard />
              <IngredientCard />
              <IngredientCard />
            </ScrollView>
          </View>
          <Text style={[styles.label, { marginVertical: 10 }]}>Recepie</Text>

          {/* Recepie  */}

          <Text style={[styles.content, { marginBottom: 40 }]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was ook a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, nter
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was ook
            a galley of type and scrambled it to make a type specimen book. It
            has survived not only
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontSize: 15,
    marginVertical: 5,
  },
  details: {
    // backgroundColor: "black",
    height: 500,
    width: "100%",
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    position: "relative",
    top: -35,
    paddingHorizontal: 20,
    paddingVertical: 30,
    // transform: [{ rotateY: "20deg" }],
  },
  hero: {
    height: 350,
    width: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
  },
  label: {
    fontFamily: "MontserratBold",
    fontSize: 20,
  },
});
