import { createStackNavigator } from "react-navigation";

import Tabs from "./pages/Tabs";
import Login from "./pages/Autenticacao/Login";
import Acount from "./pages/AcountScreen";
import ViewDelivery from "./pages/ViewDelivery";
import ViewDeliveryman from "./pages/ViewDeliveryman";
import TrackDelivery from "./pages/TrackDelivery";

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Acount: {
      screen: Acount,
      navigationOptions: {
        header: null
      }
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0D3782"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 18
      }
    }
  }
);
export default Routes;
