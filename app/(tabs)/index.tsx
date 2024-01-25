import {
  View,
  Text,
  Pressable,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import AllActionCards from "../../components/AllActionCards";

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
        <View className="items-center justify-center">
          <Image
            className="h-5 w-36"
            source={require("../../assets/images/pngegg.png")}
          />
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
      <View className="p-5 ">
        <View
          className="h-16 mt-10 mb-4"
          style={{ overflow: "hidden", borderRadius: 8 }}
        >
          <Pressable
            className="flex-row  bg-[#392F6B]"
            style={{ overflow: "hidden", borderRadius: 8 }}
            android_ripple={{ color: "#3F405B", borderless: false }}
          >
            <View
              className=" bg-[#635BFE] w-14 h-full p-3"
              style={{ borderRadius: 8 }}
            ></View>
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
        <AllActionCards />
      </View>
    </SafeAreaView>
  );
};

export default index;
