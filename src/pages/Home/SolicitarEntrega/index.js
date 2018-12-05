import React, { Component } from "react";

import { Text, TextInput, View, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Picker } from "native-base";

import styles from "./styles";
import Button from "../../../componentes/Button";

import { TextInputMask } from "react-native-masked-text";
import api from "../../../services/api";
export default class SolicitarEntrega extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Solicitar Entrega"
    // headerRight: (
    //   <Right style={{ flex: 1 }}>
    //     <Button onPress={this.handleSolicitarEntrega}>
    //       <Icon type="MaterialIcons" name="check" style={{ color: "#fff" }} />
    //     </Button>
    //   </Right>
    // )
  });
  state = {
    nome_cliente: "",
    telefone_cliente: "",
    cep: "",
    cidade: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    nome: "",
    valor: "",
    frete: "",
    formaPagamento: ""
  };

  handleSolicitarEntrega = async () => {
    console.log(this.state);
    try {
      const response = await api.post("/entrega/solicitar", this.state);
      console.log(response);
      alert("Entrega solicitada!");
      this.props.navigation.navigate("MinhasEntregas");
    } catch (err) {
      console.log(err);
      alert("Falha ao solicitar entrega");
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.container}>
            <Text style={styles.text}>Informações do destinatário</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Nome"
              onSubmitEditing={() => this.telefoneInput.getElement().focus()}
              ref={input => (this.nomeInput = input)}
              onChangeText={text => this.setState({ nome_cliente: text })}
              value={this.state.nome_cliente}
            />
            <TextInputMask
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              placeholder="Telefone"
              onSubmitEditing={() => this.cepInput.getElement().focus()}
              ref={input => (this.telefoneInput = input)}
              type={"cel-phone"}
              onChangeText={text => this.setState({ telefone_cliente: text })}
              value={this.state.telefone_cliente}
            />
            <Text style={styles.text}>Endereço</Text>
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
              returnKeyType="next"
              placeholder="Complemento"
              onSubmitEditing={() => this.produtoInput.focus()}
              ref={input => (this.complementoInput = input)}
              onChangeText={text => this.setState({ complemento: text })}
              value={this.state.complemento}
            />
            <Text style={styles.text}>Informações da entrega</Text>
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
                placeholder="Produto"
                onSubmitEditing={() => this.valorInput.getElement().focus()}
                ref={input => (this.produtoInput = input)}
                onChangeText={text => this.setState({ nome: text })}
                value={this.state.nome}
              />
              <TextInputMask
                style={[styles.input, { flex: 1 }]}
                type={"money"}
                keyboardType="numeric"
                returnKeyType="next"
                placeholder="Valor"
                onSubmitEditing={() => this.freteInput.getElement().focus()}
                ref={input => (this.valorInput = input)}
                onChangeText={text => this.setState({ valor: text })}
                value={this.state.valor}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInputMask
                style={[styles.input, { marginRight: 10, flex: 1 }]}
                type={"money"}
                keyboardType="numeric"
                returnKeyType="done"
                placeholder="Frete"
                ref={input => (this.freteInput = input)}
                type={"money"}
                onChangeText={text => this.setState({ frete: text })}
                value={this.state.frete}
              />
              <View style={[styles.input, { flex: 2 }]}>
                <Picker
                  selectedValue={this.state.formaPagamento}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ formaPagamento: itemValue })
                  }
                >
                  <Picker.Item label="Dinheiro" value="dinheiro" />
                  <Picker.Item label="Cédito" value="credito" />
                  <Picker.Item label="Débito" value="debito" />
                  <Picker.Item label="Pago" value="pago" />
                </Picker>
              </View>
            </View>
            <CardItem />
            <Button title="Solicitar" onPress={this.handleSolicitarEntrega} />
          </Card>
        </Content>
      </Container>
    );
  }
}
