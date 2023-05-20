import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const imgUrls = [
    "https://links.papareact.com/wru",
    "https://links.papareact.com/wru",
    "https://links.papareact.com/wru",
    "https://links.papareact.com/wru",
    "https://links.papareact.com/wru",
    "https://links.papareact.com/wru",
  ];

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Categoty cards */}

      {imgUrls.map((imgUrl, index) => (
        <CategoryCard key={index} title={index + 1} imgUrl={imgUrl} />
      ))}
    </ScrollView>
  );
};

export default Categories;