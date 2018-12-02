import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Left,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
  Icon,
  Button
} from "native-base";

export default class ViewDelivery extends Component {
  static navigationOptions = {
    title: "Visualizar Entrega",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };
  render() {
    const { params } = this.props.navigation.state;
    const { bairro, cidade, estado } = params.item.vendedor.endereco;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Vendedor</Text>
            </CardItem>
            <CardItem>
              <Thumbnail
                source={{
                  uri: "https://www.w3schools.com/howto/img_avatar.png"
                }}
              />
              <Body
                style={{
                  paddingLeft: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A",
                    fontWeight: "bold"
                  }}
                >
                  {params.item.vendedor.name}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <Icon
                    type="MaterialIcons"
                    style={{
                      fontSize: 14,
                      color: "#3A3A3A",
                      marginRight: 3
                    }}
                    name="phone"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#3A3A3A"
                    }}
                  >
                    {params.item.vendedor.telefone}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <Icon
                    type="MaterialIcons"
                    style={{
                      fontSize: 14,
                      color: "#3A3A3A",
                      marginRight: 3
                    }}
                    name="location-on"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#3A3A3A"
                    }}
                  >
                    {bairro}, {cidade} - {estado}
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Informações</Text>
            </CardItem>
            <CardItem
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Icon
                  type="FontAwesome"
                  style={{
                    fontSize: 18,
                    color: "#3A3A3A"
                  }}
                  name="cube"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A"
                  }}
                >
                  {params.item.produtos.nome}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Icon
                  type="FontAwesome"
                  style={{
                    fontSize: 18,
                    color: "#3A3A3A"
                  }}
                  name="money"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A"
                  }}
                >
                  R$ {params.item.valor}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  style={{
                    fontSize: 18,
                    color: "#3A3A3A"
                  }}
                  name="cancel"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A"
                  }}
                >
                  R$ {params.item.taxa}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Icon
                  type="MaterialIcons"
                  style={{
                    fontSize: 18,
                    color: "#3A3A3A"
                  }}
                  name="payment"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A"
                  }}
                >
                  {params.item.forma_pagamento} Dinheiro
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Icon
                  type="MaterialIcons"
                  style={{
                    fontSize: 18,
                    color: "#3A3A3A"
                  }}
                  name="date-range"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3A3A3A"
                  }}
                >
                  21/10/2017
                </Text>
              </View>
            </CardItem>
            <CardItem
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button block primary>
                <Text>Aceitar Entrega</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
