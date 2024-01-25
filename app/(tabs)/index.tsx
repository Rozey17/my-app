import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const index = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView className="">
      <View
        style={{
          paddingVertical: 15,
          height: 150,
          backgroundColor: "#392F6B",
          position: "relative",
        }}
      >
        <Text style={{ fontFamily: "GilroyRegular", color: "white" }}>
          lorem100
        </Text>
        <View
          style={{
            position: "absolute",
            borderRadius: 15,
            backgroundColor: "#F9F9FE",

            top: 70,
            alignSelf: "center",
            width: "90%",
            marginHorizontal: 15,
            height: 120,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          className="flex-row items-center justify-between p-5"
        >
          <View className="space-y-3">
            <Text>welcome</Text>
            <Text>user</Text>
            <Pressable android_ripple={{ color: "" }}>
              <Text>view profile</Text>
            </Pressable>
          </View>
          <View className="w-20 h-20 bg-black rounded-full"></View>
        </View>
      </View>
      <View className="p-5">
        <View style={{ overflow: "hidden", borderRadius: 8 }}>
          <Pressable
            className="flex-row h-16 mt-10 bg-[#392F6B]"
            style={{ overflow: "hidden", borderRadius: 8 }}
            android_ripple={{ color: "#3F405B" }}
          >
            <View className=" bg-[#635BFE] w-14 h-full p-3"></View>
            <View className="flex-row items-center justify-between flex-1 h-full p-3 pr-5">
              <View className="">
                <Text className="text-sm text-white">check your</Text>
                <Text
                  className="text-lg text-[#FFAF30]"
                  style={{
                    fontFamily: "GilroySemiBold",
                    fontSize: 15,
                    lineHeight: 20,
                  }}
                >
                  wallet balances
                </Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="white" />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
