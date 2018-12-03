import React, { Component } from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Container } from "native-base";

import Button from "../../../componentes/Button";
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
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Email"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
          returnKeyType="done"
          placeholder="Senha"
          ref={input => (this.passwordInput = input)}
        />
        <Button title="ENTRAR" />
        <Button
          onPress={() => this.props.navigation.navigate("Register")}
          style="line"
          title="CRIAR CONTA"
        />
      </Container>
    );
  }
}
