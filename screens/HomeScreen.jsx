import React, { useEffect, useLayoutEffect } from "react";
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
import Feautured from "../components/Feautured";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "restaurant"]')
      .then((data) => console.log(data));
    // sanityClient
    //   .fetch(
    //     `
    // *[_type == "featured"]{
    //   ...,
    //   restaurant[]->{
    //     ...,
    //     dishes[]->
    //   }
    // }`
    //   )
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }, []);

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

        {/* Feautured */}
        <Feautured
          id='123'
          title='Feautured'
          description='Feautured restaurants'
        />

        {/* Tasty Discounts */}
        <Feautured
          id='1234'
          title='Tasty Discounts'
          description='Enjoy juicy discounts'
        />

        {/* Offers near you */}
        <Feautured
          id='12345'
          title='Offers near you'
          description='We have got you covered'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
