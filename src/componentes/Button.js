import React, { Component } from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

class Button extends Component {
  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={style == "line" ? styles.buttonLine : styles.button}
      >
        <Text
          style={style == "line" ? styles.textButtonLine : styles.textButton}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    padding: 15,
    height: 50,
    marginVertical: 3,
    borderRadius: 2
  },
  textButton: {
    color: "#fff",
    textAlign: "center"
  },
  buttonLine: {
    borderColor: "#00A4D4",
    borderWidth: 1,
    padding: 15,
    height: 50,
    marginVertical: 3,
    borderRadius: 2
  },
  textButtonLine: {
    color: "#00A4D4",
    textAlign: "center"
  }
});
export default Button;
