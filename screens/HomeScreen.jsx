import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center px-4 space-x-2'>
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
            <ChevronDownIcon size={10} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={20} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center px-4 pb-2 space-x-2'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          {/* <SearchIcon /> */}
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restaurant and cuisines'
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon size={20} color='#00CCBB' />
      </View>

      {/* body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
