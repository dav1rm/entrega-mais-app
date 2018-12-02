import React, { Component } from "react";

import { Text, View } from "react-native";

export default class DetailDelivery extends Component {
  static navigationOptions = {
    title: "Detalhes da Entrega",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View>
        <Text>Tela de DetailDelivery</Text>
      </View>
    );
  }
}
