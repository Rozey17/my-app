import { ListRenderItem, FlatList } from "react-native";
import React from "react";
import DepositMoney from "../../assets/svg/deposit-money.svg";
import RequestMoney from "../../assets/svg/request-money.svg";
import SendMoney from "../../assets/svg/sendMoney.svg";
import WithdrawMoney from "../../assets/svg/withdraw.svg";
import TransactionCalculator from "../../assets/svg/transactionCalculator.svg";
import Exchange from "../../assets/svg/exchange.svg";
import ActionCard from "./ActionCard";

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
  return <ActionCard item={item} />;
};

const AllActionCards = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{
        flexDirection: "row",
        gap: 12,
        paddingVertical: 7,
      }}
    />
  );
};

export default AllActionCards;
