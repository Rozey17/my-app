import { View, Text, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import WalletSvg from "../../assets/svg/wallet.svg";

const CheckWallets = () => {
  return (
    <View
      style={{
        overflow: "hidden",
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 32,
        height: 64,
      }}
    >
      <Pressable
        style={{
          borderRadius: 8,
          backgroundColor: "#392F6B",
          flexDirection: "row",
        }}
        android_ripple={{ color: "#3F405B" }}
      >
        <View
          style={{
            borderRadius: 8,
            backgroundColor: "#635BFE",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: 64,
          }}
        >
          <WalletSvg />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            flex: 1,
            height: "100%",
            padding: 12,
            paddingRight: 20,
          }}
        >
          <View className="space-y-1">
            <Text
              style={{
                color: "white",
                fontFamily: "GilroyMedium",
                fontSize: 11,
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              check your
            </Text>
            <Text
              style={{
                fontFamily: "GilroySemiBold",
                fontSize: 15,
                lineHeight: 20,
                color: "#FFAF30",
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
