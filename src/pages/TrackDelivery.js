import React, { Component } from "react";

import { Text } from "react-native";

export default class TrackDelivery extends Component {
  static navigationOptions = {
    title: "TrackDelivery",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return <Text>Tela de TrackDelivery</Text>;
  }
}
