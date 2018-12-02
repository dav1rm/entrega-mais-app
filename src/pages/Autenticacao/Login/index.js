import React, { Component } from "react";

import { Container, Header, Content, Input, Item } from "native-base";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item regular>
            <Input placeholder="Regular Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}
