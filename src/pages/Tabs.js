import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

import StackHome from "./StackHome";
import MyWallet from "./MyWalletScreen";
import StackEntregas from "./StackEntregas";
import Profile from "./ProfileScreen";

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons name="home" size={25} color={tintColor} />
          );
        }
      }
    },
    Entregas: {
      screen: StackEntregas,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="truck" size={25} color={tintColor} />
        )
      }
    },
    MyWallet: {
      screen: MyWallet,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="wallet" size={25} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Entregas",
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: "#0D295B",
      inactiveBackgroundColor: "#0D3782",
      activeTintColor: "#ffff",
      inactiveTintColor: "#ffff"
    }
  }
);
export default Tabs;
