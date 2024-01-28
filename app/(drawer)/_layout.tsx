import { AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView style={{ backgroundColor: "#392F6B" }}>
      <DrawerItem
        icon={() => <AntDesign name="caretright" size={24} color="black" />}
        onPress={() => router.push("/")}
        label="some label"
      />
    </DrawerContentScrollView>
  );
};
export default function Layout() {
  return (
    <Drawer
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{ headerShown: false, drawerPosition: "right" }}
    />
  );
}
