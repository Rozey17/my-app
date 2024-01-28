import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="tabTwo"
      />
    </Tabs>
  );
}
