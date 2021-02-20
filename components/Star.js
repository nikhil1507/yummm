import React from "react";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../assets/Colors";
import { TouchableOpacity } from "react-native";

export default function ({ onPress, name }) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name={name} color={Colors.starColor} />
      </TouchableOpacity>
    </>
  );
}
