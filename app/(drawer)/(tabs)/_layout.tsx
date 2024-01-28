import { Feather, Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { padding: 5 } }}>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="profile"
        options={{
          title: "Profile",
          headerRight: () => {
            return <DrawerToggleButton tintColor="white" />;
          },
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#392F6B" },
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
