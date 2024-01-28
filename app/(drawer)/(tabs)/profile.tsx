import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View className="py-5">
      <View
        style={{
          borderRadius: 12,
          backgroundColor: "#F9F9FE",
          alignSelf: "center",
          width: "90%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        }}
        className="flex-row items-center p-5 space-x-4"
      >
        <View className="border-2 rounded-full">
          <View className="w-16 h-16 m-[2px] bg-black rounded-full" />
        </View>

        <View className="">
          <Text>ferrad makosso</Text>
          <Text>ferrad.fm@gmail.com</Text>
          <TouchableOpacity>
            <Text>edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default profile;
