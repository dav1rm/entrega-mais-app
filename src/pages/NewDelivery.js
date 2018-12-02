import React, { Component } from "react";

import { Text } from "react-native";

export default class NewDelivery extends Component {
  static navigationOptions = {
    title: "NewDelivery",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return <Text>Tela de NewDelivery</Text>;
  }
}
