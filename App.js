import React from "react";
import Home from "./screens/Home";
// import { default as Details } from "./screens/RecepieDetails";
import Welcome from "./screens/Welcome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={}> </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
