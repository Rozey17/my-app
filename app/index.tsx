import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
    <View className="p-5 space-y-5">
      <Text className="text-xl">Indispensable, meilleures ventes...</Text>
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri: "https://static.nike.com/a/images/w_300,c_limit/2e20a745-d9be-4d82-8cad-0c55d115fbb3/que-la-saison-des-cadeaux-commence-nike-com.png",
          }}
          className="w-40 h-40 rounded-md"
        />
        <Image
          source={{
            uri: "https://media.gqmagazine.fr/photos/64551119ce0c708b2278c458/4:3/w_5120,h_3840,c_limit/chris-henry-tV8yaU09t7w-unsplash.jpg",
          }}
          className="w-40 h-40 rounded-md"
        />
      </View>
    </View>
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
      initialLayout={{ width: layout.width }}
    />
  );
}
