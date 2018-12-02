import React, { Component } from "react";

import { Text, View } from "react-native";

class MeuPerfil extends Component {
  static navigationOptions = {
    title: "Meu Perfil",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };
  render() {
    return (
      <View>
        <Text>Tela de Perfil</Text>
      </View>
    );
  }
}
export default MeuPerfil;
