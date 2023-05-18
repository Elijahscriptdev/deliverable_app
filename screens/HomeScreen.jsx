import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className='bg-white'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View>
        <View className='flex-row space-x-2 bg-gray-200 p-3'>
          {/* <SearchIcon /> */}
          <TextInput
            placeholder='Restaurant and cuisines'
            keyboardType='default'
          />
        </View>

        {/* <AdjustmentsIcon color="#00CCBB" /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
