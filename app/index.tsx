import { useRouter } from "expo-router";
import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

export default function TabViewExample() {
  const router = useRouter();

  return (
    <View className="p-5 bg-white">
      <Image
        source={{ uri: "https://stickair.com/20615-large_default/nike.jpg" }}
        className="w-10 h-10"
      />
    </View>
  );
}
