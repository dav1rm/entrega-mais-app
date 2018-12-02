import { createStackNavigator } from "react-navigation";

import ViewDelivery from "./ViewDelivery";
import DetailDelivery from "./DetailDelivery";
import ViewDeliveryman from "./ViewDeliveryman";
import TrackDelivery from "./TrackDelivery";
import Home from "./HomeScreen";

const StackHome = createStackNavigator(
  {
    ViewDelivery: {
      screen: ViewDelivery
    },
    ViewDeliveryman: {
      screen: ViewDeliveryman
    },
    TrackDelivery: {
      screen: TrackDelivery
    },
    Home: {
      screen: Home
    },
    DetailDelivery: {
      screen: DetailDelivery
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0D3782"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
      }
    }
  }
);
export default StackHome;
