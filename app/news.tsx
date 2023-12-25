import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "white", paddingLeft: 20 }}>
    <Text>Tab One</Text>
  </ScrollView>
);
const SecondRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "white", paddingLeft: 20 }}>
    <Text>Tab Two</Text>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "white", paddingLeft: 20 }}>
    <Text>Tab 3</Text>
  </ScrollView>
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={"black"}
      inactiveColor={"#6b7280"}
      indicatorStyle={{
        backgroundColor: "black",
        width: 90,
        borderBottomWidth: 3,
      }}
      style={{
        backgroundColor: "white",
        marginLeft: 20,
        shadowColor: "transparent",
      }}
      tabStyle={{ width: 90, paddingBottom: 15 }}
      labelStyle={{ textTransform: "capitalize", fontSize: 16 }}
      pressColor="white"
      // indicatorContainerStyle={{
      //   width: Dimensions.get("screen").width,
      // }}
      // contentContainerStyle={{
      //   justifyContent: "center",
      // }}
    />
  );

  return (
    <TabView
      style={{ backgroundColor: "white" }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      // initialLayout={{ width: layout.width }}
    />
  );
}
