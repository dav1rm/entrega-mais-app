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
  Text
} from "native-base";

import styles from "./styles";

export default class MinhasEntregas extends Component {
  static navigationOptions = {
    title: "Minhas Entregas"
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
          imagem:
            "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Pierre-Lecetre.jpg",
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
        entregador: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          imagem:
            "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        },
        status: [
          {
            data: "Hoje às 07:00",
            titulo: "Entrega Pendente",
            atual: false,
            descricao:
              "A entrega foi solicitada e está aguardando a aprovação de um entregador."
          },
          {
            data: "Hoje às 07:32",
            titulo: "Entrega Aceita",
            atual: false,
            descricao:
              "A entrega foi aceita. O entregador deverá pegar o produto no endereço do vendedor."
          },
          {
            data: "Hoje às 08:40",
            titulo: "Envio Confirmado",
            atual: true,
            descricao:
              "O vendedor repassou o produto para o entregador. O produto está a caminho."
          },
          {
            data: "14:00",
            titulo: "Entrega Confirmada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O produto foi entregue ao cliente."
          },
          {
            data: "16:30",
            titulo: "Entrega Finalizada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O vendedor finalizou a entrega."
          }
        ]
      },
      {
        id: 3,
        valor: "35.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Maria Rita de Oliveira",
          telefone: "(84) 99810-1515",
          imagem:
            "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg",
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
        entregador: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          imagem:
            "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        },
        status: [
          {
            data: "Hoje às 11:15",
            titulo: "Entrega Pendente",
            atual: true,
            descricao:
              "A entrega foi solicitada e está aguardando a aprovação de um entregador."
          },
          {
            data: "Hoje às 07:32",
            titulo: "Entrega Aceita",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao:
              "A entrega foi aceita. O entregador deverá pegar o produto no endereço do vendedor."
          },
          {
            data: "Hoje às 08:40",
            titulo: "Envio Confirmado",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao:
              "O vendedor repassou o produto para o entregador. O produto está a caminho."
          },
          {
            data: "14:00",
            titulo: "Entrega Confirmada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O produto foi entregue ao cliente."
          },
          {
            data: "16:30",
            titulo: "Entrega Finalizada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O vendedor finalizou a entrega."
          }
        ]
      },
      {
        id: 4,
        valor: "7.50",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          imagem:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
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
        entregador: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          imagem:
            "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        },
        status: [
          {
            data: "Ontem às 9:20",
            titulo: "Entrega Pendente",
            atual: false,
            descricao:
              "A entrega foi solicitada e está aguardando a aprovação de um entregador."
          },
          {
            data: "Ontem às 07:32",
            titulo: "Entrega Aceita",
            atual: false,
            descricao:
              "A entrega foi aceita. O entregador deverá pegar o produto no endereço do vendedor."
          },
          {
            data: "Ontem às 08:40",
            titulo: "Envio Confirmado",
            atual: false,
            descricao:
              "O vendedor repassou o produto para o entregador. O produto está a caminho."
          },
          {
            data: "Ontem às 14:00",
            titulo: "Entrega Confirmada",
            atual: false,
            descricao: "O produto foi entregue ao cliente."
          },
          {
            data: "Ontem às 16:30",
            titulo: "Entrega Finalizada",
            atual: true,
            descricao: "O vendedor finalizou a entrega."
          }
        ]
      },
      {
        id: 2,
        valor: "20.00",
        taxa: "15.30",
        vendedor: {
          id: 5,
          name: "Fábio Anthony Pedro Oliveira",
          telefone: "(84) 99810-1515",
          imagem:
            "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
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
        entregador: {
          id: 5,
          name: "Lucilene de Araujo",
          telefone: "(84) 99810-1515",
          imagem:
            "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        },
        status: [
          {
            data: "Hoje às 11:15",
            titulo: "Entrega Pendente",
            atual: true,
            descricao:
              "A entrega foi solicitada e está aguardando a aprovação de um entregador."
          },
          {
            data: "Hoje às 07:32",
            titulo: "Entrega Aceita",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao:
              "A entrega foi aceita. O entregador deverá pegar o produto no endereço do vendedor."
          },
          {
            data: "Hoje às 08:40",
            titulo: "Envio Confirmado",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao:
              "O vendedor repassou o produto para o entregador. O produto está a caminho."
          },
          {
            data: "14:00",
            titulo: "Entrega Confirmada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O produto foi entregue ao cliente."
          },
          {
            data: "16:30",
            titulo: "Entrega Finalizada",
            atual: false,
            circleColor: "gray",
            lineColor: "gray",
            descricao: "O vendedor finalizou a entrega."
          }
        ]
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
              keyExtractor={index => index.toString()}
              renderItem={({ item }) => (
                <ListItem
                  avatar
                  onPress={() =>
                    this.props.navigation.navigate("AcompanharEntrega", {
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
                        {item.status.find(obj => obj.atual === true).titulo}
                      </Text>
                    </Badge>
                  </Body>
                </ListItem>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
