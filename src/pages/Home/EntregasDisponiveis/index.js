import React, { Component } from "react";
import { FlatList, View } from "react-native";

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
  Text,
  Button
} from "native-base";

import styles from "./styles";
import api from "../../../services/api";

export default class EntregasDisponiveis extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Entregas Disponíveis",
    headerRight: (
      <Right>
        <Button transparent>
          <Icon
            name="add"
            style={{ color: "#fff" }}
            onPress={() => navigation.navigate("SolicitarEntrega")}
          />
        </Button>
      </Right>
    )
  });
  state = {
    entregas: [
      {
        id: 1,
        valor: "25.00",
        taxa: "15.30",
        vendedor: {
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Augusto Luan Santos",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Lagoa Nova",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 5,
          bairro: "Alecrim",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Joaquim Fagundes",
          numero: "02"
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
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Maria Rita de Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Igapó",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 5,
          bairro: "Alecrim",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Marajoara",
          numero: "15"
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
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Felipe Camarão",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 3,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Marajoara",
          numero: "15"
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
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Marajoara",
          numero: "15"
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
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Marajoara",
          numero: "15"
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
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL1IusmMFVKhSBXSw4KlvfEJBTpR_QSuDr3-XqEDjI3R-Pzt",
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          endereco: {
            id: 5,
            bairro: "Candelária",
            cidade: "Natal",
            estado: "RN",
            cep: "59115-475",
            rua: "Rua Marajoara",
            numero: "15"
          }
        },
        endereco: {
          id: 5,
          bairro: "Tirol",
          cidade: "Natal",
          estado: "RN",
          cep: "59115-475",
          rua: "Rua Marajoara",
          numero: "15"
        },
        produtos: {
          id: 1,
          nome: "Fogão"
        },
        entregador: null
      }
    ]
  };

  // componentDidMount() {
  //   this.getEntregasDisponiveis();
  // }

  // getEntregasDisponiveis = async () => {
  //   const response = await api.get("/entregas/disponiveis");
  //   // const { entregas } = response.data;
  //   this.setState({ entregas:response.data });
  // };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.entregas}
              keyExtractor={index => index.toString()}
              renderItem={({ item }) => (
                <ListItem
                  avatar
                  onPress={() =>
                    this.props.navigation.navigate("VisualizarEntrega", {
                      item
                    })
                  }
                >
                  <Left>
                    <Thumbnail source={{ uri: item.vendedor.imagem }} />
                  </Left>
                  <Body>
                    <View style={styles.titleItem}>
                      <Text style={styles.fontTitle}>
                        {item.vendedor.endereco.bairro}
                      </Text>
                      <Icon
                        type="MaterialIcons"
                        style={styles.iconTitle}
                        name="near-me"
                      />
                      <Text style={styles.fontTitle}>
                        {item.endereco.bairro}
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={styles.fontSubtitle}>
                      {item.vendedor.name}
                    </Text>
                    <Badge style={styles.tagItem}>
                      <Text style={styles.tagText}>
                        {item.produtos.nome.toUpperCase()}
                      </Text>
                    </Badge>
                  </Body>
                  <Right style={styles.preco}>
                    <Text style={styles.precoText}>R$ {item.valor}</Text>
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
