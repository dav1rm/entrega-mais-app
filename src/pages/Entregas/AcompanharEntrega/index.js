import React, { Component } from "react";

import { View } from "react-native";

import Timeline from "react-native-timeline-listview";
import styles from "./styles";
import { Container, Content, Card, CardItem, Text, Icon } from "native-base";

export default class AcompanharEntrega extends Component {
  static navigationOptions = {
    title: "Acompanhar Entrega",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16
    }
  };

  renderDetail(rowData) {
    let titulo = <Text style={styles.fontTitle}>{rowData.titulo}</Text>;
    var time = null;
    if (rowData.data && !rowData.circleColor)
      time = (
        <View>
          <Text style={styles.fontSubtitle}>{rowData.data}</Text>
          <Text style={styles.fontSubtitle}>{rowData.descricao}</Text>
        </View>
      );

    return (
      <View style={styles.itemFeed}>
        {titulo}
        {time}
      </View>
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <View style={styles.titleItem}>
                <Text style={styles.fontTitle}>
                  {params.item.vendedor.endereco.bairro}
                </Text>
                <Icon
                  type="MaterialIcons"
                  style={styles.iconTitle}
                  name="near-me"
                />
                <Text style={styles.fontTitle}>
                  {params.item.endereco.bairro}
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <Timeline
                renderDetail={this.renderDetail}
                data={params.item.status}
                showTime={false}
                lineColor="#00963F"
                circleColor="#00963F"
                innerCircle="dot"
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
