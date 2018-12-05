import React, { Component } from "react";
import { View } from "react-native";

import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
  Icon,
  Button
} from "native-base";

import { TouchableWithoutFeedback } from "react-native";

import styles from "./styles";

export default class VisualizarEntrega extends Component {
  static navigationOptions = {
    title: "Visualizar Entrega",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };
  render() {
    const { params } = this.props.navigation.state;
    const {
      bairro,
      cidade,
      estado,
      cep,
      rua,
      numero
    } = params.item.vendedor.endereco;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem style={styles.title}>
              <Text style={styles.fontTitle}>Vendedor</Text>
            </CardItem>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("VisualizarPerfil")}
            >
              <CardItem>
                <Thumbnail source={{ uri: params.item.vendedor.imagem }} />
                <Body style={styles.info}>
                  <Text style={styles.fontTitle}>
                    {params.item.vendedor.name}
                  </Text>
                  <View style={styles.infoUser}>
                    <Icon
                      type="MaterialIcons"
                      style={styles.infoUserIcon}
                      name="phone"
                    />
                    <Text style={styles.infoUserText}>
                      {params.item.vendedor.telefone}
                    </Text>
                  </View>
                  <View style={styles.infoUser}>
                    <Icon
                      type="MaterialIcons"
                      style={styles.infoUserIcon}
                      name="location-on"
                    />
                    <Text style={styles.infoUserText}>
                      {rua}, {numero}, {bairro}, {cep}, {cidade} - {estado}
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </TouchableWithoutFeedback>
            <CardItem style={styles.title}>
              <Text style={styles.fontTitle}>Informações</Text>
            </CardItem>
            <CardItem style={styles.infoEntrega}>
              <View style={styles.infoUser}>
                <Icon
                  type="FontAwesome"
                  style={styles.infoEntregaIcon}
                  name="cube"
                />
                <Text style={styles.fontTitle}>
                  {params.item.produtos.nome}
                </Text>
              </View>
              <View style={styles.infoUser}>
                <Icon
                  type="FontAwesome"
                  style={styles.infoEntregaIcon}
                  name="money"
                />
                <Text style={styles.fontTitle}>R$ {params.item.valor}</Text>
              </View>
              <View style={styles.infoUser}>
                <Icon
                  type="MaterialCommunityIcons"
                  style={styles.infoEntregaIcon}
                  name="cancel"
                />
                <Text style={styles.fontTitle}>R$ {params.item.taxa}</Text>
              </View>
              <View style={styles.infoUser}>
                <Icon
                  type="MaterialIcons"
                  style={styles.infoEntregaIcon}
                  name="payment"
                />
                <Text style={styles.fontTitle}>
                  {params.item.forma_pagamento} Dinheiro
                </Text>
              </View>
              <View style={styles.infoUser}>
                <Icon
                  type="MaterialIcons"
                  style={styles.infoEntregaIcon}
                  name="date-range"
                />
                <Text style={styles.fontTitle}>21/10/2017</Text>
              </View>
            </CardItem>
            <CardItem style={styles.buttonEntrega}>
              <Button
                onPress={() => this.props.navigation.navigate("Entregas")}
                style={{ backgroundColor: "#F44336" }}
              >
                <Text>Aceitar Entrega</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
