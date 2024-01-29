import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const profile = () => {
  return (
    <View className="p-5 space-y-5">
      <View
        style={{
          borderRadius: 12,
          backgroundColor: "#F9F9FE",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        }}
        className="flex-row items-center w-full p-5 space-x-4"
      >
        <View className="border-2 rounded-full border-[#FFAF30]">
          <View className="w-16 h-16 m-[2px] bg-black rounded-full" />
        </View>

        <View className="space-y-1">
          <Text
            style={{ fontFamily: "GilroySemiBold" }}
            className="text-[15px] capitalize"
          >
            ferrad makosso
          </Text>
          <Text style={{ fontFamily: "GilroyMedium" }} className="text-xs">
            ferrad.fm@gmail.com
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/screens/editProfile")}
            className="flex-row space-x-1"
          >
            <Text
              style={{ fontFamily: "GilroySemiBold" }}
              className="text-[#635BFE] text-[15px]"
            >
              Edit profile
            </Text>
            <Entypo name="chevron-right" size={18} color="#635BFE" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="rounded-lg p-3 bg-[#392F6B] flex-1 flex-row items-center justify-between  ">
          <Text
            className="text-xs text-white capitalize"
            style={{ fontFamily: "GilroyMedium" }}
          >
            number of wallets
          </Text>
          <Text
            style={{ fontFamily: "GilroyMedium" }}
            className="capitalize text-[#FFAF30] text-3xl"
          >
            3
          </Text>
        </View>
        <View className="flex-row items-center flex-1 ml-3 bg-[#635BFE] justify-between p-3 rounded-lg ">
          <View>
            <Text
              className="text-xs text-white capitalize"
              style={{ fontFamily: "GilroyMedium" }}
            >
              nbr of transactions
            </Text>
            <Text
              style={{ fontFamily: "GilroyMedium" }}
              className="text-xs text-white capitalize"
            >
              last 30 days
            </Text>
          </View>

          <Text
            style={{ fontFamily: "GilroyMedium" }}
            className="text-3xl text-white capitalize"
          >
            0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default profile;
