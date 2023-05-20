import { View, Text } from "react-native";
import React from "react";

const Feautured = ({ id, title, description }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Feautured;
