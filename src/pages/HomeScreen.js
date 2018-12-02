import React, { Component } from "react";

import {
  Container,
  Icon,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge,
  Text
} from "native-base";

import { FlatList, View } from "react-native";

export default class ViewDelivery extends Component {
  static navigationOptions = {
    title: "Entregas Disponíveis"
  };
  state = {
    entregas: [
      {
        id: 1,
        valor: "25.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Augusto Luan Santos",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Lagoa Nova",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 5,
          bairro: "Alecrim",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Desinfetante"
        },
        entregador: null
      },
      {
        id: 3,
        valor: "35.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Maria Rita de Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Igapó",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 5,
          bairro: "Alecrim",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Conjunto de cozinha"
        },
        entregador: null
      },
      {
        id: 4,
        valor: "7.50",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Felipe Camarão",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 3,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Máquina de lavar roupa"
        },
        entregador: null
      },
      {
        id: 2,
        valor: "20.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Fogão"
        },
        entregador: null
      },
      {
        id: 2,
        valor: "20.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Fogão"
        },
        entregador: null
      },
      {
        id: 2,
        valor: "20.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN"
        },
        produtos: {
          id: 1,
          nome: "Fogão"
        },
        entregador: null
      }
    ]
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.entregas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ListItem
                  avatar
                  onPress={() =>
                    this.props.navigation.navigate("ViewDelivery", { item })
                  }
                >
                  <Left>
                    <Thumbnail
                      source={{
                        uri: "https://www.w3schools.com/howto/img_avatar.png"
                      }}
                    />
                  </Left>
                  <Body>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#3A3A3A"
                        }}
                      >
                        {item.vendedor.endereco.bairro}
                      </Text>
                      <Icon
                        type="MaterialIcons"
                        style={{
                          fontSize: 12,
                          color: "#3A3A3A",
                          marginLeft: 3,
                          marginRight: 10
                        }}
                        name="near-me"
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#3A3A3A"
                        }}
                      >
                        {item.endereco.bairro}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 12, color: "#878787" }}>
                      {item.vendedor.name}
                    </Text>
                    <Badge
                      style={{
                        height: 18,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 3,
                        backgroundColor: "#F44336"
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "#fff" }}>
                        {item.produtos.nome.toUpperCase()}
                      </Text>
                    </Badge>
                  </Body>
                  <Right
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#00963F"
                      }}
                    >
                      R$ {item.valor}
                    </Text>
                  </Right>
                </ListItem>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
