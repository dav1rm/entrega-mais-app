import React, { Component } from "react";

import { Text, TextInput } from "react-native";

import { Container, Content, Card, CardItem } from "native-base";

import Button from "../../../componentes/Button";
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
            <TextInput
              autoFocus={true}
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Nome"
              onSubmitEditing={() => this.emailInput.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="Email"
              onSubmitEditing={() => this.passwordInput.focus()}
              ref={input => (this.emailInput = input)}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="Senha"
              onSubmitEditing={() => this.repeatPasswordInput.focus()}
              ref={input => (this.passwordInput = input)}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              returnKeyType="done"
              autoCapitalize="none"
              placeholder="Repetir Senha"
              ref={input => (this.repeatPasswordInput = input)}
            />
            <Button title="SALVAR" />
            <CardItem />
          </Card>
        </Content>
      </Container>
    );
  }
}
