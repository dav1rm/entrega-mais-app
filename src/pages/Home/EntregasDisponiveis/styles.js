import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  fontTitle: {
    fontSize: 16,
    color: "#231F20",
    marginRight: 0
  },
  iconTitle: {
    fontSize: 14,
    color: "#231F20",
    paddingRight: 10,
    paddingLeft: 10
  },
  fontSubtitle: {
    fontSize: 12,
    color: "#6C6C6C"
  },
  tagItem: {
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    backgroundColor: "#F44336"
  },
  tagText: {
    fontSize: 10,
    color: "#fff"
  },
  preco: {
    alignItems: "center",
    justifyContent: "center"
  },
  precoText: {
    fontSize: 12,
    color: "#00963F"
  }
});
export default styles;
