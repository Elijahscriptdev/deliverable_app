import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const Featured = ({ id, title, description }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        <ArrowRightIcon size={20} color='#00CCBB' />
      </View>
      {/* <Text>{description}</Text> */}
    </View>
  );
};

export default Featured;
