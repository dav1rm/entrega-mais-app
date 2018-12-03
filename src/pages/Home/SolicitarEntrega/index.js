import React, { Component } from "react";

import { Text, TextInput, View, TouchableOpacity } from "react-native";

import {
  Container,
  Content,
  Card,
  CardItem,
  Picker,
  Button,
  Item,
  Form,
  Right,
  Icon
} from "native-base";

//import Button from "../../../componentes/Button";
import styles from "./styles";

import { TextInputMask } from "react-native-masked-text";

export default class SolicitarEntrega extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Solicitar Entrega",
    headerRight: (
      <Right style={{ flex: 1 }}>
        <Button transparent>
          <Icon
            type="MaterialIcons"
            name="check"
            style={{ color: "#fff" }}
            onPress={() => navigation.navigate("EntregasDisponiveis")}
          />
        </Button>
      </Right>
    )
  });
  constructor(props) {
    super(props);
    this.state = {
      formaPagamento: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

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
            />
            <TextInputMask
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              placeholder="Telefone"
              onSubmitEditing={() => this.cepInput.getElement().focus()}
              ref={input => (this.telefoneInput = input)}
              type={"cel-phone"}
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
              />
              <TextInput
                style={[styles.input, { flex: 2 }]}
                keyboardType="default"
                returnKeyType="next"
                placeholder="Cidade"
                onSubmitEditing={() => this.ruaInput.focus()}
                ref={input => (this.cidadeInput = input)}
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Rua"
              onSubmitEditing={() => this.bairroInput.focus()}
              ref={input => (this.ruaInput = input)}
            />
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
              />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                keyboardType="numeric"
                returnKeyType="next"
                placeholder="Número"
                onSubmitEditing={() => this.complementoInput.focus()}
                ref={input => (this.numeroInput = input)}
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Complemento"
              onSubmitEditing={() => this.produtoInput.focus()}
              ref={input => (this.complementoInput = input)}
            />
            <Text style={styles.text}>Informações da entrega</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              placeholder="Produto"
              onSubmitEditing={() => this.valorInput.getElement().focus()}
              ref={input => (this.produtoInput = input)}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInputMask
                type={"money"}
                style={[styles.input, { marginRight: 10, flex: 1 }]}
                keyboardType="numeric"
                returnKeyType="done"
                placeholder="Valor"
                ref={input => (this.valorInput = input)}
                type={"money"}
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
          </Card>
        </Content>
      </Container>
    );
  }
}
