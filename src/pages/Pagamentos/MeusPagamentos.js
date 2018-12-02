import React, { Component } from "react";

import { Text } from "react-native";

export default class MeusPagamentos extends Component {
  static navigationOptions = {
    title: "Meus Pagamentos",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return <Text>Tela de Meus Pagamentos</Text>;
  }
}
