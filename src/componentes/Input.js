import React, { Component } from "react";

import { StyleSheet, TextInput } from "react-native";

class Input extends Component {
  render() {
    return (
      <TextInput
        secureTextEntry={this.props.type == "password"}
        style={styles.input}
        placeholder={this.props.placeholder}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FAFAFA",
    height: 50,
    paddingHorizontal: 20,
    marginVertical: 5,
    color: "#231F20",
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 2
  }
});
export default Input;
