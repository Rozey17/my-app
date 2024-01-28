import { View, Text, Animated, StyleSheet } from "react-native";
import React from "react";

const Header_Max_Height = 120;
const Header_Min_Height = 60;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value }: any) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ["#181D31", "#678983"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderColor,
        },
      ]}
    >
      <Text style={styles.title}>Header Content</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: "#E6DDC4",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  subtitle: {
    color: "#181D31",
    fontWeight: "bold",
  },
});
export default DynamicHeader;
