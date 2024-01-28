import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs>
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
        name="tabTwo"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
