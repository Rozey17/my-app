import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";

const editProfile = () => {
  const { colors } = useTheme();
  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        className="relative p-6 "
      >
        <View className="self-center"></View>
      </ScrollView>
      <View className="fixed bottom-0 p-5 bg-white border-t border-gray-200 ">
        <View className="flex-row items-center justify-between ">
          <TouchableOpacity onPress={() => router.back()} className={`flex-1`}>
            <Text
              className="text-center capitalize"
              style={{ fontFamily: "GilroySemiBold" }}
            >
              cancel
            </Text>
          </TouchableOpacity>
          <Pressable
            android_ripple={{ color: "#FFFFFF" }}
            className={`bg-[#FFAF30] py-4 px-8 flex-1 rounded-lg`}
          >
            <Text
              className="text-center capitalize"
              style={{ fontFamily: "GilroySemiBold" }}
            >
              save changes
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default editProfile;
