import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ListRenderItem,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { router } from "expo-router";
import WalletSvg from "../../../assets/svg/wallet.svg";
import UserSvg from "../../../assets/svg/person-2-svgrepo-com.svg";
import DepositMoney from "../../../assets/svg/deposit-money.svg";
import RequestMoney from "../../../assets/svg/request-money.svg";
import SendMoney from "../../../assets/svg/sendMoney.svg";
import WithdrawMoney from "../../../assets/svg/withdraw.svg";
import TransactionCalculator from "../../../assets/svg/transactionCalculator.svg";
import Exchange from "../../../assets/svg/exchange.svg";
import OperationCards from "../../../src/components/OperationCards";

const index = () => {
  const { colors } = useTheme();
  const data = [
    {
      title: "deposit money",
      icon: <DepositMoney />,
      routeName: "/screens/deposit",
    },
    {
      title: "withdraw money",
      icon: <WithdrawMoney />,
      routeName: "/screens/withdrawMoney",
    },
    {
      title: "send money",
      icon: <SendMoney />,
      routeName: "/screens/sendMoney",
    },
    {
      title: "request money",
      icon: <RequestMoney />,
      routeName: "/screens/requestMoney",
    },
    {
      title: "exchange",
      icon: <Exchange />,
      routeName: "/screens/exchange",
    },
    {
      title: "transactions",
      icon: <TransactionCalculator />,
      routeName: "/screens/transactions",
    },
  ];

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View className="flex-1 h-24 overflow-hidden rounded-lg">
        <Pressable
          onPress={() => router.push(item.routeName)}
          className="items-center justify-center w-full h-full p-3 space-y-3 bg-white border rounded-lg border-sky-200"
          android_ripple={{ color: "#FFFFFF", borderless: false }}
        >
          {item.icon}
          <Text
            style={{
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

  return (
    <SafeAreaView className="">
      <View
        style={{
          paddingVertical: 15,
          height: 160,
          backgroundColor: "#392F6B",
          position: "relative",
        }}
      >
        <View className="flex-row items-center justify-end">
          <View className="flex-row items-center justify-between w-2/3">
            <View className="flex-row">
              <Text
                className="text-3xl text-white"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Light
              </Text>
              <Text
                className="text-3xl text-[#FFAF30]"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Pay
              </Text>
            </View>

            <DrawerToggleButton tintColor="white" />
          </View>
        </View>
        <View
          style={{
            borderRadius: 15,

            top: 80,

            width: "90%",
            marginHorizontal: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          className="flex-row items-center justify-between p-5 self-center bg-[#F9F9FE] absolute"
        >
          <View className="space-y-2">
            <Text style={{ fontFamily: "GilroyMedium" }} className="capitalize">
              welcome
            </Text>
            <Text
              style={{ fontFamily: "GilroySemiBold" }}
              className="text-[15px] capitalize"
            >
              ferrad makosso
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              className="flex-row space-x-1"
            >
              <Text
                style={{ fontFamily: "GilroySemiBold" }}
                className="text-[#635BFE] text-[15px] capitalize"
              >
                view profile
              </Text>
              <Entypo name="chevron-right" size={18} color="#635BFE" />
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center w-16 h-16 rounded-full bg-slate-300">
            <UserSvg />
          </View>
        </View>
      </View>
      <View className="p-5 ">
        <View
          className="h-16 mt-8 mb-4"
          style={{ overflow: "hidden", borderRadius: 8 }}
        >
          <Pressable
            className="flex-row  bg-[#392F6B]"
            style={{ borderRadius: 8 }}
            android_ripple={{ color: "#3F405B" }}
          >
            <View
              className=" bg-[#635BFE] w-16  flex-row items-center justify-center"
              style={{ borderRadius: 8 }}
            >
              <WalletSvg />
            </View>
            <View className="flex-row items-center justify-between flex-1 h-full p-3 pr-5">
              <View className="space-y-1">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "GilroyMedium",
                    fontSize: 11,
                  }}
                >
                  check your
                </Text>
                <Text
                  className="text-lg text-[#FFAF30]"
                  style={{
                    fontFamily: "GilroySemiBold",
                    fontSize: 15,
                    lineHeight: 20,
                  }}
                >
                  wallet balances
                </Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="white" />
              </View>
            </View>
          </Pressable>
        </View>
        <OperationCards />
        {/* <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{
            flexDirection: "row",
            gap: 12,
            paddingVertical: 7,
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default index;
