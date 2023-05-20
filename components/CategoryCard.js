import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { classNames } from "nativewind";

const CategoryCard = ({ imgUrl, title }) => {
  const cardClassName = classNames("bg-red-600");
  const imageClassName = classNames("h-20 w-20 rounded");

  return (
    <TouchableOpacity>
      <View className={cardClassName}>
        <Image
          className={imageClassName}
          source={{
            uri: imgUrl,
          }}
        />
        <Text>Testing {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

