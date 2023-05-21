import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  title,
  short_description,
  imgUrl,
  genre,
  address,
  rating,
  dishes,
  long,
  lat,
  deliveryTime,
  deliveryCharges,
  priceRange,
  menu,
  reviews,
  photos,
  location,
  phone,
  website,
  openingHours,
  popularDishes,
  cuisines,
  paymentMethods,
  amenities,
  moreInfo,
  similarRestaurants,
  reviewsCount,
  photosCount,
  menuCount,
  ratingCount,
  bookmarked,
  liked,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-40 w-64 rounded'
      />
      <View className='px-3 pb-4'>
        <Text className='text-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1 mb-1'>
          {/* <Text className='text-sm text-gray-500'>{genre}</Text> */}
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-sm text-green-500'>
            {rating}
            <Text className=' text-gray-500'> * {genre}</Text>
          </Text>
        </View>

        <View className='flex-row items-center space-x-1 mb-1'>
          <MapPinIcon color='gray' opacity={0.4} size={20} />
          <Text className='text-xs text-gray-500'>{address}</Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <Text className='text-bold text-xs'>
            Delivery time
            <Text className='text-xs'> - {deliveryTime} minutes</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
