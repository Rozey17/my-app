import { AntDesign } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import UserSvg from "../../assets/svg/person-2-svgrepo-com.svg";

const DrawerContentHeader = () => {
  return (
    <View className="bg-[#392F6B] -mt-1 flex-row items-center pl-[24px] py-[27px] pr-[70px]">
      <View className="flex-row items-center space-x-2">
        <View className="items-center justify-center w-16 h-16 rounded-full bg-slate-300">
          <UserSvg />
        </View>

        <View>
          <Text style={{ fontFamily: "GilroySemiBold" }} className="text-white">
            ferrad makosso
          </Text>
          <Text style={{ fontFamily: "GilroyMedium" }} className="text-white">
            ferrad.fm@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#2E2446",
        flex: 1,
        top: 0,
        bottom: 0,
        paddingTop: 0,
      }}
    >
      <DrawerContentHeader />
      <View className="flex-1 bg-[]">
        <DrawerItem
          icon={() => <AntDesign name="caretright" size={24} color="black" />}
          onPress={() => router.push("/")}
          label="some label"
          labelStyle={{
            color: "white",
          }}
          style={{ borderBottomColor: "white", borderBottomWidth: 0.6 }}
        />
        <DrawerItem
          icon={() => <AntDesign name="caretright" size={24} color="black" />}
          onPress={() => router.push("/")}
          label="some label"
          labelStyle={{ color: "white" }}
          style={{ borderBottomColor: "white", borderBottomWidth: 0.6 }}
        />
        <DrawerItem
          icon={() => <AntDesign name="caretright" size={24} color="black" />}
          onPress={() => router.push("/")}
          label="some label"
          labelStyle={{ color: "white" }}
          style={{ borderBottomColor: "white", borderBottomWidth: 0.6 }}
        />
        <DrawerItem
          icon={() => <AntDesign name="caretright" size={24} color="black" />}
          onPress={() => router.push("/")}
          label="some label"
          labelStyle={{ color: "white" }}
          style={{ borderBottomColor: "white", borderBottomWidth: 0.6 }}
        />
        <DrawerItem
          icon={() => <AntDesign name="caretright" size={24} color="black" />}
          onPress={() => router.push("/")}
          label="some label"
          labelStyle={{ color: "white" }}
          style={{ borderBottomColor: "white", borderBottomWidth: 0.6 }}
        />
      </View>
    </DrawerContentScrollView>
  );
};
export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerPosition: "right" }}
    />
  );
}
