import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const Featured = ({ id, title, description }) => {
  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-4'
      >
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color='#00CCBB' />
      </View>
      <Text
      className='text-gray-500 text-sm px-4'
      >{description}</Text>
    </View>
  );
};

export default Featured;
