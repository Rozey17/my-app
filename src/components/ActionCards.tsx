import { View, Text, ListRenderItem, Pressable, FlatList } from "react-native";
import React from "react";

const AllActionCards = () => {
  const data = [1, 2, 3, 4, 5, 6];
  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View className="flex-1 h-20 overflow-hidden rounded-lg">
        <Pressable
          className="items-center justify-center w-full h-full space-y-5 border rounded-lg border-sky-200"
          android_ripple={{ color: "#FFFFFF", borderless: false }}
        >
          <Text>{item}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{
        flexDirection: "row",
        gap: 12,
        paddingVertical: 7,
      }}
    />
  );
};

export default AllActionCards;
