import React, { Component } from "react";

import { Text, View } from "react-native";

export default class Account extends Component {
  static navigationOptions = {
    title: "Criar Conta",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };
  render() {
    return (
      <View>
        <Text>Tela de Account</Text>
      </View>
    );
  }
}
