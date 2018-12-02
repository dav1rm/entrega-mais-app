import React, { Component } from "react";

import { Text } from "react-native";

export default class MyWallet extends Component {
  static navigationOptions = {
    title: "MyWallet",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return <Text>Tela de MyWallet</Text>;
  }
}
