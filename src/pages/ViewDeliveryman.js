import React, { Component } from "react";

import { Text } from "react-native";

export default class ViewDeliveryman extends Component {
  static navigationOptions = {
    headerTitle: "ViewDeliveryman",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return <Text>Tela de ViewDeliveryman</Text>;
  }
}
