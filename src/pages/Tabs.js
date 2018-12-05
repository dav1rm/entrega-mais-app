import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

import StackHome from "./StackHome";
import StackEntregas from "./StackEntregas";
import Perfil from "./Perfil/index";
import MeusPagamentos from "./Pagamentos/MeusPagamentos";

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
    MeusPagamentos: {
      screen: MeusPagamentos,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="wallet" size={25} color={tintColor} />
        )
      }
    },
    MeuPerfil: {
      screen: Perfil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
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
