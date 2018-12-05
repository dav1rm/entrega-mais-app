import React, { Component } from "react";

import { Text, View, Image, TextInput, AsyncStorage } from "react-native";
import { Container } from "native-base";

import { StackActions, NavigationActions } from "react-navigation";

import Button from "../../../componentes/Button";
import styles from "./styles";
import api from "../../../services/api";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: null
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@EntregaMais:token");
    if (token) {
      this.navigateToHome();
    }
  }

  handleInputEmail = email => {
    this.setState({ email });
  };

  handleInputPassword = password => {
    this.setState({ password });
  };

  handleLogin = async () => {
    try {
      const { email, password } = this.state;
      if (!email || !password) {
        this.setState({ message: "Preencha email e senha" });
        return;
      }

      const response = await api.post("/login", {
        email,
        password
      });
      console.log(response.data);

      const { token, user } = response.data;
      await AsyncStorage.multiSet([
        ["@EntregaMais:token", token],
        ["@EntregaMais:user", JSON.stringify(user)]
      ]);

      this.navigateToHome();
    } catch (err) {
      console.log(err);
      this.setState({ message: "Email ou senha incorretos" });
    }
  };

  navigateToHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Tabs" })]
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.fieldLogo}>
          <Image
            style={styles.logo}
            source={require("../../../images/logo.png")}
          />
          <Text style={styles.textLogo}>Entrega+</Text>

          {!!this.state.message && (
            <Text style={{ color: "#F44336" }}>{this.state.message}</Text>
          )}
        </View>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Email"
          onChangeText={this.handleInputEmail}
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
          returnKeyType="send"
          placeholder="Senha"
          onChangeText={this.handleInputPassword}
          ref={input => (this.passwordInput = input)}
          onSubmitEditing={() => this.handleLogin}
        />
        <Button title="ENTRAR" onPress={this.handleLogin} />
        <Button
          onPress={() => this.props.navigation.navigate("Register")}
          style="line"
          title="CRIAR CONTA"
        />
      </Container>
    );
  }
}
