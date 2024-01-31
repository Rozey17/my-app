import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

type cardProps = {
  title: string;
  icon: any;
  routeName: any;
};

const ActionCard = ({ item }: { item: cardProps }) => {
  return (
    <View className="overflow-hidden flex-1 h-24 rounded-lg ">
      <Pressable
        onPress={() => router.push(item.routeName)}
        className="items-center justify-center p-3 bg-white rounded-lg border border-[#E7E5FF] h-full w-full space-y-5"
        // style={{
        //   alignItems: "center",
        //   justifyContent: "center",
        //   padding: 12,
        //   backgroundColor: "white",
        //   borderWidth: 1,
        //   borderColor: "#E7E5FF",
        //   borderRadius: 8,
        //   height: "100%",
        //   width: "100%",
        // }}
        android_ripple={{ color: "#E8E7EA", borderless: false }}
      >
        {item.icon}

        <Text
          className="capitalize"
          style={{
            fontFamily: "GilroySemiBold",
          }}
        >
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default ActionCard;
