import React, { Component } from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Container, Content, Item } from "native-base";

import Button from "../../../componentes/Button";
import Input from "../../../componentes/Input";
import styles from "./style";

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.fieldLogo}>
          <Image
            style={styles.logo}
            source={require("../../../images/logo.png")}
          />
          <Text style={styles.textLogo}>Entrega+</Text>
        </View>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button title="ENTRAR" />
        <Button style="line" title="CRIAR CONTA" />
      </Container>
    );
  }
}
