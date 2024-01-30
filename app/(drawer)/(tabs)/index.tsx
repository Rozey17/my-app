import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { router } from "expo-router";
import UserSvg from "../../../assets/svg/person-2-svgrepo-com.svg";
import AllActionCards from "../../../src/components/AllActionCards";
import CheckWallets from "../../../src/components/CheckWallets";

const index = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9FE] ">
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

        {/* must be a component */}

        <View
          style={{
            borderRadius: 15,
            top: 80,
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
          className="flex-row items-center justify-between p-5 self-center bg-[#F9F9FE] absolute z-30"
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
          <View className="items-center justify-center w-16 h-16 rounded-full bg-slate-300">
            <UserSvg />
          </View>
        </View>
      </View>
      <View className="z-0 p-5 ">
        <CheckWallets />
        <AllActionCards />
      </View>
    </SafeAreaView>
  );
};

export default index;
