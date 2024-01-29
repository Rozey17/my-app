import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { router } from "expo-router";
import AllActionCards from "../../../src/components/ActionCards";
import WalletSvg from "../../../svg/WalletSvg";

const index = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="">
      <View
        style={{
          paddingVertical: 15,
          height: 160,
          backgroundColor: "#392F6B",
          position: "relative",
        }}
      >
        <View className="flex-row items-center justify-end">
          <View className="flex-row items-center justify-between w-2/3">
            <View className="flex-row">
              <Text
                className="text-3xl text-white"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Light
              </Text>
              <Text
                className="text-3xl text-[#FFAF30]"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Pay
              </Text>
            </View>

            <DrawerToggleButton tintColor="white" />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            borderRadius: 15,
            backgroundColor: "#F9F9FE",
            top: 80,
            alignSelf: "center",
            width: "90%",
            marginHorizontal: 15,
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
          <View className="space-y-2">
            <Text style={{ fontFamily: "GilroyMedium" }} className="capitalize">
              welcome
            </Text>
            <Text
              style={{ fontFamily: "GilroySemiBold" }}
              className="text-[15px] capitalize"
            >
              ferrad makosso
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              className="flex-row space-x-1"
            >
              <Text
                style={{ fontFamily: "GilroySemiBold" }}
                className="text-[#635BFE] text-[15px] capitalize"
              >
                view profile
              </Text>
              <Entypo name="chevron-right" size={18} color="#635BFE" />
            </TouchableOpacity>
          </View>
          <View className="w-16 h-16 bg-black rounded-full"></View>
        </View>
      </View>
      <View className="p-5 ">
        <View
          className="h-16 mt-10 mb-4"
          style={{ overflow: "hidden", borderRadius: 8 }}
        >
          <Pressable
            className="flex-row  bg-[#392F6B]"
            style={{ borderRadius: 8 }}
            android_ripple={{ color: "#3F405B" }}
          >
            <View
              className=" bg-[#635BFE] w-16  flex-row items-center justify-center"
              style={{ borderRadius: 8 }}
            >
              <WalletSvg />
            </View>
            <View className="flex-row items-center justify-between flex-1 h-full p-3 pr-5">
              <View className="space-y-1">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "GilroyMedium",
                    fontSize: 11,
                  }}
                >
                  check your
                </Text>
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
        {/* <AllActionCards /> */}
      </View>
    </SafeAreaView>
  );
};

export default index;
