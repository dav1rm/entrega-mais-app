import { createStackNavigator } from "react-navigation";

import Tabs from "./pages/Tabs";
import Login from "./pages/Autenticacao/Login";
import Register from "./pages/Autenticacao/Register";

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Tabs",
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
