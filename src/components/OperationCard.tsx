import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

type cardProps = {
  title: string;
  icon: any;
  routeName: any;
};

const OperationCard = ({ item }: { item: cardProps }) => {
  return (
    <View
      style={{
        flex: 1,
        height: 96,
        overflow: "hidden",
        borderRadius: 8,
        width: 96,
      }}
    >
      <Pressable
        onPress={() => router.push(item.routeName)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#e0f2fe",
          borderRadius: 8,
          height: "100%",
          width: "100%",
        }}
        android_ripple={{ color: "#FFFFFF", borderless: false }}
      >
        {item.icon}

        <Text
          style={{
            marginTop: 12,
            fontFamily: "GilroySemiBold",
            textTransform: "capitalize",
          }}
        >
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default OperationCard;
