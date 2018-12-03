import React, { Component } from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem } from "native-base";

import Button from "../../../componentes/Button";
import Input from "../../../componentes/Input";
import styles from "./style";

export default class Register extends Component {
  static navigationOptions = {
    title: "Criar Conta",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.container}>
            <Text style={styles.text}>Informe seus dados</Text>
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Repetir Senha" />
            <Button title="SALVAR" />
            <CardItem />
          </Card>
        </Content>
      </Container>
    );
  }
}
