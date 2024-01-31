import { View, Text, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import WalletSvg from "../assets/svg/wallet.svg";

const CheckWallets = () => {
  return (
    <View className="h-16 mt-8 mb-4 overflow-hidden rounded-lg">
      <Pressable
        className="flex-row rounded-lg bg-[#392F6B]"
        android_ripple={{ color: "#3F405B" }}
      >
        <View className="rounded-lg bg-[#635BFE] items-center justify-center w-16">
          <WalletSvg />
        </View>
        <View className="flex-row items-center justify-between flex-1 p-3 pr-5">
          <View className="space-y-1">
            <Text
              className="text-white text-[11px]"
              style={{
                fontFamily: "GilroyMedium",
              }}
            >
              check your
            </Text>
            <Text
              className="text-[#FFAF30] text-[15px]"
              style={{
                fontFamily: "GilroySemiBold",
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
  );
};

export default CheckWallets;
