import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  info: {
    paddingLeft: 10
  },
  title: {
    paddingBottom: 0
  },
  fontTitle: {
    fontSize: 16,
    color: "#3E3F3A"
  },
  infoUser: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  infoUserIcon: {
    fontSize: 14,
    color: "#3A3A3A",
    marginRight: 3
  },
  infoUserText: {
    fontSize: 14,
    color: "#3A3A3A"
  },
  infoEntrega: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  infoEntregaIcon: {
    fontSize: 18,
    color: "#3A3A3A"
  },
  buttonEntrega: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
