import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

import { Container, Content, Card, CardItem, Header, Right } from "native-base";

import Button from "../../componentes/Button";
import styles from "./styles";

import api from "../../services/api";

import { TextInputMask } from "react-native-masked-text";

export default class Perfil extends Component {
  state = {
    cep: "",
    cidade: "",
    rua: "",
    bairro: "",
    estado: "",
    numero: "",
    complemento: ""
  };

  componentDidMount() {
    this.getEndereco();
  }

  getEndereco = async () => {
    try {
      const response = await api.get("/perfil");
      const { endereco } = response.data.vendedor;
      if (endereco) {
        this.setState({
          cep: endereco.cep,
          cidade: endereco.cidade,
          rua: endereco.rua,
          bairro: endereco.bairro,
          numero: endereco.numero,
          estado: endereco.estado,
          complemento: endereco.complemento
        });
      }
    } catch (err) {
      //alert(this.state.token);
      //alert(err);
    }
  };

  handleAtualizarEndereco = async () => {
    try {
      await api.post("/vendedor/endereco", this.state);
      alert("Endereço atualizado!");
    } catch (err) {
      alert("Falha ao atualizar endereço");
    }
  };

  zerarNavegation = () => {
    this.props.navigation.navigate("Login");
  };

  handleLogOut = () => {
    AsyncStorage.clear().then(() => {
      this.zerarNavegation();
    });
  };
  render() {
    return (
      <Container>
        <Content>
          <Header style={{ alignItems: "center", backgroundColor: "#0D3782" }}>
            <Text
              style={{
                color: "#fff",
                flex: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16
              }}
            >
              Atualizar Endereço
            </Text>
            <Right>
              <TouchableOpacity onPress={this.handleLogOut}>
                <Text style={{ color: "#fff" }}>Sair</Text>
              </TouchableOpacity>
            </Right>
          </Header>
          <Card style={styles.container}>
            <Text style={styles.text}>Por favor, preencha o seu endereço</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInputMask
                style={[styles.input, { marginRight: 10, flex: 1 }]}
                keyboardType="numeric"
                returnKeyType="next"
                placeholder="CEP"
                onSubmitEditing={() => this.cidadeInput.focus()}
                ref={input => (this.cepInput = input)}
                type={"zip-code"}
                onChangeText={text => this.setState({ cep: text })}
                value={this.state.cep}
              />
              <TextInput
                style={[styles.input, { flex: 2 }]}
                keyboardType="default"
                returnKeyType="next"
                placeholder="Cidade"
                onSubmitEditing={() => this.ruaInput.focus()}
                ref={input => (this.cidadeInput = input)}
                onChangeText={text => this.setState({ cidade: text })}
                value={this.state.cidade}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInput
                style={[styles.input, { marginRight: 10, flex: 5 }]}
                keyboardType="default"
                returnKeyType="next"
                placeholder="Rua"
                onSubmitEditing={() => this.estadoInput.focus()}
                ref={input => (this.ruaInput = input)}
                onChangeText={text => this.setState({ rua: text })}
                value={this.state.rua}
              />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                keyboardType="default"
                returnKeyType="next"
                placeholder="Estado"
                onSubmitEditing={() => this.bairroInput.focus()}
                ref={input => (this.estadoInput = input)}
                onChangeText={text => this.setState({ estado: text })}
                value={this.state.estado}
                maxLength={2}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInput
                style={[styles.input, { marginRight: 10, flex: 3 }]}
                keyboardType="default"
                returnKeyType="next"
                placeholder="Bairro"
                onSubmitEditing={() => this.numeroInput.focus()}
                ref={input => (this.bairroInput = input)}
                onChangeText={text => this.setState({ bairro: text })}
                value={this.state.bairro}
              />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                keyboardType="numeric"
                returnKeyType="next"
                placeholder="Número"
                onSubmitEditing={() => this.complementoInput.focus()}
                ref={input => (this.numeroInput = input)}
                onChangeText={text => this.setState({ numero: text })}
                value={this.state.numero}
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="send"
              placeholder="Complemento"
              onSubmitEditing={this.handleAtualizarEndereco}
              ref={input => (this.complementoInput = input)}
              onChangeText={text => this.setState({ complemento: text })}
              value={this.state.complemento}
            />
            <Button title="Salvar" onPress={this.handleAtualizarEndereco} />
            <CardItem />
          </Card>
        </Content>
      </Container>
    );
  }
}
