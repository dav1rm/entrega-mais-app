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
  itemFeed: {
    flex: 1,
    marginTop: -14,
    marginBottom: 10
  }
});
export default styles;
