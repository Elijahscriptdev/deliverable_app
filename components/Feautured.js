import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const Featured = ({ id, title, description }) => {
  // id,
  //   title,
  //   short_description,
  //   imgUrl,
  //   genre,
  //   address,
  //   rating,
  //   dishes,
  //   long,
  //   lat,
  //   deliveryTime,
  //   deliveryCharges,
  //   priceRange,
  //   menu,
  //   reviews,
  //   photos,
  //   location,
  //   phone,
  //   website,
  //   openingHours,
  //   popularDishes,
  //   cuisines,
  //   paymentMethods,
  //   amenities,
  //   moreInfo,
  //   similarRestaurants,
  //   reviewsCount,
  //   photosCount,
  //   menuCount,
  //   ratingCount,
  //   bookmarked,
  //   liked,

  // npm create sanity@latest -- --template get-started --project zndxo7zf --dataset production --provider github
  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color='#00CCBB' />
      </View>
      <Text className='text-gray-500 text-sm px-4'>{description}</Text>

      <ScrollView
        className='pt-4'
        contentContainerStyle={{
          paddingHorizontal: 15,

        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id={123}
          title={"title"}
          short_description={"short_description"}
          imgUrl='https://links.papareact.com/wru'
          genre='Fast Food'
          address='123 Main Street'
          rating={4.5}
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
          deliveryTime={30}
          deliveryCharges={5}
          priceRange={2}
          menu={[]}
          reviews={[]}
          photos={[]}
          location='123 Main Street'
          phone='123-456-7890'
          website='https://www.google.com'
        />

        <RestaurantCard
          id={123}
          title={"title"}
          short_description={"short_description"}
          imgUrl='https://links.papareact.com/wru'
          genre='Fast Food'
          address='123 Main Street'
          rating={4.5}
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
          deliveryTime={30}
          deliveryCharges={5}
          priceRange={2}
          menu={[]}
          reviews={[]}
          photos={[]}
          location='123 Main Street'
          phone='123-456-7890'
          website='https://www.google.com'
        />

        <RestaurantCard
          id={123}
          title={"title"}
          short_description={"short_description"}
          imgUrl='https://links.papareact.com/wru'
          genre='Fast Food'
          address='123 Main Street'
          rating={4.5}
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
          deliveryTime={30}
          deliveryCharges={5}
          priceRange={2}
          menu={[]}
          reviews={[]}
          photos={[]}
          location='123 Main Street'
          phone='123-456-7890'
          website='https://www.google.com'
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
